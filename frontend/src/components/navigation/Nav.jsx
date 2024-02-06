import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
         <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Auth System</div>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Login</Link>
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Register</Link>
      </div>
    </nav>
    </div>
  )
}

export default Nav