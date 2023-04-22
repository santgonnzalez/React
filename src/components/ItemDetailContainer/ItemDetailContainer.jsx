// import getFetch from "../../services/getFetch"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore} from '../../services/getFirestore';


const ItemDetailContainer = () => {
    const[detail, setDetails] = useState([]);
    const { productoId } = useParams();

    useEffect(() => {
        const dataBase = getFirestore()

        const dbQuery = dataBase.collection("items").doc(productoId).get()

        dbQuery
        .then(prod => setDetails({id:prod.id, ...prod.data()}))
        .catch (error => alert("Error:", error))

    },[productoId])
    return(
        <div>
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer