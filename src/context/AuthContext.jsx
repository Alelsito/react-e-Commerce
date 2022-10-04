// React
import { createContext, useContext, useEffect, useState } from 'react'

// React router dom
import { useLocation } from 'react-router-dom'

// Jwt decode
// eslint-disable-next-line camelcase
import jwt_Decode from 'jwt-decode'

const AuthContext = createContext()

function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    setIsAuth(true)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_Decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [location.pathname === '/'])

  const values = {
    isAuth,
    user,
    loginUser
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}

export {
  AuthProvider,
  useAuthContext
}
