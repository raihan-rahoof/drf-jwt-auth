import React , {useState , useEffect }from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, login, reset} from '../features/auth/authSlice'
import { toast } from 'react-toastify'


function Login() {

    const [formData, setFormData] = useState({
      "email": "",
      "password": "",
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  const handleChange = (e) => {
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      })
      )
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const userData = {
          email,
          password,
      }
      dispatch(login(userData))
  }


  useEffect(() => {
      if (isError) {
          toast.error(message)
      }

      if (isSuccess || user) {
          navigate("/userpage")
      }

      dispatch(reset())
      dispatch(getUserInfo())
     

  }, [isError, isSuccess, user, navigate, dispatch])



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            className="w-full rounded py-2 px-3 bg-transparent border border-white/10 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0"
            required
          />
        </div>
        <Link to="/resetpassword" className="relative bottom-2 text-sm text-gray-300 hover:underline">
            Forgot Password?
          </Link>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-2 backdrop-blur-2xl bg-white/20 text-white rounded-lg transition-all duration-500 group hover:bg-blue-600/60 hover:text-white"
        >
          Login
        </button>
        <p className="mt-5 text-gray-200 ml-16">
          Don't have an account? <Link to="/register" href="#" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
