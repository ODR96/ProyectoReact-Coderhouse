import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

    const isInCart = (id) => {
        return cartListItems.find(cartItem => (cartItem.id === id));
    }


    const precioTotal = () => {
        if (cartListItems.length !== 0) {
            return cartListItems.reduce((acc, current) => acc + current.precio * current.cantidad, 0)
        }
    }

    const cantInCart = () => {
        if (cartListItems.length !== 0) {
            return cartListItems.reduce((acc, current) => parseInt(acc) + parseInt(current.cantidad), 0)
        }
    }

    const addProductCart = (producto) => {
        if (!isInCart(producto.id)) {
            setCartListItems(cartListItems => [...cartListItems, producto]);
            localStorage.setItem('carrito', JSON.stringify([...cartListItems, producto]));
        } else if (isInCart(producto.id)) {
            const newCart = cartListItems.map((item) => {
                if(item.id === producto.id && (producto.stock >= (producto.cantidad + item.cantidad))) {
                    item.cantidad += producto.cantidad;
                }
            return item;
            })
            setCartListItems(newCart);
            localStorage.setItem('carrito', JSON.stringify([...newCart]));
        }
    }

    const deleteItem = (id) => {
        const newCart = cartListItems.filter(product => product.id !== id)
        setCartListItems(newCart);
        localStorage.setItem('carrito', JSON.stringify([...newCart]));
    }

    const clearCart = () => {
        setCartListItems([]);
        localStorage.clear();
    }


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