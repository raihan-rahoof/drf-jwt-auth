import React,{useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { activate,reset } from '../features/auth/authSlice';


function ActivatePage() {

  const { uid, token } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLoading , isError , isSuccess , message }=useSelector((state)=> state.auth)


  const handleSubmit=(e)=>{
    e.preventDefault()

    const userData = {
      uid,
      token
    }

    dispatch(activate(userData))
    toast.success("Your account has been activated! You can login now")


  }

  useEffect(() => {
    if (isError) {
        toast.error(message)
    }

    if (isSuccess) {
        navigate("/login")
    }

    dispatch(reset())    

}, [isError, isSuccess, navigate, dispatch])


return (
  <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md text-center">
      <h2 className="text-3xl font-bold mb-6">Activate Your Account</h2>
      <p className="text-gray-200 mb-8">
        Welcome to our platform! To get started, click the button below to activate your account.
      </p>

      {isLoading ? (
        <Spinner />
      ) : (
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
          onClick={handleSubmit}
        >
          Activate Account
        </button>
      )}
    </div>
  </div>
);
}

export default ActivatePage;
