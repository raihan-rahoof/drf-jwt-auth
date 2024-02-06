import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
         <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center font-poppins">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-8">Explore the amazing content we have for you.</p>
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Get Started</Link>
      </div>
    </div>
    </div>
  )
}

export default Home