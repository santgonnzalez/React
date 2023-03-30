import ItemCount from "../counter/ItemCount";

const ItemDetail = ({id, name, img, stock, description, price}) =>{

    const handleOnAdd = (quantity) =>{
        const objProduct = {
            id, name, price, quantity
        }
        console.log(objProduct);
    }

    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 200}}/>
            <p>Precio: ${price}</p>
            <p>Stock: {stock} unidades.</p>
            <p>Descripción: {description}</p>
            <ItemCount onAdd={handleOnAdd} stock={stock}/>
        </div>
    )
}

export default ItemDetail;
