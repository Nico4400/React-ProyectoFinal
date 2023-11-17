import { useEffect, useState } from "react";

import { Button } from "antd";
import { HeartOutlined, CheckOutlined } from "@ant-design/icons";

import styles from './styles.module.css'

// Inicio el contador
const Contador = ({stock, initial, onAdd}) => {
    // uso useStete
    const [ contador, setContador ] = useState(initial)

    // uso useEffect
    useEffect(() =>{
        console.log(`${contador}`)
    },[contador])

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
            <div className={styles.FavBoton}>
                <Button className={styles.Boton}>
                    <HeartOutlined />
                </Button>
            </div>
        </div>
    )
}
export default Contador