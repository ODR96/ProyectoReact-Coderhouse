import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
    const {addProductCart} = useContext(CartContext);
    const {deleteItem} = useContext(CartContext);
    const {id, img, imgMini1, imgMini2, imgMini3, titulo, precio, descripcion, stock, initial, categoria } = producto;
    const [cantidad, setCantidad] = useState(1);
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const sendItem = (cant) => {
        addProductCart({...producto, cantidad : cant})
        setMostrarBoton(true)
    }

    const modificarCompra = (id) => {
        deleteItem(id)
        setMostrarBoton(false)
    }

    return (
        <div className="detail-card">
            <div className="image-card">
                <img src={img} className="imgPrincipal" alt=''></img>
                <img src={imgMini1} className="imgMuestra" alt=''></img>
                <img src={imgMini2} className="imgMuestra" alt=''></img>
                <img src={imgMini3} className="imgMuestra" alt=''></img>
            </div>
            <div className='descripcion'>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <span>$ {precio}</span>

                {!mostrarBoton ?
                    <>
                    <ItemCount
                        titulo={titulo}
                        imgMini1={imgMini1}
                        precio={precio}
                        stock={stock}
                        initial={initial}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={sendItem}
                    />
                    <Button><Link to={`/category/${categoria}`} className="Link">Volver</Link></Button>
                    </>
                    :
                    <>
                        <Button><Link to={'/cart'} className='Link'>Finalizar Compra</Link></Button>
                        <Button onClick={() => modificarCompra(id)}>Modificar Compra</Button>
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail;