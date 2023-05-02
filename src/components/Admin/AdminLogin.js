



import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
 
  const [token, setToken] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, username,token };
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include', // include cookies in the request
    })
      .then(() => {
        // If the login request is successful, redirect the user to the dashboard page
        window.location.href = '/admin-dashboard?email=${email}&username=${username}';
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg">
      <div class="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
        <h1 class="text-3xl font-bold text-yellow-500 text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <label for="email" class="block mb-2 font-medium">Email</label>
            <input type="email" id="email" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div class="mb-6">
            <label for="username" class="block mb-2 font-medium">Username</label>
            <input type="text" id="username" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event.target.value)} required />
          </div>

          <div className="mb-4">
            <label htmlFor="token" className="block mb-2 font-medium">Token</label>
            <input type="password" id="token" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 mb-6 focus:ring-yellow-500" placeholder="Enter your token" value={token} onChange={(event) => setToken(event.target.value)} required />
          </div>
    
          <button type="submit" class="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Login</button>
        </form>

        <div class="mt-4 text-center">
          <p>Don't have an account? <a href="/registration" class="font-semibold hover:underline">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from 'react';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = { email, token };
//     fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//       credentials: 'include', // include cookies in the request
//     })
//       .then(() => {
//         // If the login request is successful, redirect the user to the dashboard page
//         window.location.href = '/admin-dashboard?email=${email}';
//       })
//       .catch(error => console.error('Error logging in:', error));
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg">
//       <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block mb-2 font-medium">Email</label>
//             <input type="email" id="email" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
//           </div>
        
//           <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Access Account</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
