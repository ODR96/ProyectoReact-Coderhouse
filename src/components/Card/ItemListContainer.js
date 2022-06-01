import ItemList from './ItemList';
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import productos from '../../utils/productsMock';

const ItemListContainer = ({ tittle }) => {
    const [products, setProducts] = useState([]);

    
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