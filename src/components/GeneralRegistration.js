// import React from 'react';

// function GeneralRegistration() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6">Registration</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//               placeholder="Email address"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-2 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//               placeholder="Password"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="registrationType" className="block mb-2 font-medium">
//               Registration Type
//             </label>
//             <select
//               id="registrationType"
//               className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="donor">Donor</option>
//               <option value="organization">Organization</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Register
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <p>
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-500 hover:text-blue-600 transition duration-300">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GeneralRegistration;



// import React, { useState } from 'react';


// function GeneralRegistration() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     registrationType: 'donor',
//   });
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password, confirmPassword, registrationType } = formData;
//     let errors = {};

//     // Validation
//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     if (registrationType === 'organization' && !confirmPassword) {
//       errors.confirmPassword = 'Confirm Password is required';
//     } else if (registrationType === 'organization' && confirmPassword !== password) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (Object.keys(errors).length === 0) {
//       // Submit form data
//       if (registrationType === 'donor') {
//         // Redirect to donor dashboard
//         window.location.href = '/donor-login';
//       } else if (registrationType === 'organization') {
//         // Redirect to organization dashboard
//         window.location.href = '/organization-dashboard';
//       }
//     } else {
//       setErrors(errors);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg2 ">
//       <div className=" p-8 rounded-md shadow-md w-full max-w-md bg-[#9bbf7f]">
//         <h2 className="text-2xl font-bold mb-6 text-yellow-500">Registration</h2>
//         <form onSubmit={handleSubmit}>
//   <div className="mb-4">
//     <label htmlFor="email" className="block mb-2 font-medium">
      
//     </label>
//     <input
//       type="email"
//       id="email"
//       name="email"
//       value={formData.email}
//       onChange={handleInputChange}
//       className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
//         errors.email ? 'border-red-500' : ''
//       }`}
//       placeholder="Email address"
//     />
//     {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
//   </div>
//   <div className="mb-4">
//     <label htmlFor="password" className="block mb-7 font-medium">
      
//     </label>
//     <input
//       type="password"
//       id="password"
//       name="password"
//       value={formData.password}
//       onChange={handleInputChange}
//       className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
//         errors.password ? 'border-red-500' : ''
//       }`}
//       placeholder="Password"
//     />
//     {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
//   </div>
//   {formData.registrationType === 'organization' && (
//   <div className="mb-4">
//     <label htmlFor="confirmPassword" className="block mb-7 font-medium">
      
//     </label>
//     <input
//       type="password"
//       id="confirmPassword"
//       name="confirmPassword"
//       value={formData.confirmPassword}
//       onChange={handleInputChange}
//       className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
//         errors.confirmPassword ? 'border-red-500' : ''
//       }`}
//       placeholder="Confirm Password"
//     />
//     {errors.confirmPassword && (
//       <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
//     )}
//   </div>
// )}

// {formData.registrationType === 'donor' && (
//   <div className="mb-4">
//     <label htmlFor="confirmDonorPassword" className="block mb-7 font-medium">
      
//     </label>
//     <input
//       type="password"
//       id="confirmDonorPassword"
//       name="confirmDonorPassword"
//       value={formData.confirmDonorPassword}
//       onChange={handleInputChange}
//       className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
//         errors.confirmDonorPassword ? 'border-red-500' : ''
//       }`}
//       placeholder="Confirm Password"
//     />
//     {errors.confirmDonorPassword && (
//       <p className="text-red-500 mt-1">{errors.confirmDonorPassword}</p>
//     )}
//   </div>
// )}
//   <div className="mb-4">
//     <label htmlFor="registrationType" className="block mb-2 font-medium">
//       Registration Type
//     </label>
//     <select
//       id="registrationType"
//       name="registrationType"
//       value={formData.registrationType}
//       onChange={handleInputChange}
//       className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//     >
//       <option value="donor">Donor</option>
//       <option value="organization">Organization</option>
//     </select>
//   </div>
//   <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md">
//     Register
//   </button>
//   <div className="mt-4 text-center">
//         <p>Already have an account?<a href="/login" className="font-semibold hover:underline">
//            Login</a></p>
//       </div>
// </form>

//             </div>

           
//             </div>
//             );
//             }
            
//             export default GeneralRegistration;


// import React, { useState } from 'react';

// function GeneralRegistration() {
// const [formData, setFormData] = useState({
// email: '',
// password: '',
// confirmPassword: '',
// registrationType: 'donor',
// });
// const [errors, setErrors] = useState({});

// const handleInputChange = (e) => {
// const { name, value } = e.target;
// setFormData({ ...formData, [name]: value });
// setErrors({ ...errors, [name]: '' });
// };

// const handleSubmit = (e) => {
// e.preventDefault();
// const { email, password, confirmPassword, registrationType } = formData;
// let errors = {};
// // Validation
// if (!email) {
//   errors.email = 'Email is required';
// } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//   errors.email = 'Invalid email address';
// }
// if (!password) {
//   errors.password = 'Password is required';
// } else if (password.length < 6) {
//   errors.password = 'Password must be at least 6 characters';
// }
// if (registrationType === 'organization' && !confirmPassword) {
//   errors.confirmPassword = 'Confirm Password is required';
// } else if (registrationType === 'organization' && confirmPassword !== password) {
//   errors.confirmPassword = 'Passwords do not match';
// }

// if (Object.keys(errors).length === 0) {
//   // Submit form data
//   if (registrationType === 'donor') {
//     // Redirect to donor dashboard
//     window.location.href = '/donor-dashboard';
//   } else if (registrationType === 'organization') {
//     // Apply to be an organization on the platform and set up organization details
//     console.log('Application submitted successfully!');
//   }
// } else {
//   setErrors(errors);
// }
// };

// return (
// <div className="flex justify-center items-center min-h-screen bg2 ">
//   <div className="p-8 rounded-md shadow-md w-full max-w-md bg-[#9bbf7f]">
//     <h2 className="text-2xl font-bold mb-6 text-yellow-500">Registration</h2>
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-2 font-medium">
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
//           placeholder="Email address"
//         />
//         {errors.email && (
//           <p className="text-red-500 mt-1">{errors.email}</p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-2 font-medium">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
//           placeholder="Password"
//         />
//         {errors.password && (
//           <p className="text-red-500 mt-1">{errors.password}</p>
//         )}
//       </div>
//       {formData.registrationType === 'organization' && (
//         <div className="mb-4">
//           <label htmlFor="confirmPassword" className="block mb-2 font-medium">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleInputChange}
//             className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
//             placeholder="Confirm Password"
//           />
//           {errors.confirmPassword && (
//             <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
//           )}
//         </div>
//       )}

//      {formData.registrationType === 'donor' && (
//   <div className="mb-4">
//     <label htmlFor="confirmDonorPassword" className="block mb-7 font-medium">
      
//     </label>
//     <input
//       type="password"
//       id="confirmDonorPassword"
//       name="confirmDonorPassword"
//       value={formData.confirmDonorPassword}
//       onChange={handleInputChange}
//       className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${
//         errors.confirmDonorPassword ? 'border-red-500' : ''
//       }`}
//       placeholder="Confirm Password"
//     />
//     {errors.confirmDonorPassword && (
//       <p className="text-red-500 mt-1">{errors.confirmDonorPassword}</p>
//     )}
//   </div>
// )}


      
//       <div className="mb-4">
//         <label htmlFor="registrationType" className="block mb-2 font-medium">
//           Registration Type
//         </label>
//         <select
//           id="registrationType"
//           name="registrationType"
//           value={formData.registrationType}
//           onChange={handleInputChange}
//           className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//         >
//           <option value="donor">Donor</option>
//           <option value="organization">Organization</option>
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white font-medium"
//       >
//         Register
//       </button>
//     </form>
//   </div>
// </div>
// );
// }
// export default GeneralRegistration;




import React, { useState } from 'react';

function GeneralRegistration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    website: '',
    registrationType: 'donor',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, registrationType, name, website } = formData;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (registrationType === 'organization') {
      if (!name) {
        errors.name = 'Name is required';
      } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
        errors.name = 'Invalid name';
      }
    }

    console.log('Form data:', formData);
    console.log('Errors:', errors);

    if (Object.keys(errors).length === 0) {
      if (registrationType === 'donor') {
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            registrationType,
          }),
        })
          .then((response) => {
            console.log('Response:', response);
            if (response.ok) {
              window.location.href = '/donor-dashboard';
            } else {
              throw new Error('Failed to create donor account');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else if (registrationType === 'organization') {
        fetch('http://localhost:5000/applications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            website,
          }),
        })
          .then((response) => {
            console.log('Response:', response);
            if (response.ok) {
              setShowModal(true);
            } else {
              throw new Error('Failed to apply to be an organization');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } else {
      setErrors(errors);
    }
  };


  

  return (
<div className="flex justify-center items-center min-h-screen bg2 ">
  <div className="p-8 rounded-md shadow-md w-full max-w-md bg-[#9bbf7f]">
    <h2 className="text-2xl font-bold mb-6 text-yellow-500">Registration</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
         Email Address
       </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Email address"
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 mt-1">{errors.password}</p>
        )}
      </div>
      {formData.registrationType === 'organization' && (
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Official Organization Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
          onChange={handleInputChange}
          className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Your Organization's Name"
        />
        {errors.name && (
          <p className="text-red-500 mt-1">{errors.name}</p>
        )}

         
        </div>

        
      )}

{formData.registrationType === 'organization' && (
        <div className="mb-4">
          <label htmlFor="website" className="block mb-2 font-medium">
           Official Website
          </label>
          <input
            type="website"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            // className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.website ? 'border-red-500' : ''}`}
            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Your Official Website"
          />
          {errors.website && (
          <p className="text-red-500 mt-1">{errors.website}</p>
        )}

         
        </div>

        
      )}


      <div className="mb-4">
        <label htmlFor="registrationType" className="block mb-2 font-medium">
          Registration Type
        </label>
        <select
          id="registrationType"
          name="registrationType"
          value={formData.registrationType}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="donor">Donor</option>
          <option value="organization">Organization</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white font-medium"
       
      >
        Register
      </button>
{showModal && (
<div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
<div className="p-8 rounded-md shadow-md w-full max-w-md bg-white">
<h2 className="text-2xl font-bold mb-6 text-yellow-500">Organization Application</h2>
<p>
Thank you for your interest in becoming an organization on our platform. 
Your application has been sent and is being reviwed. 
You will be contacted through your email after the review is completed.
</p>
{/* Add organization application form here */}
</div>
</div>
)}
</form>
</div>
</div>


);
}

export default GeneralRegistration;
