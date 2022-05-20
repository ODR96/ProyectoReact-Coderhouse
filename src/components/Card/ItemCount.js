import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

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

    onAdd = () => {
        alert(`Se agregaron ${count} productos al carrito`);
    }

    return (
        <div className="count-item">
            <button onClick={removeCount}>-</button>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;