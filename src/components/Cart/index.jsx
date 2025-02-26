import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HeartFilled, HeartOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';

import Contador from '../Contador';
import { CartContext } from '../../context/cartContext';
import { FavoritesContext } from '../../context/favoritesContext';

import styles from './styles.module.css'

const { Meta } = Card;

const Cart = ({id, producto, imagen, precio, stock, categoria, marca, descripcion, cantidad }) => {

  const { actualizarCarrito, eliminarItem, restar, sumar } = useContext(CartContext)
  const { favorites, agregarFavorito, eliminarFavorito } = useContext(FavoritesContext);
  const esFavorito = favorites.some((fav) => fav.id === id);


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
        <>
          <Button className={styles.BtnFav}
            key="favorite"
            onClick={() => {
              console.log(`Es favorito antes: ${esFavorito}`);
              if (esFavorito) {
                eliminarFavorito( id );
              } else {
                agregarFavorito({ id, producto, imagen, precio, categoria });
              }
            }}
          >
            {esFavorito ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
          </Button>

          <Contador className={styles.Contador} initial={1} stock={stock} onAdd={(contador) => {
            console.log(`Cantidad agregada ${contador}`)
            const nuevaCantidad = cantidad + contador
            { (stock - nuevaCantidad) >= 0 ?
               (sumar(contador),
                actualizarCarrito({id, producto, imagen, precio, stock, categoria, marca, descripcion, cantidad}, nuevaCantidad)
                ) :
                console.log(`No hay cantidades suficientes, quedan ${stock - cantidad}`) }
          }}/>

          <div className={styles.Btn}>     
            <Button className={styles.BtnDel} type="primary" onClick={() => { eliminarItem(id), restar(cantidad) }}>Eliminar Item <CloseCircleOutlined /></Button>
          </div>
        </>

      ]}
    >

      <div className={styles.Body}>
        <Link to={`/item/${id}`}>
          <Meta className={styles.Titulo}         
            title={producto || "No Disponible"}        
          />
        </Link>
        <p className={styles.Stock}>Stock: {stock || "No Disponible"}</p>
        <p className={styles.Cantidad}>Cantidad: {cantidad || "No Disponible"}</p>
        <p className={styles.Precio}>$ {((precio*cantidad).toFixed(2)) || "No Disponible"}</p>
      </div>            
    </Card>   
  )
} 
export default Cart;