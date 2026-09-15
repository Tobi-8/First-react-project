// import React from 'react'
import { BeatLoader } from 'react-spinners'





const Spinner = ({loading}) => {
  return (

    <div className='flex  justify-center items-center py-37.5 '>
         <BeatLoader
        color={'blue'}
        loading = {loading}
        
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
  )
}

export default Spinner