import React from 'react'
import { Linkedin } from 'lucide-react';

function Footer() {
  return (
    <div className='flex border bg-color my-3  p-2 rounded bg-gray-300'>
      <footer>
        <a
          className='flex gap-3'
          href="http://linkedin.com/in/nikhil-tiwari-53743b339" target="_blank" rel="noopener noreferrer">Connect <Linkedin /></a>
        <span>&copy;{new Date().getFullYear()} Copyright All right reserve </span>
      </footer>
    </div>
  )
}

export default Footer