import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../../context/CartContext';
import { Badge } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const CartWidget = ({cant}) => {
    const { calcularCantidad } = useCartContext();
    if (calcularCantidad() !== 0) {
        return(
            <>
            <Link to='/cart'>
                <FaShoppingCart className="cart" />
                    <Badge className="cartBadge" bg="dark">{calcularCantidad()}</Badge>
            </Link>
            </>     
        )
    }return <></> 
    
}

export default CartWidget;