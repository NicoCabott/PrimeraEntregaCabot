import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = (children) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
         setCart([...cart, item])

    }

    
    const clear = () => {
        setCart([])
    }
    
    const removeItem = () => {
        setCart(cart.filter((prod) => prod.id !== id))
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }  

    return(
        <>
            <CartContext.Provider value={{cart, clear, isInCart, removeItem, addItem }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext)