import ItemCount from "./ItemCount";
import './Card.css';

const Card = ({titulo, precio, stock, initial}) => {
    return (
        <div className="card-item">
            <div>
                <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32318_Disco_Solido_SSD_Team_512GB_GX2_530MB_s_ec9a07b5-grn.jpg" width={150}></img>
            </div>
            <p>{titulo}</p>
            <span>$ {precio}</span>
            <ItemCount stock={stock} initial={initial}/>
        </div>
    )
}

export default Card;