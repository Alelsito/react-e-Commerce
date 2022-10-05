import React from 'react'

// React router dom (link, Navigate, useLocation)
import { Link, useNavigate, useLocation } from 'react-router-dom'

// Context
import { useAuthContext } from '../../context/AuthContext'
import { useProductsContext } from '../../context/ProductsContext'

// UseForm
import useForm from '../../hooks/useForm'

// ScrollUp
import scrollUP from '@/utils/scrollUp'

// Logo
import logo from '@/assets/Bugis-Logo.png'
import logoZero from '@/assets/Zero-Logo.png'

// Style
import './Navbar.scss'

const Navbar = () => {
  const contextAuth = useAuthContext()
  const userInfo = contextAuth.userInfo
  const contextProducts = useProductsContext()
  const location = useLocation()
  const navigate = useNavigate()

  const searchedData = (data) => {
    scrollUP()
    navigate('/')
    const searchOfData = contextProducts.data.filter((product) => (
      product.product_name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(data.search.toLowerCase())
    ))

    data.search.length !== 0
      ? contextProducts.setSearcherData(searchOfData)
      : contextProducts.setSearcherData(null)
  }

  const { input, handleInputChange, handleSubmit } = useForm(searchedData, {
    search: ''
  })

  return (
    <nav className='nav'>
      <div className='nav__first-side'>
        <div className='nav__first-side__logo'>
          <Link to='/' onClick={scrollUP}>
            {
            contextAuth.isAuth === false
              ? (location.pathname !== '/login'
                  ? (<img src={logo} alt='logo' className='nav__first-side__logo__image' />)
                  : (<img src={logoZero} alt='logoZero' className='nav__first-side__logo__image--login' />)
                )
              : (
                <img src={logoZero} alt='logoZero' className='nav__first-side__logo__image--login' />
                )
            }
            <span className='nav__first-side__logo__text-logo'> Bugi's </span>
          </Link>
        </div>
        <div className='nav__first-side__categories'>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
        </div>
      </div>
      <div className='nav-second-side'>
        <form className='nav-second-side__searcher' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search products...'
            className='nav-second-side__searcher__input'
            id='search'
            name='search'
            value={input.search}
            onChange={handleInputChange}
          />
          <button className='nav-second-side__searcher__button-search' type='submit'>
            <i className='fa-solid fa-magnifying-glass fa-lg' />
          </button>
        </form>
        <div className='nav-second-side__buttons'>
          {
            contextAuth.isAuth === false
              ? (
                <>
                  <Link to='/login'>
                    {
                      location.pathname !== '/signup'
                        ? <button className='nav-second-side__buttons__login'> Login </button>
                        : <button className='nav-second-side__buttons__login--signup'> Login </button>
                    }
                  </Link>
                  <Link to='/signup'>
                    {
                      location.pathname !== '/signup'
                        ? <button className='nav-second-side__buttons__signup'> Sign up </button>
                        : <button className='nav-second-side__buttons__signup--signup'> Sign up </button>
                    }
                  </Link>
                </>
                )
              : (
                <>
                  <button className='nav-second-side__buttons__user-name'>
                    Hola
                    "{
                      userInfo !== null
                        ? (`${userInfo?.first_name} ${userInfo?.last_name}`)
                        : ('...')
                    }"
                  </button>
                </>
                )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
