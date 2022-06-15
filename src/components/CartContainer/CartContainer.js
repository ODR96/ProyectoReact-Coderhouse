import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import './CartContainer.css';

const CartContainer = () => {
    const { cartListItems } = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const { deleteItem } = useContext(CartContext);
    const { precioTotal } = useContext(CartContext);

    return (
        <>
            {cartListItems.length !== 0 ? (
                <>
                    <h1>Tu carrito de compras</h1>
                    <div className='cart-container'>
                        {cartListItems.map((item) => {
                            return (
                                <div className='item-cart-prod' key={item.id}>
                                    <div className='imgCart'>
                                        <img src={`${item.imgMini1}`} alt='Imagen producto' />
                                    </div>
                                    <div className='item-cart-desc'>
                                        <p>{item.titulo}</p>
                                    </div>
                                    <div className='item-cart-cant'>
                                        <span>x{item.cantidad}</span>
                                    </div>
                                    <div className='item-cart-prec'>
                                        <span>$ {item.precio * item.cantidad}</span>
                                    </div>
                                    <div className='btn-cart-delete'>
                                        <Button>
                                            <DeleteIcon onClick={() => deleteItem(item.id)} />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='cart-total'>
                            <span>Total: {precioTotal()}</span>
                        </div>
                        <div className='btn-cart-seguirCompra'>
                            <Button><Link to={'/'} className='Link'>Seguir Comprando</Link></Button>
                        </div>
                        <div className='btn-cart-vaciarCart'>
                            <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
                        </div>
                    </div>
                </>
            )
                :
                <>
                    <h1>Su carrito de compras está vacío...</h1>
                    <div className='btn-cart-seguirCompra'>
                        <Button><Link to={'/'} className='Link'>Ir al catálogo de productos</Link></Button>
                    </div>
                </>
            }
        </>
    )
}

export default CartContainer;