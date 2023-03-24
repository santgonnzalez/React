const Item = ({name,price,description,img}) =>{
    return(
        <div>
            <br/>
            <br/>
            <img src={img} alt={name}/>
            <br/>
            <h2>{name}</h2>
            <br/>
            <h3>Precio: ${price}</h3>
            <br/>
            <h4>Descripcion de producto: {description}</h4>
            <br/>
            <br/>
        </div>
    )
}

export default Item;