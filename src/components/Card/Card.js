
const Card = ({titulo, precio}) => {
    return (
        <div className="card-item">
            <div>
                <img src=""></img>
            </div>
            <p>{titulo}</p>
            <span>$ {precio}</span>
            <button>Detalle</button>
        </div>
    )
}

export default Card;