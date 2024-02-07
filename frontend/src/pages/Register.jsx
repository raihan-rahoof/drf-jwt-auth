import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useDispatch,useSelector } from 'react-redux';
import { register , reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import validator from 'validator';


function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
    re_password: '',
    profilePicture: null,
  });


  const { first_name, last_name, phone, email, password, re_password ,profilePicture} = formData;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user,isLoading , isError , isSuccess , message }=useSelector((state)=> state.auth)



  const handleChange = (e) => {
    if (e.target.name === 'profilePicture') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault()


    if (password !== re_password) {
        toast.error("Passwords do not match",{
          position:'top-center',
        })
    }else if(password.length < 8){
        toast.error("Password must 8 characters",{
          position:'top-center',
      })
    }else if(!validator.isEmail(email)){
      toast.error("Provide a valid Email",{
        position:'top-center',
      })
    }else if(!validator.isAlpha(first_name) || !validator.isAlpha(last_name) ){
      toast.error("Only use characters in Names",{
        position:'top-center',
      })
    }else if (!validator.isMobilePhone(phone, 'en-US')) {
      toast.error("Please provide a valid phone number", {
          position: 'top-center',
      });
  
    } else {
        const userData = {
            first_name,
            last_name,
            email,
            phone,
            password,
            re_password,
            profilePicture,
        }

        dispatch(register(userData))
        
    }
}
useEffect(() => {
  if (isError) {
      toast.error(message)
  }

  if (isSuccess || user) {
      navigate("/")
      toast.success("An activation email has been sent to your email. Please check your email")
  }

  dispatch(reset())

}, [isError, isSuccess, user, navigate, dispatch])
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        

        <div className="mb-4">
          <label htmlFor="first_name" className="block text-sm font-semibold text-gray-200 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={first_name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-semibold text-gray-200 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={last_name}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={phone}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="re_password" className="block text-sm font-semibold text-gray-200 mb-2">
            Repeat Password
          </label>
          <input
            type="password"
            name="re_password"
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
            onChange={handleChange}
            value={re_password}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="re_password" className="block text-sm font-semibold text-gray-200 mb-2">
            Profile Picture
          </label>
          <input className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
           type="file" accept='image/' name="profilePicture" onChange={handleChange} />
        </div>
        


       


       {isLoading ? (<Spinner />) : (
        <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-white/20 text-white rounded-lg transition-all duration-500 group hover:bg-blue-600/60 hover:text-white"
      >
        Register
      </button>
       )}


        
        <p className="mt-5 text-gray-200 ml-16">
          Already have an account? <Link to="/login" href="#" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
