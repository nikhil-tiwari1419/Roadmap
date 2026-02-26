import React from 'react'
import { useTheme } from '../Context/Theme';

import { Linkedin, Github, Twitter, Mail, Phone, MapPin, Code, Briefcase, User } from 'lucide-react';

function Footer() {
  const { theme }= useTheme();
  return (
    <footer className={`'border-t mt-10 py-10 ${theme === 'dark'? "text-white":"text-black"}`}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border p-2 border-dashed'>
        {/* About */}
        <div>
          <h3 className='text-lg font-semibold mb-3 text-yellow-400'>About Me</h3>
          <p className='text-sm leading-relaxed'>
            A passionate developer building modern web experiences with React and beyond.
          </p>
          <div className='flex gap-3 mt-4'>
            <a href="https://linkedin.com/in/nikhil-tiwari-53743b339" target="_blank" rel="noopener noreferrer"
              className='hover:text-blue-400 transition-colors'>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className='hover:text-blue-400 transition-colors'>
              <Github size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className='hover:text-sky-400 transition-colors'>
              <Twitter size={20} />
            </a>
          </div>
        </div>
        {/* column 2 - Quick links */}
        <div>
          <h3 className='text-lg font-semibold mb-3 text-yellow-400'>Quick Links</h3>
          <ul className='space-y-2 text-sm '>
            <li className='flex items-center gap-2 hover:text-green-300 cursor-pointer transition-colors'>
              <User size={14} /> About
            </li>
            <li className='flex items-center gap-2 hover:text-green-300 cursor-pointer transition-colors'>
              <Code size={14} /> Projects
            </li>
            <li className='flex items-center gap-2 hover:text-green-300 cursor-pointer transition-colors'>
              <Briefcase size={14} /> Experience
            </li>
            <li className='flex items-center gap-2 hover:text-green-300 cursor-pointer transition-colors'>
              <Mail size={14} /> Contact
            </li>
          </ul>
        </div>

        {/* colun 3 contact info */}
        <div>
          <h3 className='text-lg font-semibold mb-3 text-yellow-400'>Contact</h3>
          <ul className='space-y-2 text-sm '>
            <li className='flex items-center gap-2'>
              <Mail size={14} className='text-blue-400' />
              <a href="mailto:developernikhil14@gmail.com">E-MAil</a>
            </li>
            <li className='flex items-center gap-2'>
              <Phone size={14} className='text-blue-400' />
              <span>+91 00000 00000</span>
            </li>
            <li className='flex items-center gap-2'>
              <MapPin size={14} className='text-blue-400' />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className='border-t border-gray-700 mt-8 pt-4 text-center text-sm'>
        <span>&copy;{new Date().getFullYear()} Roadmap — All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer

