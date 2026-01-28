import React from 'react'
import { useNavigate } from 'react-router-dom'


function Welcome() {
  const direction = useNavigate();

  return (
    <div
      className=' bg min-h-screen mx-auto max-w-7xl items-center flex-col flex '

    >
      <div className='flex-1 flex items-center justify-center'>
        <div className=' p-10 rounded-lg shadow-lg gap-6 items-center flex flex-col'>
          <h1 className='sm:text-3xl text-xl  font-bold'>Welcome 👏</h1>
          <span className='text-2xl'>Welcome to the Roadmap </span>
          <p className='font-bold text-center '>
            This roadmap helps you learn in the right order—no confusion, no overwhelm. Follow the steps, focus on fundamentals, and grow your skills with confidence.</p>

          <p className='text-lg sm:text-2xl text-gray-500 text-center'>
            Start your Learning Today....
          </p>
          <button
            onClick={() => direction("/Home")}
            className='cursor-pointer text-lg p-3 border font-bold bg-blue-100 border-none hover:bg-blue-200 rounded hover:text-black text-gray-400'
          >
            Get Started
          </button>
        </div>
      </div>
      <footer className='bottom-0  text-black text-center w-full text-lg hover:text-blue-500 flex flex-col justify-center'>
        <a href="http://linkedin.com/in/nikhil-tiwari-53743b339">Connect with me </a>
      </footer>
    </div>
  )
}

export default Welcome


