// import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [title, setTitle] = useState('Cargando...')

    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Seleccione el producto: ')
        }, 1500)
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{title}</h2>
            <ItemListMemo products={products}/>
        </div>
    )
}

export default ItemListContainer