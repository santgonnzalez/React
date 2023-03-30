import CartWidget from "../CartWidget/CartWidget";

import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav>
            <h1>Ecommerce</h1>
            <div>
                <Link to='/category/phone'>Celulares</Link>
                <Link to='/category/smartwatch'>Smart Watch</Link>
                <Link to='/category/laptop'>Notebooks</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;