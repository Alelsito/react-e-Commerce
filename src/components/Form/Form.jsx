import React from 'react'

// React router dom { useLocation }
import { useLocation, Link } from 'react-router-dom'

// Styles
import './Form.scss'

// Image
import logoSignup from '../../assets/Bugis-Logo.png'
import logoLogin from '../../assets/Zero-logo.png'

const Form = () => {
  const location = useLocation()
  return (
    <>
      <div className='background' />
      <article className='form'>
        {
            location.pathname === '/signup' &&
            (
              <div className='form__left-side'>
                <div className='form__left-side__structure'>
                  <img className='form__left-side__image' src={logoSignup} alt='logo' />
                  <div className='form__left-side__text--title'> Welcome my friend </div>
                  <div className='form__left-side__text--subtitle'> just a couple of clicks and we start </div>
                  <div className='form__left-side__circle'>
                    <div className='form__left-side__circle--big' />
                    <div className='form__left-side__circle--small' />
                  </div>
                </div>
              </div>
            )
        }
        {
            location.pathname === '/login' &&
            (
              <div className='form__left-side--login'>
                <div className='form__left-side__structure'>
                  <img className='form__left-side__image--login' src={logoLogin} alt='logo' />
                  <div className='form__left-side__text--title'> Welcome my friend </div>
                  <div className='form__left-side__text--subtitle'> just a couple of clicks and we start </div>
                  <div className='form__left-side__circle'>
                    <div className='form__left-side__circle--big' />
                    <div className='form__left-side__circle--small' />
                  </div>
                </div>
              </div>
            )
        }
        <div className='form__right-side'>
          <div className='form__right-side__structure'>
            {
                location.pathname === '/signup' &&
                (<p className='form__right-side__title'>Register</p>)

            }
            {
                location.pathname === '/login' &&
                (<p className='form__right-side__title'>Login</p>)
            }
            <form className='form__right-side__inputs'>
              {
                location.pathname === '/signup' &&
                (
                  <>
                    <input type='text' className='form__right-side__inputs__input' placeholder='First name' />
                    <i className='bi bi-card-text' />
                    <input type='text' className='form__right-side__inputs__input' placeholder='Last name' />
                    <i className='bi bi-card-text bi-card-text-2' />
                    <select type='text' className='form__right-side__inputs__input'>
                      <option value=''> Gender </option>
                      <option value='M'> Male </option>
                      <option value='F'> Female </option>
                    </select>
                    <i className='bi bi-person' />
                    <input type='text' className='form__right-side__inputs__input' placeholder='Email' />
                    <i className='bi bi-envelope' />
                    <input type='text' className='form__right-side__inputs__input' placeholder='Password' />
                    <i className='bi bi-key' />
                    <button className='form__right-side__inputs__button-principal'> Sign up </button>
                  </>
                )
              }
              {
                location.pathname === '/login' &&
                (
                  <>
                    <input type='text' className='form__right-side__inputs__input' placeholder='Email' />
                    <i className='bi bi-envelope bi-envelope-login' />
                    <input type='text' className='form__right-side__inputs__input' placeholder='Password' />
                    <i className='bi bi-key bi-key-login' />
                    <button className='form__right-side__inputs__button-principal--login'> Login </button>
                  </>
                )
              }
            </form>
            {
                location.pathname === '/signup' &&
                (
                  <>
                    <span className='form__right-side__text-low'> Have already an account? </span>
                    <Link to='/login'>
                      <button className='form__right-side__button-secondary'> Login </button>
                    </Link>
                  </>
                )
            }
            {
                location.pathname === '/login' &&
                (
                  <>
                    <span className='form__right-side__text-low'> Have no account yet? </span>
                    <Link to='/signup'>
                      <button className='form__right-side__button-secondary'> Signup </button>
                    </Link>
                  </>
                )
            }
          </div>
        </div>
      </article>
    </>
  )
}

export default Form
