import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([]);

    const addProductCart = (producto) => {
        let isInCart = cartListItems.find(cartItem => (cartItem.id === producto.id));
        if (!isInCart) {
            setCartListItems(cartListItems => [...cartListItems, producto]);
        } else {
            
        }
    }

    const deleteItem = (id) => {
        const newCart = cartListItems.filter(product => product.id !== id)
        setCartListItems(newCart);
    }

    const clearCart = () => setCartListItems([]);

    const data = {
        cartListItems,
        addProductCart,
        clearCart,
        deleteItem
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };