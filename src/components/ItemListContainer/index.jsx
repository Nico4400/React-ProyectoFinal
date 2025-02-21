import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList'

import { db } from '../../services/firebase/client'
import { getDocs, collection, query, where } from 'firebase/firestore'

import { Spin } from 'antd';

import styles from './styles.module.css'


const ItemListContainer = ({ greeting }) => {
    
    const[productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const { categoryId } = useParams()
        
    useEffect(() => {

        const collectionref = categoryId ?
            query(collection(db, 'products'), where('categoria', '==', categoryId)) :
            collection(db , 'products')

            getDocs(collectionref)
                .then(snapshot => {
                    const productAdapted = snapshot.docs.map(doc => {
                        const data = doc.data()
                        return { id: doc.id, ...data }
                    })
                    setProductos(productAdapted)
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => setLoading(false))
    }, [categoryId])
       
    return (        
        <>
            { loading ? (
                <div className={styles.Spin}>
                    <Spin size="large"/>
                </div>
                ) : (
                <div className={styles.Productos}>
                    <h1>
                        {greeting} - {categoryId}                        
                    </h1>
                    <ItemList productos={productos} />                    
                </div>  
            )}
        </>      
    )
}
export default ItemListContainer