import { useContext, useEffect, useState } from "react";

import { Button } from "antd";
import { HeartFilled, HeartOutlined, CheckOutlined } from "@ant-design/icons";

import { FavoritesContext } from '../../context/favoritesContext';

import styles from './styles.module.css'

// Inicio el contador
const Contador = ({ stock, initial, onAdd, id, producto, imagen, precio, categoria }) => {

    console.log("Producto en Item:", producto);
    console.log("Props en Contador:", { stock, initial, onAdd, id, producto, imagen, precio, categoria });

    // uso useStete /Estado para el contador
    const [ contador, setContador ] = useState(initial)

    // Contexto de favoritos
    const { favorites, agregarFavorito, eliminarFavorito } = useContext(FavoritesContext);

    console.log("ID recibido en Contador:", id);
    console.log("Favoritos actuales:", favorites);

    // Verificar si el producto ya está en favoritos
    const esFavorito = favorites.some((fav) => fav.id === id);

    // uso useEffect
    useEffect(() =>{
        console.log(`${contador}`)
    },[contador])

    useEffect(() => {
        console.log("Favoritos actuales:", favorites);
    }, [favorites]);

    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }

    const restar = () => {
        contador > 1 && setContador(contador - 1)
    }
        
    return(
        <div className={styles.Contador}>
            <div className={styles.Controles}>
                <Button className={styles.Boton} onClick={sumar}>+</Button>
                <p className={styles.Contador}>{contador}</p>
                <Button className={styles.Boton} onClick={restar}>-</Button>
            </div>

            <div className={styles.Agregar}>
                <Button type="primary" onClick={() => onAdd(contador)} disabled={!stock}>Agregar <CheckOutlined /></Button>
            </div>

            {/* Botón de favoritos */}
            <div className={styles.FavBoton}>
                <Button 
                    key="favorite" 
                    onClick={() => esFavorito ? eliminarFavorito(id) : agregarFavorito({ id, producto, imagen, precio, categoria })}
                >
                    {esFavorito ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
                </Button>
            </div>

        </div>
    )
}
export default Contador