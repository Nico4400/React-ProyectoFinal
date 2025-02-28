import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

import CartWidget from '../CartWidget'
import Usuario from '../Usuario';
import Logo from '../../assets/logoMarron.png'

import { CategoriasContext } from '../../context/categoryContext';

import { Button, Dropdown, Space } from 'antd';
import { DownOutlined, HeartOutlined, HomeOutlined, UserOutlined, WhatsAppOutlined, GiftOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

const NavBar = () => {

  const { categorias } = useContext(CategoriasContext)
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar menú
  const location = useLocation(); // <-- Obtiene la ruta actual

  // Cierra el menú cuando la ruta cambia
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0); // <-- Hace que la página vuelva arriba
  }, [location.pathname]); // <-- Se ejecuta cuando cambia la ruta

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Mapeo de categorías
  const items = categorias.map((categoria, index) => ({
    key: `${index}`,
    label: (
      <NavLink key={index} to={`/category/${categoria}`} className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>
        {categoria}
      </NavLink>
    ),
  }));

  return (
    <div className={styles.NavBar}>
        <ul className={styles.Logo}>
          <Link to='/'>
            < img src={Logo} width={100} alt="Logo-ecommerce" />            
          </Link>
        </ul>

        {/* Botón hamburguesa para móviles */}
        <button className={styles.MenuToggle} onClick={toggleMenu}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <ul className={`${styles.secciones} ${menuOpen ? styles.MenuOpen : ''}`}>
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
          <NavLink to='/favorites'>
            <Button  type="primary">Favoritos <HeartOutlined /></Button> 
          </NavLink>
          <a href="">
            <Button type="primary">Usuario <UserOutlined /></Button>
          </a>
          <a href="">
            <Button type="primary">Contacto <WhatsAppOutlined /></Button>     
          </a>       
        </ul>

        <ul className={styles.Personal}>          
          <CartWidget />  
          <Usuario />
        </ul>
        
    </div>
  )
}
export default NavBar