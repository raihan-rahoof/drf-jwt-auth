import React from 'react';

function ActivatePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-black/40 backdrop-blur-3xl p-8 rounded-lg w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6">Activate Your Account</h2>
        <p className="text-gray-200 mb-8">
          Welcome to our platform! To get started, click the button below to activate your account.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
          onClick={() => alert('Account Activated!')}
        >
          Activate Account
        </button>
      </div>
    </div>
  );
}

export default ActivatePage;
