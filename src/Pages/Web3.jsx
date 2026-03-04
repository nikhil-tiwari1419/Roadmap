import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useTheme } from '../Context/Theme';

function Web3() {
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <div className={`'bg min-h-screen pt-20 px-4 ${theme === 'dark' ? "bg-gray-900 text-white" : "text-black grid-bg"}`}>
        <p className='text-black'> hello from Web3 page </p>
        <Footer />
      </div>
    </>
  )
}

export default Web3