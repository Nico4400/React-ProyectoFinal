import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartConteiner'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Checkout from './components/Checkout'
import CartComponentContext from './context/cartContext'
import { CategoriasComponentContext } from './context/categoryContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <CartComponentContext>
      < CategoriasComponentContext> 
        <BrowserRouter>
          <NavBar />            
          <Routes> 
            <Route exact path='/' element={<Home />} />                 
            <Route exact path='/productos' element={<ItemListContainer greating={'Productos'} />} />
            <Route exact path= '/category/:categoryId' element={<ItemListContainer greating={'Productos'}/>} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartContainer />} />
            <Route exact path='/checkout' element={<Checkout />} /> 
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CategoriasComponentContext>
      </CartComponentContext>
    </div>
  )
}

export default App
