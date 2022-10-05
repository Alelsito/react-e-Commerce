// React
import { createContext, useContext, useEffect, useState } from 'react'

// React router dom
import { useLocation } from 'react-router-dom'

// Jwt decode
// eslint-disable-next-line camelcase
import jwt_Decode from 'jwt-decode'

// Axios Methods
import { getSpecificUser } from '../services/axiosMethods'

const AuthContext = createContext()

function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [userDecoded, setUserDecoded] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const location = useLocation()

  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    setIsAuth(true)
  }

  const getUserInfo = async (id) => {
    try {
      const result = await getSpecificUser(id)
      if (result.status === 200) {
        setUserInfo(result.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_Decode(token)
      setUserDecoded(decoded)
      setIsAuth(true)
    }
  }, [location.pathname === '/'])

  useEffect(() => {
    userDecoded !== null &&
    getUserInfo(userDecoded.id)
  }, [userDecoded])

  const values = {
    isAuth,
    userDecoded,
    userInfo,
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
