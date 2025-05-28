import React from 'react'
import FadeLoader from 'react-spinners/FadeLoader'

const Loader = () => {
  return (
     <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#000" size={20}/>
       </div>
  )
}

export default Loader