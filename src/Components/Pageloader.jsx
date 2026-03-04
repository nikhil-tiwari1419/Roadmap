import React from 'react'
import { useTheme } from '../Context/Theme'

function Pageloader() {
    const {theme}= useTheme();
    return (
        <div className={`min-h-screen text-3xl flex items-center justify-center ${theme === "dark" ? "bg-gray-800 text-white":"text-blue-500 bg-gray-100"}`}>
            LOading page ................
        </div>
    )
}

export default Pageloader

