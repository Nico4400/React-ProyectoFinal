import React, { useContext, useEffect, useState } from 'react';

import Contador from '../Contador';
import { CartContext } from '../../context/cartContext';

import { Card } from 'antd';

import styles from './styles.module.css'

const { Meta } = Card;


const ItemDetail = ({id, producto, imagen, precio, stock, categoria, marca, descripcion}) => {

  const {cantidadCarrito, sumar, agregarItem, estaEnCarrito, cart, indexCarrito, actualizarCarrito } = useContext(CartContext)
 

  return (
    <Card className={styles.Card}
      
      cover={
        <img className={styles.Imagen}
          alt={producto || "No Disponible"}
          src={imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"}
        />
      }
      actions={[
          <Contador className={styles.Contador} initial={1} stock={stock} onAdd={(contador) => {
            console.log(`Cantidad agregada ${contador}`)       

            { !estaEnCarrito(id) ?
              ( sumar(contador),
              agregarItem({id, producto, imagen, precio, stock, categoria, marca, descripcion}, contador)              
              ) : 
              console.log(cantidadCarrito) 
            }
            
            const index = indexCarrito(id)
            if (index !== -1 && cart[index] && cart[index].cantidad !== undefined) {
                            
              const cantidad = cart[index].cantidad
              const nuevaCantidad = cantidad + contador          

              { (stock - nuevaCantidad) >= 0 ?
                ( sumar(contador),
                  actualizarCarrito({id, producto, imagen, precio, stock, categoria, marca, descripcion, cantidad}, nuevaCantidad)
                ) :
                  console.log(`No hay cantidades suficientes, quedan ${stock - cantidad}`) 
              }
            }
          }}/>
      ]}
    >
      <p className={styles.Precio}>$ {precio || "No Disponible"}</p>    
      <Meta          
        title={producto || "No Disponible"}
        description= {`Stock : ${stock || "No Disponible"} Un.`}
      />
      <p className={styles.Categoria}>Categoria: {categoria || "No Disponible"}</p> 
      <p className={styles.Marca}>Marca: {marca || "No Disponible"}</p>   
      <p className={styles.Descripcion}>{descripcion || "No Disponible"}</p> 
    </Card>   
  )
}
export default ItemDetail;