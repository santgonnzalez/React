import Item from "../Item/Item"
import './ItemList.css';

const ItemList = ( {product} ) => {
    // se mapea info
    // El map genera los item (enviándole las props)
    return (
        <div className="itemList">
            { product.map(prod=> <Item key={prod.id} prod={prod}/>) }
        </div>
    
    

    
    )
}

export default ItemList;