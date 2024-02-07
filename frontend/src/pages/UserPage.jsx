import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserPage() {
    const { userInfo,user } = useSelector((state) => state.auth);

    const navigate = useNavigate()

    
       


    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (!user && storedUserInfo) {
            navigate('/login'); // Redirect to login if user is not logged in
        }
    }, [user, navigate]);

    
        
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md text-center">
                <h2 className="text-3xl font-bold mb-6">{userInfo.first_name} {userInfo.last_name}</h2>
                <p className="text-gray-200 mb-4">Name: <span className='font-bold text-green-500'>{userInfo.first_name} {userInfo.last_name}</span></p>
                <p className="text-gray-200 mb-4">Email: <span className='font-bold text-green-500' >{userInfo.email}  </span></p>
                <p className="text-gray-200 mb-8">Number: <span className='font-bold text-green-500' >{userInfo.phone} </span></p>
            </div>
        </div>
    );
}

export default UserPage;
