import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
      <>
          <section className='bg-white p-9'>
              <Link to='/jobs' className='block w-fit py-4 px-10 text-xl  mx-auto text-white font-bold  bg-black rounded-lg  '>View All Jobs</Link>
          </section>
      </>
  )
}

export default ViewAllJobs