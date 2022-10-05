import React from 'react'

// Router
import { Routes, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import RegisterProduct from '../pages/RegisterProduct'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:idProduct' element={<ProductDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/register/product' element={<RegisterProduct />} />
    </Routes>
  )
}

export default Router
