import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function AI() {
  return (
    <>

      <Navbar />
      <div
        className='bg-color min-h-screen mx-auto pt-20 px-4 max-w-7xl '
      >
        <p className='text-black'>hello from AI PAge </p>
        <Footer />
      </div>
    </>
  )
}

export default AI