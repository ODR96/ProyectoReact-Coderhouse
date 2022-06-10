import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import './CartContainer.css';

const CartContainer = () => {
    const { cartListItems } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const { deleteItem } = useContext(CartContext);
    
    return (
        <>
            <h1>Tu carrito de compras</h1>
        <div className='cart-container'>
            {cartListItems.map((item) => {
                        return (
                            <div className='item-cart-prod' key={item.id}>
                                <div className='imgCart'>
                                    <img src={`${item.imgMini1}`} alt='Imagen producto' />
                                </div>
                                <div className='item-cart-cesc'>
                                    <p>{item.titulo}</p>
                                </div>
                                    <span>x{item.cantidad}</span>
                                    <span>$ {item.precio * item.cantidad}</span>
                                <div className='btnCartDelete'>
                                    <Button>
                                        <DeleteIcon onClick={() => deleteItem(item.id)} />
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
        </div>
        </>
    )
}

export default CartContainer;