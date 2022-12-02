import {useState } from "react";
import {createContext,useContext} from 'react'

const AppContext = createContext([])
export const useCartContext = () => useContext(AppContext)

const CartContext = ({children}) =>{

    const [cart, setCart] = useState([])

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)
    }

    const totalProducts = () => cart.reduce((acc, productActual) => acc + productActual.quantity, 0)

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id)? true : false

    const removeCart = (id) => setCart(cart.filter(product => product.id !== id))


    return(
        <AppContext.Provider value={{
            clearCart,
            isInCart,
            removeCart,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default CartContext