import { Button } from "@mui/material"
import { Link } from 'react-router-dom'
import CartContainer from "../components/CartContainer/CartContainer";

const Cart = () => {
    return (
        <>
            <CartContainer></CartContainer>
            <Button><Link to={'/'} className='Link'>Seguir Comprando</Link></Button>
        </>
    )
}

export default Cart;