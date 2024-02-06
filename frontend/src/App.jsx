import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/navigation/Nav';
import ResetPassword from './pages/ResetPassword';
import ActivatePage from './pages/ActivatePage';
import NotFoundpage from './pages/NotFoundpage';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/userpage" element={<UserPage/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/activate/:uid/:token" element={<ActivatePage/>} />
          <Route path="*" element={<NotFoundpage/>} />
        
         
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
};

export default App;
