import React from 'react'

// Styles
import './Form.scss'

// Image
import logo from '../../assets/Bugis-Logo.png'

const Form = () => {
  return (
    <>
      <div className='background' />
      <article className='form'>
        <div className='form__left-side'>
          <div className='form__left-side__structure'>
            <img className='form__left-side__image' src={logo} alt='logo' />
            <div className='form__left-side__text--title'> Welcome my friend </div>
            <div className='form__left-side__text--subtitle'> just a couple of clicks and we start </div>
            <div className='form__left-side__circle'>
              <div className='form__left-side__circle--big' />
              <div className='form__left-side__circle--small' />
            </div>
          </div>
        </div>
        <div className='form__right-side'>
          <div className='form__right-side__structure'>
            <p className='form__right-side__title'>Register</p>
            <form className='form__right-side__inputs'>
              <input type='text' className='form__right-side__inputs__input' placeholder='First name' />
              <i class='bi bi-card-text' />
              <input type='text' className='form__right-side__inputs__input' placeholder='Last name' />
              <i class='bi bi-card-text bi-card-text-2' />
              <select type='text' className='form__right-side__inputs__input'>
                <option value=''> Gender </option>
                <option value='M'> Male </option>
                <option value='F'> Female </option>
              </select>
              <i class='bi bi-person' />
              <input type='text' className='form__right-side__inputs__input' placeholder='Email' />
              <i class='bi bi-envelope' />
              <input type='text' className='form__right-side__inputs__input' placeholder='Password' />
              <i class='bi bi-key' />
            </form>
            <button className='form__right-side__button-principal'> Sign up </button>
            <span className='form__right-side__text-low'> Have already an account? </span>
            <button className='form__right-side__button-secondary'> Login </button>
          </div>
        </div>
      </article>
    </>
  )
}

export default Form
