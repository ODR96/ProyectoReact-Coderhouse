import { Button } from "@mui/material"
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <Button><Link to={'/'} className='Link'>Volver</Link></Button>
        </>
    )
}

export default Cart;