import Item from '../Item/Item';

const ItemList = ({ productos }) => {
    return (
        <>
            {
                productos.map(({ img, imgMini1, titulo, categoria, precio, stock, id, initial }) => {
                    return (
                        <div className='list-item' key={id}>
                            <Item
                                titulo={titulo}
                                categoria={categoria}
                                precio={precio}
                                img={img}
                                imgMini1={imgMini1}
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