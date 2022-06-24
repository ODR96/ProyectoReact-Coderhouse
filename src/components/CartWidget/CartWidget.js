import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Button } from '@mui/material';
import './CartWidget.css';
import { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartListItems, clearCart, deleteItem, cantInCart } = useContext(CartContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='btn-cart'>
            {cartListItems.length !== 0 && (
                <>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant="text"
                    >
                        <ShoppingCartSharpIcon sx={{ color: "black", fontSize: 35 }} />
                        <span className='count-cart'>{cantInCart()}</span>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div>
                            {cartListItems.map((item) => {
                                return (
                                    <div className='itemCartProd' key={item.id}>
                                        <div className='imgCart'>
                                            <img src={`${item.imgMini1}`} alt='Imagen producto' />
                                        </div>
                                        <div className='itemCartDesc'>
                                            <p>{item.titulo}</p>
                                            <span>x{item.cantidad}</span>
                                            <span>$ {item.precio * item.cantidad}</span>
                                        </div>
                                        <div className='btnCartDelete'>
                                            <Button>
                                                <DeleteIcon onClick={() => deleteItem(item.id)} />
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                            {cartListItems.length !== 0 && (
                                <div className='btnCart'>
                                    <Button><Link to={'/cart'} className="Link">Finalizar Compra</Link></Button>
                                    <Button onClick={() => clearCart()}>Limpiar carrito</Button>
                                </ div>
                            )}
                        </div>
                    </Menu>
                </>
            )}

        </div>
    )
}

export default CartWidget;