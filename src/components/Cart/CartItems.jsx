import { useCartContext } from '../../context/CartContext'
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import '../ItemDetail/ItemDetail.css';

function CartItems({ modalShow }) {
	const { cartList, calcularCantidad, total, removeItem, removeCart } = useCartContext()

	return (
		<>
            {calcularCantidad() === 0 ? (
				<Container>
					
					<h1 className="cartMessage">No Tienes elementos en el carrito</h1>
					
					<Button as={Link} to="/" className="addCart">
						Comprar
					</Button>
				</Container>
			) : (
        <Container>
            <h1 className="">Carrito</h1>
			
			

            <table className="table table-bordered text-center">
								<thead>
									<tr className="fs-5 fw-bold">
										<th>Cantidad</th>
										<th>Producto</th>
										<th>Precio unitario</th>
										<th>Subtotal</th>
										<th></th>
									</tr>
								</thead>
							<tbody>
								{cartList.map((prod) => (
									<tr key={prod.id}>
										<td>{prod.cantidad}</td>
										<td>{prod.title}</td>
										<td>{`$ ${(prod.price)}`}</td>
										<td>{`$ ${(prod.cantidad * prod.price)}`}</td>
										<td><Button className="addCart" onClick={() => removeItem(prod.id)}><FaTrash /></Button></td>
									</tr>
								))}
							</tbody>
						</table>
                        <div>
                            <p>Total compra: ${total()}</p>
                        </div>
                        <Button onClick={() => {modalShow()}} className="addCart">
							Terminar compra
						</Button>
                        <Button className="addCart" onClick={()=>removeCart()}>Eliminar compra</Button>
			
	  
			


        </Container>
    )}
    </>
);
}

export default CartItems;