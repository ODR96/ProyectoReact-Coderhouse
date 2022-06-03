import ItemCount from "../ItemCount/ItemCount";
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({ img, titulo, categoria, precio, stock, initial, id }) => {
    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`);
    }
    return (
        <div className="card-item">
            <div>
                <img src={img} width={200} alt='Foto ilustrativa'></img>
            </div>
            <p>{titulo}</p>
            <span>$ {precio}</span>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} />
            <button className="btn-card">
                <Link to={`/item/${id}`} categoria={categoria} className="Link">
                    Ver más
                </Link>
            </button>
        </div>
    )
}

export default Item;