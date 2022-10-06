import React from 'react'

// Router
import { Routes, Route, Navigate } from 'react-router-dom'

// Context
import { useAuthContext } from '../context/AuthContext'

// Pages
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import RegisterProduct from '../pages/RegisterProduct'

const Router = () => {
  const context = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:idProduct' element={<ProductDetail />} />
      <Route
        path='/login'
        element={context.isAuth ? <Navigate to='/' replace /> : <Login />}
      />
      <Route
        path='/signup'
        element={context.isAuth ? <Navigate to='/' replace /> : <SignUp />}
      />
      <Route
        path='/register/product'
        element={context.isAuth && context.userInfo?.role === 'CUSTOMER'
          ? <Navigate to='/' replace />
          : context.userInfo?.role === 'ADMIN' &&
            <RegisterProduct />}
      />
    </Routes>
  )
}

export default Router
