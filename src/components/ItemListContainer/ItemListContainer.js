import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import productos from '../../utils/productsMock';
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({ tittle }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const getProduct = async () => {
        const productSnapshot = await getDocs(collection(db, "Productos"));
        const prodcuctList = productSnapshot.docs.map((doc) => {
            let producto = doc.data();
            producto.id = doc.id;
            return producto;
        })
        return prodcuctList;
    }

    useEffect(() => {
        getProduct()
            .then((productos) => {
                setProducts([]);
                if (category === undefined) {
                    setProducts(productos);
                } else {
                    filterByCategory(productos);
                }
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [category])

    const filterByCategory = (array) => {
        return array.map((item) => {
            if (item.categoria.toLowerCase() === category.toLowerCase()) {
                return setProducts(products => [...products, item]);
            }
        })
    }

    const titulo = () => {
        if (category === undefined) {
            return tittle;
        } else {
            return category;
        }
    }

    return (
        <>
            <h2>{titulo()}</h2>
            <div className='list-item'>
                <ItemList productos={products} />
            </div>
        </>
    )
}

export default ItemListContainer;