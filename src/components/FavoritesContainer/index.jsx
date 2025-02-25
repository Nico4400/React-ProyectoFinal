import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import Favorites from "../Favorites";
import { FavoritesContext } from "../../context/favoritesContext";

import { Button } from "antd";
import { HomeOutlined, GiftOutlined, DeleteOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

const FavoritesContainer = () => {

    const { favorites, limpiarFavoritos } = useContext(FavoritesContext)

    return(
        <div className={styles.Favorites}> 
            { favorites.length === 0 ?
            <>
                <div className={styles.Volver}>
                    <h2>No tienes ningún Favorito selecionado.</h2>
                    <Link to='/'><Button type="primary">Inicio <HomeOutlined /></Button></Link>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>
                </div>
            </> :       
            <>   
                <div className={styles.GridContainer}>       
                    {favorites.map(prod => <Favorites key={prod.id} {...prod} />)}
                </div>
                
                <div className={styles.Finalizar}>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>                    
                    <Button type="primary" onClick={() => { limpiarFavoritos() }}>Vaciar Favoritos <DeleteOutlined /></Button>
                </div>                
            </>
            }
        </div>        
    )
}
export default FavoritesContainer