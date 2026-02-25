import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../Context/Theme'
import { Sun, Moon, Menu } from 'lucide-react';

function Navbar() {
    const [open, setOpen] = useState(false)
    const { theme, toggleTheme } = useTheme();

    const links = [
        { path: "/Home", label: "Home" },
        { path: "/FullStack", label: "Fullstack" },
        { path: "/Web3", label: "Web3" },
        { path: "/Devops", label: "DevOps" },
        { path: "/Dsa", label: "DSA" },
        { path: "/AI", label: "AI" },
        { path: "/Git", label: "Git" },
    ]

    return (
        <header
            className={`fixed top-0 inset-x-0 shadow-md z-50 border border-b border-b-blue-400  transition-colors duration-300
                ${theme === "dark"
                    ? "bg-gray-900 border-blue-900 text-gray-100"  // dark — deep navy
                    : "bg-gray-100 text-gray-800"}`}   // light — blueprint grid
        >
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-lg sm:text-3xl">
                    <span className="text-blue-600 font-bold">Road</span>
                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Map</span>
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    {links.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `pb-1 transition-all font-medium
                                ${isActive
                                    ? 'border-b-2 border-blue-500 text-blue-500'
                                    : theme === 'dark'
                                        ? 'text-gray-300 hover:text-blue-400'   // ❌ was hardcoded gray-700 — invisible in dark
                                        : 'text-gray-700 hover:text-blue-500'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Right — Theme toggle + Hamburger */}
                <div className='flex items-center gap-3'>  {/* ❌ was item-center — typo */}
                    <button
                        onClick={toggleTheme}
                        className={`cursor-pointer p-2 rounded-lg transition-colors
                            ${theme === 'dark'
                                ? 'text-yellow-400 border  hover:bg-gray-700'   // sun icon in dark
                                : 'text-gray-700 border hover:bg-blue-50'}`}   // moon icon in light
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}  
                    </button>

                    <button
                        className='md:hidden cursor-pointer p-2 rounded-lg'
                        onClick={() => setOpen(!open)}
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className={`md:hidden border-t transition-colors
                    ${theme === 'dark'
                        ? 'bg-gray-900 border-blue-900'
                        : ' border-blue-200'}`}   // ❌ mobile menu had no dark bg — was transparent
                >
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                        {links.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `font-medium transition-colors
                                    ${isActive
                                        ? 'text-blue-500 font-semibold'
                                        : theme === 'dark'
                                            ? 'text-gray-300 hover:text-blue-400'
                                            : 'text-gray-700 hover:text-blue-500'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
