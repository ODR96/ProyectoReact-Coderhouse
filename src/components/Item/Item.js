import ItemCount from "../ItemCount/ItemCount";
import './Item.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

const Item = ({ img, titulo, categoria, precio, stock, initial, id }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [mostrarBoton, setMostrarBoton] = useState(false);

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
            initial={initial} 
            cantidad={cantidad} 
            setCantidad={setCantidad}
            setMostrarBoton={setMostrarBoton}
            />
            :
            <>
            <span>Precio Total: $ {precio * cantidad}</span>
            <Button><Link to={'/cart'} className='Link'>Finalizar Compra</Link></Button>
            <Button onClick={() => setMostrarBoton(false)}>Cancelar</Button>
            </>
        }
        </div>
    )
}

export default Item;