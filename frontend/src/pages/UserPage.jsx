import React from 'react'
import { useSelector } from 'react-redux';

function UserPage() {

    const { userInfo } = useSelector((state) => state.auth)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md text-center">
      <h2 className="text-3xl font-bold mb-6">Welcome, {userInfo.first_name}!</h2>
      <p className="text-gray-200 mb-4">Email: </p>
      <p className="text-gray-200 mb-8">Number: </p>

      
    </div>
  </div>
  )
}

export default UserPage;