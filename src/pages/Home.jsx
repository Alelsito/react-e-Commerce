import React from 'react'

// Layouts
import Navbar from '../layouts/Navbar'
import About from '../layouts/About'

// Components
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Products />
    </>
  )
}

export default Home
