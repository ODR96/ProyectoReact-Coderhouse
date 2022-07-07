import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext';
import './CartContainer.css';
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfig';
import { addDoc, collection, doc, increment, updateDoc } from 'firebase/firestore';


const CartContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const { cartListItems, clearCart, deleteItem, precioTotal } = useContext(CartContext);
    const navigate = useNavigate()
    const [formValue, setFormValue] = useState({ Nombre: '', Apellido: '', Telefono: '', Email: '' })
    const [order, setOrder] = useState({
        cliente: {},
        items: cartListItems.map(item => {
            return {
                id: item.id,
                titulo: item.titulo,
                cantidad: item.cantidad,
                precio: item.precio
            }

        }),
        fecha: new Date().toLocaleString({ dateStyle: 'full', timeStyle: 'long', hour12: 'true' }),
        total: precioTotal(),
    })

    const [success, setSuccess] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder({ ...order, cliente: formValue });
        saveData({ ...order, cliente: formValue });
    }

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value })
    }

    const finishOrder = () => {
        clearCart();
        navigate('/');
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'Compras');
        const orderDoc = await addDoc(orderFirebase, newOrder);
        setSuccess(orderDoc.id);
        updateStock();
    }

    const updateStock = async () => {
        const stockFirebase = collection(db, 'Productos');
        // eslint-disable-next-line array-callback-return
        order.items.map((item) => {
            const stockDoc = doc(stockFirebase, item.id)
            console.log(stockDoc)
            updateDoc(stockDoc, { stock: increment(-(item.cantidad)) })
        }, [])
    }

    return (
        <>
            {(cartListItems.length !== 0) ? (
                <>
                    <h1>Tu carrito de compras</h1>
                    <div className='cart-container'>
                        <div className='head-cart-container'>
                            <h3 className='head-cart-prod'>Producto</h3>
                            <h3 className='head-cart-desc'>Descripción</h3>
                            <h3 className='head-cart-cant'>Cantidad</h3>
                            <h3 className='head-cart-prec'>Precio</h3>
                            <h3 className='head-cart-eliminar'>Eliminar</h3>
                        </div>
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
                        <div className='btn-cart-vaciarCart'>
                            <Button onClick={() => setShowModal(true)}>Finalizar Compra</Button>
                        </div>
                        <Modal title={success ? 'Muchas gracias por su compra!' : 'Completa tus datos: '} open={showModal} handleClose={() => setShowModal(false)}>
                            {success ? (
                                <div>
                                    <p>Felicidades! Su compra se realizó con éxito.</p>
                                    <p>Su número de orden es: {success}</p>
                                    <button onClick={finishOrder}>Volver a la tienda</button>
                                </div>
                            ) : (
                                <form className="form-contact" onSubmit={handleSubmit}>
                                    <input className='form-inputs' id='nombre' type={"text"} name="Nombre" placeholder='*Nombre' value={formValue.Nombre} onChange={handleChange} required></input>
                                    <input className='form-inputs' id='apellido' type={"text"} name="Apellido" placeholder='*Apellido' value={formValue.Apellido} onChange={handleChange} required></input>
                                    <input className='form-inputs' id='telefono' type={"number"} name="Telefono" placeholder='*Telefono' value={formValue.Telefono} onChange={handleChange} required></input>
                                    <input className='form-inputs' id='email' type={"text"} name="Email" placeholder='*Email' value={formValue.Email} onChange={handleChange} required></input>
                                    <input className='form-inputs' id='email' type={"text"} name="checkEmail" placeholder='*Confirma tu Email' onChange={handleChange} required></input>
                                    <span>*Campos obligatorios</span>
                                        <button type="submit" className='btn-form'>ENVIAR</button>       
                                </form>
                            )}

                        </Modal>
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