import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CloseCircleOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';

import Contador from '../Contador';
import { CartContext } from '../../context/cartContext';

import styles from './styles.module.css'

const { Meta } = Card;

const Cart = ({id, producto, imagen, precio, stock, categoria, marca, descripcion, cantidad }) => {

  const { actualizarCarrito, eliminarItem, restar, sumar } = useContext(CartContext)


  return(
    <Card className={styles.Card}
      
      cover={
        <Link to={`/item/${id}`}>
          <img className={styles.Imagen}
            alt={producto || "No Disponible"}
            src={imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"}
          />
        </Link>
      }
      actions={[
          <Contador className={styles.Contador} initial={1} stock={stock} onAdd={(contador) => {
            console.log(`Cantidad agregada ${contador}`)
            const nuevaCantidad = cantidad + contador
            { (stock - nuevaCantidad) >= 0 ?
               (sumar(contador),
                actualizarCarrito({id, producto, imagen, precio, stock, categoria, marca, descripcion, cantidad}, nuevaCantidad)
                ) :
                console.log(`No hay cantidades suficientes, quedan ${stock - cantidad}`) }
          }}/>,
          <Button className={styles.Boton} type="primary" onClick={() => { eliminarItem(id), restar(cantidad) }}>Eliminar Item <CloseCircleOutlined /></Button>
      ]}
    >
      <Link to={`/item/${id}`}>
        <Meta className={styles.Titulo}         
          title={producto || "No Disponible"}        
        />
      </Link>
      <p className={styles.Stock}>Stock: {stock || "No Disponible"}</p>
      <p className={styles.Cantidad}>Cantidad: {cantidad || "No Disponible"}</p>
      <p className={styles.Precio}>$ {((precio*cantidad).toFixed(2)) || "No Disponible"}</p>            
    </Card>   
  )
} 
export default Cart;