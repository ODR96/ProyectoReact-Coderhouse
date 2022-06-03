import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(1);

    const removeCount = () => {
        if (count > initial) {
            setCount(count - 1);
        } else {
            alert('No puede poner menos productos');
        }
    }
    
    const addCount = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            alert('No hay stock suficiente');
        }
    }

    return (
        <div className="count-item">
            <button onClick={removeCount}>-</button>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
            <div>
                <button onClick={ () => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;