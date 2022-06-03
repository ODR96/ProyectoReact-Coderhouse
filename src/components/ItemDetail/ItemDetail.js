import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemDetail = ({producto}) => {

    const {img, imgMini1, imgMini2, imgMini3, titulo, precio, descripcion, stock, initial, categoria} = producto;

    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`);
    }
    return(
        <div className="detail-card">
            <div className="image-card">
            <img  src={img} className="imgPrincipal" alt=''></img>
            <img src={imgMini1} className="imgMuestra" alt=''></img>
            <img src={imgMini2} className="imgMuestra" alt=''></img>
            <img src={imgMini3} className="imgMuestra" alt=''></img>
            </div>
            <div className='descripcion'>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <span>$ {precio}</span>
            <ItemCount onAdd={ onAdd } stock={stock} initial={initial}/>
            <button><Link to={`/category/${categoria}`} className="Link">Volver</Link></button>
            </div>
        </div>
    )
}

export default ItemDetail;