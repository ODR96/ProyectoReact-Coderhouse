import ItemCount from "../ItemCount/ItemCount";
import './Item.css';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import CartContext from '../../context/CartContext';
import Modal from "../Modal/Modal";


const Item = ({ img, titulo, imgMini1, categoria, precio, stock, initial, id }) => {
    const [showModal, setShowModal] = useState(false)
    const { addProductCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(initial);

    const producto = { img, imgMini1, titulo, categoria, precio, stock, id, initial };

    const sendItem = (cant, bool) => {
        addProductCart({ ...producto, cantidad: cant })
        setShowModal(bool);
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
                <ItemCount
                    stock={stock}
                    titulo={titulo}
                    imgMini1={imgMini1}
                    precio={precio}
                    id={id}
                    initial={initial}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={sendItem}
                />
            <Modal title={"Producto agregado"} open={showModal} handleClose={() => setShowModal(false)}>
                <div>
                    <p>Se agrego {titulo} al carrito, desea finalizar la compra?</p>
                    <Button onClick={() => (setShowModal(false))}>Seguir Comprando</Button>
                    <Button onClick={() => (sendItem(producto, true))}><Link to={'/cart'} className='Link'>Finalizar Compra</Link></Button>
                </div>
            </Modal>
        </div>
    )
}

export default Item;