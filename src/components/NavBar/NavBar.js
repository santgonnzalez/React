import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return(
        <nav style={{display:'flex', justifyContent:'space-arround',alignItems:'center'}}>
            <section>
                <button className="btn btn-secondary">Inicio</button>
                <button className="btn btn-secondary">Productos</button>
                <button className="btn btn-secondary">Ofertas</button>
                <button className="btn btn-secondary">Blog</button>
                <button className="btn btn-secondary">Acerca de nosotros</button>
                <button className="btn btn-secondary">Contacto</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar;