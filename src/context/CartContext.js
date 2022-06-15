import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState([]);

    const isInCart = (id) => {
        return cartListItems.find(cartItem => (cartItem.id === id));
    }

    const precioTotal = () => {
        if (cartListItems.length !== 0) {
            return cartListItems.reduce((acc, current) => acc + current.precio  * current.cantidad, 0)
        }
    }

    const cantInCart = () => {
        if (cartListItems.length !== 0) {
            return cartListItems.reduce((acc, current) => acc + current.cantidad, 0)
        }
    }

    const addProductCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCartListItems(cartListItems => [...cartListItems, producto]);
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
        deleteItem,
        isInCart,
        precioTotal,
        cantInCart
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };