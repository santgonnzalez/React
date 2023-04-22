import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    

    const agregarAlCarrito  = (items) => {

            const cart = [...cartList];
           if (cart.find((prod) => prod.id === items.id) !== undefined) {
               cart.find((prod) => prod.id === items.id).stock += items.stock;
               setCartList(cart);
           } else {
               setCartList([...cartList, {...items, stock: items.stock}]);
           }
       }
    const total = () => {
        return cartList.reduce((acum, prod) => acum + (prod.stock * prod.price), 0)
    }
    // const mostrarListado =(itemAdded) => {
    //     const findItem = cartList.find(itemCart => itemCart.product.id === itemAdded.product.id)
    //     if(findItem) {
    //         findItem.count = findItem.count + itemAdded.count
    //         setCartList(cartList)
    //     }
        
    // }

    
    const calcularCantidad = () => {
        return cartList.reduce( (acc, prod) => acc + prod.stock, 0 )
      }
    const isInCart = (id) => {
        return cartList.some(el => el.id === id)
    }
    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    const removeCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito, total, calcularCantidad, removeItem, removeCart, isInCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;