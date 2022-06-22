import './NavBar.css';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { collection, getDocs } from "firebase/firestore";
import db from "../../utils/firebaseConfig";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoria, setCategoria] = useState([]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getItem = async () => {
        const productSnapshot = await getDocs(collection(db, "Productos"));
        const prodcuctList = productSnapshot.docs.map((doc) => {
            let producto = doc.data();
            producto.id = doc.id;
            return producto;
        })
        return prodcuctList;
    }

    useEffect(() => {
        getItem()
            .then((prod) => {
                setCategoria(prod);
            })
            .catch((err) => {
                console.log('Fallo la llamada', err);
            })
    }, [])

    const agregarCategorias = categoria.map((item) => {
        return <div key={item.id}><MenuItem onClick={handleClose}><Link to={`/category/${item.categoria}`} className='Link'>{item.categoria}</Link></MenuItem></div>
    })

    return (
        <AppBar position="static">
            <Toolbar>
                <div className='logoImg'>
                    <Link to={'/'}>
                        <img src='./logo.png' alt='Logo de la pagina' />
                    </Link>
                </div>
                <ul>
                    <li>
                        <Button variant="text" className='Button'>
                            <Link to={'/'} className='Link'>Inicio</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            variant="text"
                        >
                            Categorias
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            {
                                agregarCategorias
                            }
                        </Menu>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;