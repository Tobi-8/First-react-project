// import React from 'react'
import { Link } from 'react-router-dom'
// import HomePage from './HomePage'

const NotFoundPage = () => {
  return (
      <>
          <section className='flex flex-col gap-8 items-center mt-20'>
              <h1 className="text-5xl capitalize font-bold"> 404 Not Found</h1>
              <p className="text-2xl ">This page not found</p>

              <Link to='/' className='bg-indigo-500 px-4 py-2 text-white text-xl rounded-lg'>
              Go Back
              </Link>


      </section>
      </>
  )
}

export default NotFoundPage