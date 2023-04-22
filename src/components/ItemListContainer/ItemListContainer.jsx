import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirestore";

const ItemListContainer = () => {
    const[product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        
    //     if(id) {
    //         getFetch
    //         .then( res => {
    //             setProduct(res.filter(prod => prod.tipo === id ))
    //         })
    //         .catch(err => console.log(err))

    //     }else {
    //         getFetch
    //         .then( res => {
    //             setProduct(res)
    //         })
    //         .catch(err => console.log(err))

    //     }
        
        // }, [id])

        const dataBase = getFirestore() 
        
        if (id) {

            const dbQuery = dataBase.collection("items").where("tipo", "==", id).get() 

            dbQuery
            .then(resp => setProduct(resp.docs.map(prod => ({id:prod.id, ...prod.data()}))))
            .catch (error => alert("Error:", error))
        }

        else {

            const dbQuery = dataBase.collection("items").orderBy("tipo").get() 

            dbQuery
            .then(resp => setProduct(resp.docs.map(prod => ({id:prod.id, ...prod.data() }) )))
            .catch (error => alert("Error:", error))
        } 

    },[id])      

    return(
        <div className="container">
            <ItemList product={product} />
        </div>
    )

    // const addItem = (qty,stock) => {
    //     const message = `Agregaste ${ qty } producto`;
    //     if(stock !==0) {
    //         (qty === 1) ? alert(message) : alert(message + `s`)
    //     }
    
    // }
}

export default ItemListContainer;