import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    
    const addToCart = (product) =>{
        const index = cartItems.findIndex(prod => prod.id === product.id)
        
        if (index === -1){
            setCartItems([...cartItems, product])
        } else {
            cartItems[index].count += product.count
            setCartItems([...cartItems])
        }
        
    }

    const totalCount = () => cartItems.reduce((count, item) => count += item.count, 0)

    const totalPrice = () => cartItems.reduce((count, item) => count += (item.count * item.price), 0)

    const getItem = (id) =>{
        return cartItems.find((item) => item.id === id)
    }

    const removeItem = (id) => setCartItems(cartItems.filter((item) => item.id !== id))

    const clearCart = () =>{
        setCartItems([])
    }

    return(
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            totalCount,
            totalPrice,
            getItem,
            removeItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}