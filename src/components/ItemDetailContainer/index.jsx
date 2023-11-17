import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail";

import { db } from '../../services/firebase/client'
import { getDoc, doc } from 'firebase/firestore'

import { Spin } from 'antd';

import styles from './styles.module.css'


const ItemDetailContainer = () => {

    const [producto , setProducto] = useState(null)
    const[loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect (() => {
        
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                snapshot.exists() && setProducto(productAdapted)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => setLoading(false))
    },[itemId])

    return(
        <>
        { loading ? (
            <div className={styles.Spin}>
                <Spin size="large"/>
            </div>
        ) : (
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...producto}/>
        </div>
        )}
        </>
    )
}
export default ItemDetailContainer