import './CartWidget.css'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {
    const { totalQuantity, total } = useContext(CartContext)

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity} total ${total}
        </div>
    );
}


export default CartWidget