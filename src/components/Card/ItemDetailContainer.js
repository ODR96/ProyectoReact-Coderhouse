import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { producto } from '../../utils/productsMock';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [])
    return (
                <div>
                    <ItemDetail producto={product} />
                </div>
            )
}

export default ItemDetailContainer;