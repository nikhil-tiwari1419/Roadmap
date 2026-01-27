import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useTheme } from '../Context/Theme'
function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { path: "/Home", label: "Home" },
        { path: "/FullStack", label: "Fullstack" },
        { path: "/Web3", label: "Web3" },
        { path: "/Devops", label: "DevOps" },
        { path: "/Dsa", label: "DSA" },
        { path: "/AI", label: "AI" },
    ]
    const  {theme, toggleTheme} = useTheme();
    return (
        // ✅ FULL WIDTH NAVBAR
        <header className="fixed bg-color top-0 inset-x-0 bg-white shadow-md z-50">

            {/* ✅ Centered content */}
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <h1 className="flex text-lg sm:text-3xl font-bold">
                    <span className="text-blue-600">Road</span>
                    <span>Map</span>
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    {links.map(item => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `pb-1 transition-all
                                ${isActive
                                    ? 'border-b-2 border-blue-500 text-blue-500'
                                    : 'text-gray-700 hover:text-blue-500'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Menu className="" strokeWidth={2.25} />
                </button>
                <button onClick={toggleTheme}
                className=''> 
                {theme=== "light"? "🌙Dark Mode":"☀️ Light Mode"}

                </button>
            </div>

            {/*  Mobile Menu – FULL WIDTH */}
            {open && (
                <div className="md:hidden w-full bg-color border-t">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                        {links.map(item => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 font-semibold'
                                        : 'text-gray-700'
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
