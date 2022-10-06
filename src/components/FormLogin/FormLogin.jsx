// React
import { useState } from 'react'

// React router dom
import { Link, useNavigate } from 'react-router-dom'

// Context
import { useAuthContext } from '../../context/AuthContext'

// Hooks
import useForm from '../../hooks/useForm'

// Services
import { postLogin } from '../../services/axiosMethods'

// Styles
import '../FormSignUp/Form.scss'

// Image
import logoLogin from '../../assets/Zero-Logo.png'

const FormLogin = () => {
  const context = useAuthContext()
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

  const sendData = async (data) => {
    try {
      const result = await postLogin(data)
      if (result.status === 200) {
        context.loginUser(result.data.token)
        noError()
        navigate('/')
      }
    } catch (error) {
      showError(error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      <div className='background' />
      <article className='form'>
        {
          submitError
            ? (
              <div className='alert--error'>
                <div className='alert__container'>
                  <div className='alert__container__first'>
                    <i className='bi bi-exclamation-circle' />
                    <p> {errorMessage} -- Check it out! </p>
                  </div>
                  <div className='alert__container__second'>
                    <i className='bi bi-x-circle' onClick={noError} />
                  </div>
                </div>
              </div>
              )
            : (
              <div className='alert--hidden' />
              )
        }
        <div className='form__left-side--login'>
          <div className='form__left-side__structure'>
            <img className='form__left-side__image--login' src={logoLogin} alt='logoLogin' />
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
            <p className='form__right-side__title'>Login</p>
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
            <span className='form__right-side__text-low'> Have no account yet? </span>
            <Link to='/signup'>
              <button className='form__right-side__button-secundary'> Signup </button>
            </Link>
          </div>
        </div>
      </article>
    </>

  )
}

export default FormLogin
