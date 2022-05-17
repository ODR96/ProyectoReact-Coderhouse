import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Button } from '@mui/material';

const CartWidget = () => {
    return (
        <div className='btn-cart'>
        <Button>
            <ShoppingCartSharpIcon sx={{color : "black", fontSize : 35}}/>
        </Button>
        </div>
    )
}

export default CartWidget;