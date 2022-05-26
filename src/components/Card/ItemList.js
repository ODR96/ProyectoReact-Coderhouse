import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <>
                    {
                productos.map(({ img, titulo, precio, stock, id, initial }) => {
                    return (
                        <div className='list-item' key={id}>
                            <Item titulo={titulo} precio={precio} img={img} stock={stock} initial={initial}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemList;