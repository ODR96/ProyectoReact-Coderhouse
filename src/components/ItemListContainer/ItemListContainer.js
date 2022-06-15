import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import productos from '../../utils/productsMock';

const ItemListContainer = ({tittle}) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000)
        })
    }
    useEffect(() => {
        getProducts()
        .then((res) => {
            setProducts([]);
            if(category === undefined){
                setProducts(res);
            } else {
                filterByCategory(res);
            }
        })
        .catch((err) => {
            console.log('Fallo la llamada', err);
        })
    }, [category])
    
    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.categoria.toLowerCase() === category.toLowerCase()){
                return setProducts(products => [...products, item]);
            }
        })
    }

    const titulo = () => {
        if(category === undefined) {
            return tittle;
        } else {
            return category;
        }
    }
    
    return (
        <>
            <h2>{titulo()}</h2>
            <div className='list-item'>
                <ItemList productos={products}/>
            </div>
        </>
    )
}

export default ItemListContainer;