import React from 'react'

// Styles
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__container-ghost'>
        <h1 className='not-found__container-ghost__text-error'>404</h1>
        <h3 className='not-found__container-ghost__text-error-info'>NOT FOUND</h3>
      </div>
      <div className='not-found__container-ghost'>
        <div className='not-found__container-ghost__ghost-copy'>
          <div className='not-found__container-ghost__ghost-copy__one' />
          <div className='not-found__container-ghost__ghost-copy__two' />
          <div className='not-found__container-ghost__ghost-copy__three' />
          <div className='not-found__container-ghost__ghost-copy__four' />
        </div>
        <div className='not-found__container-ghost__ghost'>
          <div className='not-found__container-ghost__ghost__face'>
            <div className='not-found__container-ghost__ghost__eye' />
            <div className='not-found__container-ghost__ghost__eye-right' />
            <div className='not-found__container-ghost__ghost__mouth' />
          </div>
        </div>
        <div className='not-found__container-ghost__shadow' />
      </div>
    </div>
  )
}

export default NotFound
