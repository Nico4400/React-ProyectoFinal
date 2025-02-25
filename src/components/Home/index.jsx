import React from 'react';
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import { GiftOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';

import { CategoriasContext } from '../../context/categoryContext';

import styles from './styles.module.css'

const contentStyle = {
    height: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}

const Home = () => {

    const { imagenesConCategoria } = useContext(CategoriasContext)
    
    const images = imagenesConCategoria.map((imagenesConCategoria, index, ) => (
        <div className={styles.Carousel} key={index}>
            <img className={styles.Imagen}
                src={imagenesConCategoria.imagen || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOM5VF1DLrm1Wt6w3AVGeztqrJrEyg1tWYkC2K74aAQoytFi-pRQreSz2aeCkElwn0x0&usqp=CAU"} 
                alt={imagenesConCategoria.categoria} 
                style={contentStyle} 
            />
            <h3 className={styles.Categoria} >{imagenesConCategoria.categoria}</h3>
        </div>
    ))

    return (
        <div className={styles.Home}>
            <h1 className={styles.Titulo}>
                Bienvenido al Ecommerce
            </h1>
            <div className={styles.CarouselContainer}>
                <Carousel autoplay>
                    {images}
                </Carousel>
            </div>

            <h2 className={styles.Descripcion}>
                Aqui encontraras los productos que buscas con la mejor calidad y al menor precio
            </h2> 
            <NavLink to='/productos'>
                <Button type="primary">Productos <GiftOutlined /></Button> 
            </NavLink>                  
        </div>
    )
}
export default Home