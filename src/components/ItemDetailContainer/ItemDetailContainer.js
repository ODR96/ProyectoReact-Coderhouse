import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from '../../utils/productsMock';
import { useParams, useNavigate } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productFilter)
        }, 2000)
    })
    }


    useEffect(() => {
        getItem()
            .then((res) => {
                if (productFilter === undefined) {
                    navigate('/NotFound')
                } else {
                    setProduct(productFilter);
                }
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [id])

    const productFilter = productos.find((product) => {
        return product.id === parseInt(id);
    })

    return (
        <div>
            <ItemDetail producto={product} />
        </div>
    )
}

export default ItemDetailContainer;