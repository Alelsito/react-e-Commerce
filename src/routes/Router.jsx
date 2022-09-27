import React from 'react'

// Router
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:idProduct' element={<ProductDetail />} />
    </Routes>
  )
}

export default Router
