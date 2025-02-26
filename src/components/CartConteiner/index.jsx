import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import Cart from "../Cart";
import { CartContext } from "../../context/cartContext";

import { Button } from "antd";
import { HomeOutlined, GiftOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

const CartContainer = () => {

    const { cart, limpiarCarrito, setcantidadCarrito, precioTotalCarrito } = useContext(CartContext)

    return(
        <div className={styles.Cart}> 
            { cart.length === 0 ?
            <>
                <div className={styles.Volver}>
                    <h2>El Carrito se Encuentra Vacio.</h2>
                    <Link to='/'><Button type="primary">Inicio <HomeOutlined /></Button></Link>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>
                </div>
            </> :       
            <>          
                {cart.map(prod => <Cart key={prod.id} {...prod} />)}
                <h2 className={styles.TotalPrice}>Monto Total: {precioTotalCarrito.toFixed(2)}</h2>
                <div className={styles.Finalizar}>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>
                    <NavLink to='/checkout'><Button type="primary">Finalizar Compra <CheckOutlined /></Button></NavLink>
                    <Button type="primary" onClick={() => { limpiarCarrito(), setcantidadCarrito(0) }}>Vaciar Carrito <DeleteOutlined /></Button>
                </div>
            </>
            }
        </div>        
    )
}
export default CartContainer