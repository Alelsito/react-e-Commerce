import React from 'react'

// Logo
import logo from '../assets/Bugis-Logo.png'

// Style
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav'>
      {/* First Side */}
      <div className='nav__first-side'>
        <div className='nav__first-side__logo'>
          <img src={logo} alt='logo' className='nav__first-side__logo__image' />
          <span className='nav__first-side__logo__text-logo'> Bugi's </span>
        </div>
        <div className='nav__first-side__categories'>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
          <span className='nav__first-side__categories__text-category'> Opcion </span>
        </div>
      </div>
      {/* Second Side */}
      <div className='nav-second-side'>
        <form className='nav-second-side__searcher'>
          <input type='text' placeholder='Search products...' className='nav-second-side__searcher__input' />
          <button className='nav-second-side__searcher__button-search'>
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
