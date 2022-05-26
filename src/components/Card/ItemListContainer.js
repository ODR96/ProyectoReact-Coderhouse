import ItemList from './ItemList';
import './ItemListContainer.css';
import { useState, useEffect } from "react";

const ItemListContainer = ({ tittle }) => {
    const [products, setProducts] = useState([]);
    const productos = [
        {
            id: 1,
            initial: 1,
            titulo: 'Titulo 1',
            img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32318_Disco_Solido_SSD_Team_512GB_GX2_530MB_s_ec9a07b5-grn.jpg',
            descripcion: ' ',
            precio: 300,
            stock: 5
        },
        {
            id: 2,
            initial: 1,
            titulo: 'Titulo 2',
            img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32318_Disco_Solido_SSD_Team_512GB_GX2_530MB_s_ec9a07b5-grn.jpg',
            descripcion: ' ',
            precio: 400,
            stock: 10,
        }, {
            id: 3,
            initial: 1,
            titulo: 'Titulo 3',
            img: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32318_Disco_Solido_SSD_Team_512GB_GX2_530MB_s_ec9a07b5-grn.jpg',
            descripcion: ' ',
            precio: 250,
            stock: 7
        }
    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [])

    return (
        <>
            <h2>{tittle}</h2>
            <div className='list-item'>
                <ItemList productos={products} />
            </div>
        </>
    )
}

export default ItemListContainer;