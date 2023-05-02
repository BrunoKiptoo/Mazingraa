import React, { useState } from 'react';
import Logo from '../assets/logo4.png';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(' http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    if (response.ok) {
      setShowModal(true);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg2">
      <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">Password Reset</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Reset Password</button>
        </form>

        <div className="mt-4 text-center">
          <p>Remember your password? <a href="/login" className="font-semibold hover:underline">Login</a></p>
        </div>
      </div>
      {showModal &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10">
            <p className="text-lg mb-4">You will be contacted shortly through your email to reset your new password</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      }
      <div class="mt-8 text-center text-white font-semibold mt-20">
        <p>For further support, you may visit the Help Center or contact our customer service team.</p>
        <img src={Logo} alt='logo' className="h-25 w-40 mx-auto mt-4" /> 
      </div>
    </div>
  );
}

export default PasswordReset;

