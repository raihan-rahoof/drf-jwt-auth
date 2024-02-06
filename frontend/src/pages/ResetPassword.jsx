import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [formData, setFormData] = useState({
        "email": "",
    })

    const { email } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        })
        )
    }

  const handleResetPassword = () => {
    // Perform the reset password logic here
    // For demonstration purposes, let's just show a success message
    toast.success(`Password reset link sent to ${email}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: '#4CAF50', // Green background
        color: 'white',
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={email}
          />
        </div>
        <button
          type="button"
          onClick={handleResetPassword}
          className="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-white/20 text-white rounded-lg transition-all duration-500 group hover:bg-blue-600/60 hover:text-white"
        >
          Reset Password
        </button>
        <p className="mt-5 text-gray-200 ml-16">
          Remember your password? <Link to="/login" href="#" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
      
    </div>
  );
}

export default ResetPassword;
