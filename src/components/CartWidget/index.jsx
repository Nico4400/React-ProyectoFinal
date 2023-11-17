import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';

import { ShoppingCartOutlined } from "@ant-design/icons"
import { Badge } from 'antd';


const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)

    return (
        <Link to='/cart' style={{ display: cantidadCarrito >= 0 ? 'block' : 'none'}}>
            <div>
                <Badge count={cantidadCarrito}>
                    <ShoppingCartOutlined style={{ fontSize: '50px',  color: 'white'}} />                         
                </Badge>               
            </div>
        </Link>
    )
}

export default CartWidget

