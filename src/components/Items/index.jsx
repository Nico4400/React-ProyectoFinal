import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Card, Button } from 'antd';
import { HeartFilled, HeartOutlined, PlusOutlined } from '@ant-design/icons';

import { FavoritesContext } from '../../context/favoritesContext';

import styles from './styles.module.css'


const { Meta } = Card;

const Items = ({ id, producto, imagen, precio, categoria }) => {
  const { favorites, agregarFavorito, eliminarFavorito } = useContext(FavoritesContext);

  // Verificar si el producto ya está en favoritos
  const esFavorito = favorites.some((fav) => fav.id === id);

// const Items = ({id, producto, imagen, precio, categoria}) => (
  return (
    <Card className={styles.ProductoCard} // Nueva clase CSS para uniformar las tarjetas      
      cover={
        <img className={styles.ProductoImg}
          alt={producto || "No Disponible"}
          src={imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"}
        />
      }
      actions={[
        <Link to={`/item/${id}`}>
          <Button className={styles.Boton} >Ver Mas <PlusOutlined /></Button>
        </Link>,
        <Button key="favorite" onClick={() => esFavorito ? eliminarFavorito(id) : agregarFavorito({ id, producto, imagen, precio, categoria })} >
          {esFavorito ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
        </Button>
      ]}
    >
      <p>$ {precio || "No Disponible"}</p>    
      <Meta          
        title={producto || "No Disponible"}
        description= {`Categoria : ${categoria || "No Disponible"}`}
      />    
    </Card> 
  );
};
export default Items;