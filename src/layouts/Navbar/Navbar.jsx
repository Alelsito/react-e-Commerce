import React from 'react'

// React router dom (link, Navigate)
import { Link, useNavigate } from 'react-router-dom'

// Context
import { useProductsContext } from '../../context/ProductsContext'
// UseForm
import useForm from '../../hooks/useForm'

// ScrollUp
import scrollUP from '@/utils/scrollUp'

// Logo
import logo from '@/assets/Bugis-Logo.png'

// Style
import './Navbar.scss'

const Navbar = () => {
  const context = useProductsContext()
  const navigate = useNavigate()

  const searchedData = (data) => {
    scrollUP()
    navigate('/')
    const searchOfData = context.data.filter((product) => (
      product.product_name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(data.search.toLowerCase())
    ))

    data.search.length !== 0
      ? context.setSearcherData(searchOfData)
      : context.setSearcherData(null)
  }

  const { input, handleInputChange, handleSubmit } = useForm(searchedData, {
    search: ''
  })

  return (
    <nav className='nav'>
      <div className='nav__first-side'>
        <div className='nav__first-side__logo'>
          <Link to='/' onClick={scrollUP}>
            <img src={logo} alt='logo' className='nav__first-side__logo__image' />
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
        <div className='nav-second-side__icons'>
          <i className='bi bi-person' />
          <i className='bi bi-bag' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
