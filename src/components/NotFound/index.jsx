import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HomeOutlined, GiftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './styles.module.css'


const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <h1>
                404 Not Found
            </h1>
            <h2>
                404 Página no encontrada
            </h2>            

            <Link to='/'>
                <Button type="primary">Inicio <HomeOutlined /></Button>
            </Link>

            <NavLink to='/productos'>
                <Button type="primary">Productos <GiftOutlined /></Button> 
            </NavLink>                  
        </div>
    )
}
export default NotFound