import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <>
            {
                productos.map(({ img, titulo, categoria, precio, stock, id, initial }) => {
                    return (
                        <div className='list-item' key={id}>
                            <Item
                                titulo={titulo}
                                categoria={categoria}
                                precio={precio}
                                img={img}
                                stock={stock}
                                initial={initial}
                                id={id} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemList;