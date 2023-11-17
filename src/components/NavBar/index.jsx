import React from 'react'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget'
import Usuario from '../Usuario';
import Logo from '../../assets/logoMarron.png'

import { CategoriasContext } from '../../context/categoryContext';

import { Button, Dropdown, Space } from 'antd';
import { DownOutlined, HeartOutlined, HomeOutlined, UserOutlined, WhatsAppOutlined, GiftOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

const NavBar = () => {

  const { categorias } = useContext(CategoriasContext)

  // traigo el array de categorias
  const arrayDeCategorias = categorias
  const items = arrayDeCategorias.map((categorias, index) => ({
    key: `${index}`,
    label: (     
      <NavLink key={index} to={`/category/${categorias}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >{categorias}</NavLink>      
    ),
  }))

  return (
    <div className={styles.NavBar}>
        <ul className={styles.Logo}>
          <Link to='/'>
            < img src={Logo} width={100} alt="Logo-ecommerce" />            
          </Link>
        </ul>

        <ul className={styles.secciones}>
          <Link to='/'>
            <Button type="primary">Inicio <HomeOutlined /></Button>
          </Link>

          <NavLink to='/productos'>
            <Button type="primary">Productos <GiftOutlined /></Button> 
          </NavLink>

          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Button type="primary">
                  Categorias
                  <DownOutlined />
                </Button>
              </Space>
            </a>
          </Dropdown>
          <Button type="primary">Favoritos <HeartOutlined /></Button> 
          <Button type="primary">Usuario <UserOutlined /></Button>
          <Button type="primary">Contacto <WhatsAppOutlined /></Button>            
        </ul>

        <ul className={styles.Personal}>          
          <CartWidget />  
          <Usuario />
        </ul>
        
    </div>
  )
}
export default NavBar