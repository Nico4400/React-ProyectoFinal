// import { useEffect, useState } from "react";

import Items from "../Items"
import { Row } from 'antd';

import styles from './styles.module.css'

const ItemList = ({productos}) => {

    return(
        <div className={styles.ListadoProductos}>            
            <div className={styles.GridContainer}>
                {productos.map((prod) => (<Items key={prod.id} {...prod} />))}
            </div>
        </div>
    )
}
export default ItemList