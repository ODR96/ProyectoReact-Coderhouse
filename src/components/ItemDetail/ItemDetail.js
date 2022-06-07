import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ producto }) => {
    const { img, imgMini1, imgMini2, imgMini3, titulo, precio, descripcion, stock, initial, categoria } = producto;
    const [cantidad, setCantidad] = useState(1);
    const [mostrarBoton, setMostrarBoton] = useState(false);

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
                        stock={stock}
                        initial={initial}
                        setMostrarBoton={setMostrarBoton}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                    />
                    <Button><Link to={`/category/${categoria}`} className="Link">Volver</Link></Button>
                    </>
                    :
                    <>
                        <span>Precio Total: $ {precio * cantidad}</span>
                        <Button><Link to={'/cart'} className='Link'>Finalizar Compra</Link></Button>
                        <Button onClick={() => setMostrarBoton(false)}>Cancelar</Button>
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail;