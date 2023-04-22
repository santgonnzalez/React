import { Link } from 'react-router-dom';
import './Item.css';
import { Button } from 'react-bootstrap';

const Item = ({prod}) => {

    return(
        <div className="productos">
            <div className="card mt-4 mb-4">
                <div className="card-header">
                    <span className="cardTitle">{prod.name}</span> 
                </div>
                <div className="card-body">
                    <img className="imgCard" src={prod.img} alt="" />
                </div>
                <div className="card-footer">
                    <p className="price">Precio: ${prod.price}</p>
                    <Link to={`/producto/${prod.id}`}>
                        <Button className="addCart">
                        Ver detalles
                        </Button>
                    </Link>
                </div>    
            </div>
        </div>

    )
}

export default Item;