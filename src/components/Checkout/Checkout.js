import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra,getOrdenCompra } from '../../services/firestore/orders';
import { getProducts, getProductsById } from "../../services/firestore/products";
import { CartContext } from '../../context/CartContext';
import Swal from "sweetalert2"

const Checkout = () => {
    const {getTotal, cart, clearCart} = useContext(CartContext)
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prod => {
                if(prod.stock >= prodCarrito.quantity) {
                    prod.stock -= prodCarrito.quantity
                    getProductsById(prodCarrito.id, prod)
                } else {
                }
            })
        })

        createOrdenCompra(cliente, getTotal , new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id)
            .then(item => {
                Swal.fire(
                    'Compra finalizada',
                    `¡Muchas gracias por su compra, su orden es ${item.id}!`,
                    'success'
                )
                clearCart()
                e.target.reset()
            }).catch(error => {
                Swal.fire(
                    'Error',
                    `Hubo un error con su orden. Vuelva a intentarlo`,
                    'error'
                )
            })
            
        })
    }
        
        return (
            <div className='FormularioReact'>
                <h1 className='h1Formulario'>Complete sus datos para terminar la compra</h1>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div>
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido: </label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div>
                    <label htmlFor="celular" className="form-label">Numero telefonico: </label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div>
                    <label htmlFor="direccion" className="form-label">Dirección: </label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="botonFormulario">Finalizar Compra</button>
            </form>
            </div>
        )
}

export default Checkout