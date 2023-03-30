import { useEffect, useState } from 'react';
import {getProductById} from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState({});

    const {itemId} = useParams();

    useEffect(()=>{
        getProductById(itemId)
                .then(response =>{
                    setProduct(response)
                })
                .catch(error =>{
                    console.log(error)
                })
    }, [itemId])


    return(
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;