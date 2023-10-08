import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <div className='relative text-center'>
          <img src="/icon/404-page-animation-example.gif" className='w-full h-screen' />
          <div className='absolute bottom-20 left-1/2'>
              <h1 className='text-2xl font-bold mb-5'>Page Not Found</h1>
              <Link to='/'>
                  <button className='btn btn-warning btn-outline'>Back to Home</button>
              </Link>
          </div>
    </div>
  )
}

export default Error