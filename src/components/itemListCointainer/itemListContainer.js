import {useState, useEffect} from 'react'
import {getProductById, getProducts, getProductsByCategory} from '../../asyncMock'

import {Link, useParams} from 'react-router-dom'


const ItemListContainer = ({greeting}) =>{
    const[products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{

        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId)
                .then(response =>{
                    setProducts(response);
                })
                .catch(error =>{
                    console.log(error);
                })
    }, [])



    return(
        <div>
            <h1>{greeting}</h1>
            {
                products.map(prod =>{
                    return(
                        <div key={prod.id}>
                            <h3>{prod.name}</h3>
                            <Link to={`/item/${prod.id}`}>ver detalle</Link>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default ItemListContainer;