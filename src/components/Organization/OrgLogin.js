// import React from 'react';
// // import Logo from '../assets/logo4.png';


// function Login() {
//   return (
//     <div class="min-h-screen flex flex-col items-center justify-center bg">
//     <div class="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
//       <h1 class="text-3xl font-bold text-yellow-500 text-center mb-6">Login</h1>
//       <form>
//         <div class="mb-6">
//           <label for="email" class="block mb-2 font-medium"></label>
//           <input type="email" id="email" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your email" />
//         </div>
//         <div class="mb-4">
//           <label for="password" class="block mb-2 font-medium"></label>
//           <input type="password" id="password" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your password" />
//         </div>
//         <div class="flex items-center justify-between mb-4">
//           <div class="flex items-center ">
//             <input type="checkbox" id="remember" class="mr-2 " />
//             <label for="remember">Remember me</label>
//           </div>
//           <a href="/password-reset" class="font-semibold hover:underline">Forgot password?</a>
//         </div>
//         <button type="submit" class="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">Login</button>
//       </form>
  
//       <div class="mt-4 text-center">
//         <p>Don't have an account? <a href="/registration" class="font-semibold hover:underline">Register</a></p>
//       </div>
  
      
//     </div>
//     {/* <div class="mt-8 text-center text-white font-semibold mt-40">
//         <p>For further support, you may visit the Help Center or contact our customer service team.</p>
//         <img src={Logo} alt='logo' className="h-25 w-40 mx-auto mt-4" /> 
//       </div> */}
//   </div>
  
//   );
// }

// export default Login;




import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, username, password };
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include', // include cookies in the request
    })
      .then(() => {
        // If the login request is successful, redirect the user to the dashboard page
        window.location.href = `/organization-dashboard?email=${email}&username=${username}`;
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
          <div class="mb-4">
            <label for="password" class="block mb-2 font-medium">Password</label>
            <input type="password" id="password" class="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center ">
              <input type="checkbox" id="remember" class="mr-2 " />
              <label for="remember">Remember me</label>
            </div>
            <a href="/password-reset" class="font-semibold hover:underline">Forgot password?</a>
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

