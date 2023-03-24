import {useEffect, useState} from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({greeting}) =>  {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(products =>{
                setProducts(products)
            })
    }, [])
    console.log(products)

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;

