import ItemCount from "../ItemCount/ItemCount";
import './Item.css';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import CartContext from '../../context/CartContext';

const Item = ({ img, titulo, imgMini1, categoria, precio, stock, initial, id }) => {
    const {addProductCart} = useContext(CartContext);
    const {deleteItem} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(initial);
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const producto = { img, imgMini1, titulo, categoria, precio, stock, id, initial };
    
    const sendItem = (cant) => {
        addProductCart({...producto, cantidad : cant})
        setMostrarBoton(true)
    }

    const modificarCompra = (id) => {
        deleteItem(id)
        setMostrarBoton(false)
    }

    return (
        <div className="card-item">
            <div className="card-item__img">
                <img src={img} width={200} alt='Foto ilustrativa'></img>
            <button className="btn-card">
                <Link to={`/item/${id}`} categoria={categoria} className="Link">
                    Ver más
                </Link>
            </button>
            </div>
            <p>{titulo}</p>
            <span>$ {precio}</span>
            {!mostrarBoton ?
            <ItemCount
            stock={stock} 
            titulo={titulo}
            imgMini1={imgMini1}
            precio={precio}
            id={id}
            initial={initial} 
            cantidad={cantidad} 
            setCantidad={setCantidad}
            setMostrarBoton={setMostrarBoton}
            onAdd={sendItem}
            />
            :
            <>
            <span>Precio Total: $ {precio * cantidad}</span>
            <Button onClick={() => (sendItem(producto))}><Link to={'/cart'} className='Link'>Finalizar Compra</Link></Button>
            <Button onClick={() => modificarCompra(id)}>Modificar Compra</Button>
            
            </>
        }
        </div>
    )
}

export default Item;