import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import db from "../../utils/firebaseConfig";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    const getItem = async () => {
        const docRef = doc(db, "Productos", id);
        const docSnapshop = await getDoc(docRef);
        let producto = docSnapshop.data();
        producto.id = docSnapshop.id;
        return producto;
    }


    useEffect(() => {
        getItem()
            .then((prod) => {
                if (prod.id === undefined) {
                    navigate('/NotFound')
                } else {
                    setProduct(prod);
                }
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [id])

    return (
        <div>
            <ItemDetail producto={product} />
        </div>
    )
}

export default ItemDetailContainer;