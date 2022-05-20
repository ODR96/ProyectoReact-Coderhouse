import Card from './Card'
import './ItemListContainer.css';

const ItemListContainer = ({ tittle }) => {
    return (
        <>
            <h2>{tittle}</h2>
            <div className='list-item'>
                <Card titulo={'Titulo1'} precio={300} stock={5} initial={1}/>
                <Card titulo={'Titulo2'} precio={400} stock={10} initial={1}/>
                <Card titulo={'Titulo3'} precio={250} stock={7} initial={1}/>
            </div>
        </>
    )
}

export default ItemListContainer;