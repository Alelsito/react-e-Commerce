// React
import { useState } from 'react'

// React router dom
import { useLocation, Link, useNavigate } from 'react-router-dom'

// Context
import { useAuthContext } from '../../context/AuthContext'

// Hooks
import useForm from '../../hooks/useForm'

// Services
import { postSignup, postLogin } from '../../services/axiosMethods'

// Styles
import './Form.scss'

// Image
import logoSignup from '@/assets/Bugis-Logo.png'
import logoLogin from '@/assets/Zero-Logo.png'

const Form = () => {
  const context = useAuthContext()
  const location = useLocation()
  const navigate = useNavigate()
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const noError = () => {
    setSubmitError(false)
    setErrorMessage(null)
  }

  const showError = (error) => {
    setSubmitError(true)
    setErrorMessage(error)
  }

  const sendDataSignup = async (data) => {
    try {
      const result = await postSignup(data)
      if (result.status === 200) {
        noError()
        navigate('/login')
      }
    } catch (error) {
      submitError === false &&
      showError(error.message)
    }
  }

  const sendDataLogin = async (data) => {
    try {
      const result = await postLogin(data)
      if (result.status === 200) {
        context.loginUser(result.data.token)
        noError()
        navigate('/')
      }
    } catch (error) {
      submitError === false &&
      showError(error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(
    location.pathname === '/signup'
      ? (sendDataSignup)
      : location.pathname === '/login' &&
        (sendDataLogin)
    ,
    location.pathname === '/signup'
      ? ({
          first_name: '',
          last_name: '',
          gender: '',
          email: '',
          password: ''
        })
      : location.pathname === '/login' &&
        ({
          email: '',
          password: ''
        })
  )

  return (
    <>
      <div className='background' />
      <article className='form'>
        {
          submitError
            ? (
              <div className='error'>
                <div className='error__container'>
                  <div className='error__container__first'>
                    <i className='bi bi-exclamation-circle' />
                    <p> {errorMessage} -- Check it out! </p>
                  </div>
                  <div className='error__container__second'>
                    <i className='bi bi-x-circle' onClick={noError} />
                  </div>
                </div>
              </div>
              )
            : (
              <div className='error--hidden' />
              )
        }
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
            {
                location.pathname === '/signup' &&
                (
                  <form className='form__right-side__inputs' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      className='form__right-side__inputs__input'
                      placeholder='First name'
                      id='first_name'
                      name='first_name'
                      value={input?.first_name}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-card-text' />
                    <input
                      type='text'
                      className='form__right-side__inputs__input'
                      placeholder='Last name'
                      id='last_name'
                      name='last_name'
                      value={input?.last_name}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-card-text bi-card-text-2' />
                    <select
                      className='form__right-side__inputs__input'
                      id='gender'
                      name='gender'
                      value={input?.gender}
                      onChange={handleInputChange}
                    >
                      <option hidden value=''> Gender </option>
                      <option value='M'> Male </option>
                      <option value='F'> Female </option>
                    </select>
                    <i className='bi bi-person' />
                    <input
                      type='text'
                      className='form__right-side__inputs__input'
                      placeholder='Email'
                      id='email'
                      name='email'
                      value={input?.email}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-envelope' />
                    <input
                      type='password'
                      className='form__right-side__inputs__input'
                      placeholder='Password'
                      id='password'
                      name='password'
                      value={input?.password}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-key' />
                    <button className='form__right-side__inputs__button-principal' type='submit'> Sign up </button>
                  </form>
                )
              }
            {
                location.pathname === '/login' &&
                (
                  <form className='form__right-side__inputs' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      className='form__right-side__inputs__input'
                      placeholder='Email'
                      id='email'
                      name='email'
                      value={input?.email}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-envelope bi-envelope-login' />
                    <input
                      type='password'
                      className='form__right-side__inputs__input'
                      placeholder='Password'
                      id='password'
                      name='password'
                      value={input?.password}
                      onChange={handleInputChange}
                    />
                    <i className='bi bi-key bi-key-login' />
                    <button className='form__right-side__inputs__button-principal--login' type='submit'> Login </button>
                  </form>
                )
              }
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
