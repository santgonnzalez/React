import { useCartContext } from "../../context/CartContext";
import  { Button, Modal } from 'react-bootstrap';
import '../ItemDetail/ItemDetail.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { getFirestore } from "../../services/getFirestore";
import firebase from "firebase";
import 'firebase/firestore';
import CartForm from "./CartForm";
import CartItems from "./CartItems";


const Cart = () => {
    const{cartList, total, removeCart, removeItem, calcularCantidad} = useCartContext();
	const [idOrder, setIdOrder] = useState('')
	const [show, setShow] = useState(false)//modal

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })


	const generarOrden = () => {
		let orden = {}
		
		orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
        orden.buyer = formData
        orden.total = total();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })
		setIdOrder("")

		const dbQuery = getFirestore();
		dbQuery.collection('orders').add(orden)
		.then(resp => setIdOrder(resp.id))// mostrar id al usuario
        .catch (error => alert("Error:", error))
        .finally(()=> setFormData({
            name:'',
            phone:'',
            email: '',
        }))

		const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();
        
        // por cada item restar del stock la cantidad de el carrito
    
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find((item) => item.id === docSnapshot.id).cantidad,
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })


	}	
	

	const handleChange = (e) => {
		setFormData({
			...formData, 
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		generarOrden()
	}

	function handleClose() {
		setShow(false)
		removeCart()
		}

  
	const modalClose = () => setShow(false)
	
	const modalShow = () => setShow(true)

    return(
        <>
			<CartItems modalShow={modalShow} /> 
			<Modal show={show} onHide={modalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Datos del comprador</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<CartForm formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
				</Modal.Body>
				<Modal.Footer>
					{idOrder !== "" && (
						<>
							
								<Modal.Body className="addCart text-center text-white fw-normal">
									{`Gracias por comprar en Chester Pet Shop 
									Su número de orden es:  ${idOrder}`}
								</Modal.Body>
							
							<Button as={Link} to="/" variant="secondary" className="addCart" onClick={handleClose}>
								Cerrar
							</Button>
						</>
					)}
				</Modal.Footer>
			</Modal>
		</>
);
}

export default Cart;