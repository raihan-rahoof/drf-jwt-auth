import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundpage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-8">404</h1>
      <p className="text-lg mb-8">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition-colors duration-300 ease-in-out"
      >
        Go Home
      </Link>
    </div>
      );
}

export default NotFoundpage