import React, { createContext, useState } from 'react'

import { db } from '../services/firebase/client'
import { getDocs, collection } from 'firebase/firestore'

export const CategoriasContext = createContext({
    categorias: []
})

export const CategoriasComponentContext = ({ children }) => {

    const[productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [imagenesConCategoria, setImagenesConCategoria] = useState([])

    const collectionref = collection(db , 'products')

    // No se si esto esta del todo bien, pordía usar un useEffect asincronico... peeero ni dea
    getDocs(collectionref)
        .then(snapshot => {
            const productAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(productAdapted)

            // Agrego array de categorias para NavBar
            const categorias = [...new Set(productos.map(prod => prod.categoria).filter(categoria => categoria !== null))]
            setCategorias(categorias)

            // Agrego array de imagenes para carrusel
            const imagenesConCategoria = productos
            .filter(producto => producto.imagen !== null)
            .map(prod => ({imagen: prod.imagen, categoria: prod.categoria}))
            setImagenesConCategoria(imagenesConCategoria)
        })
        .catch(error => {
            console.error(error)
        })            

    return (
        <CategoriasContext.Provider value={{categorias, setCategorias, imagenesConCategoria, setImagenesConCategoria}}>
            {children}
        </CategoriasContext.Provider>
    )
}