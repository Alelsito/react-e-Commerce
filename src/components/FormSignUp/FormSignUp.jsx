// React
import { useState } from 'react'

// React router dom
import { Link, useNavigate } from 'react-router-dom'

// Custom Hook
import useForm from '@/hooks/useForm'

// Services
import { postSignup } from '@/services/axiosMethods'

// Style
import './Form.scss'

// Image
import logoSignup from '@/assets/Bugis-Logo.png'

const FormSignUp = () => {
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
      const result = await postSignup(data)
      if (result.status === 200) {
        noError()
        navigate('/login')
      }
    } catch (error) {
      showError(error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
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
        <div className='form__left-side--signup'>
          <div className='form__left-side__structure'>
            <img className='form__left-side__image--signup' src={logoSignup} alt='logoSignup' />
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
              <button className='form__right-side__inputs__button-principal--signup' type='submit'> Sign up </button>
            </form>
            <span className='form__right-side__text-low'> Have already an account? </span>
            <Link to='/login'>
              <button className='form__right-side__button-secundary'> Login </button>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default FormSignUp
