import ItemCount from "./ItemCount";
import './Item.css';


const Item = ({img, titulo, precio, stock, initial}) => {
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
            <ItemCount onAdd={ onAdd } stock={stock} initial={initial}/>
        </div>
    )
}

export default Item;