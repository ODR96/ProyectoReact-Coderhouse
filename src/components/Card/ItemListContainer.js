import Card from './Card'

const ItemListContainer = ({ tittle }) => {
    return (
        <>
            <h2>{tittle}</h2>
            <div>
                <Card titulo={'Titulo1'} precio={300}/>
                <Card titulo={'Titulo2'} precio={400}/>
                <Card titulo={'Titulo3'} precio={250}/>
            </div>
        </>
    )
}

export default ItemListContainer;