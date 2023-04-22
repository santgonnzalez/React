import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import  { Button } from 'react-bootstrap';


const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(0)
    const {agregarAlCarrito} = useCartContext()
    const onAdd =(cant)=>{
        setCount(cant)
        agregarAlCarrito({...detail, cantidad: cant})
    }
    console.log(count)

    return (
        <div className="cardDetail card w-50 mt-5 mb-5">
            <div className="card-header">
                <span className="cardTitle">{detail.name}</span>   
            </div>
            <div className="card-body">
                <img className="imgDetail mx-auto d-block" src={detail.img} alt="" />
            </div>
            <hr />
                <div className="card-body">
                <span className="cardTitle">{detail.description}</span>
                </div>
            
            <div className="card-footer">
                <p className="cardTitle">Cantidad disponible: {detail.stock}</p>
                <p className="cardTitle">Precio: ${detail.price}</p>
                {count === 0 ? 
                <ItemCount initial={count} stock={detail.stock} onAdd={onAdd}/>
                :
                <Link to="/cart">
                                <Button className="addCart">Finalizar compra</Button>
                </Link>
                }
            </div> 
        </div>  
    )
}

export default ItemDetail