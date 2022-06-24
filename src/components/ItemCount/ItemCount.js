import { Button } from "@mui/material";
import './ItemCount.css';

const ItemCount = ({ stock, initial, cantidad, setCantidad, onAdd }) => {

    const removeCount = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        } else {
            alert('No puede poner menos productos');
        }
    }

    const addCount = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
            alert('No hay stock suficiente');
        }
    }

    return (
        <>
            {(stock === 0) ? (
                <span>No hay stock disponible</span>
            )
                :
                <>
                    <div className="count-item">
                        <Button onClick={removeCount} className="card-item-button">-</Button>
                        <p>{cantidad}</p>
                        <Button onClick={addCount} className="card-item-button">+</Button>
                        <div>
                            <Button className="card-item-button" onClick={() => onAdd(cantidad, true)}>
                                Agregar al carrito
                            </Button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default ItemCount;