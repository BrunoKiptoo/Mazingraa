// import React, { useState, useEffect } from 'react';

// function UserManagement() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [newUser, setNewUser] = useState({ name: '', email: '', role: 'donor' });

//   useEffect(() => {
//     setLoading(true);
//     fetch('http://localhost:5000/users')
//       .then(res => res.json())
//       .then(data => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   const handleEditClick = userId => {
//     setEditingUserId(userId);
//     const userToEdit = users.find(user => user.id === userId);
//     setNewUser(userToEdit);
//   };

//   const handleSaveClick = () => {
//     setLoading(true);
//     const method = editingUserId ? 'PUT' : 'POST';
//     const url = editingUserId ? `http://localhost:5000/users/${editingUserId}` : 'http://localhost:5000/users';
//     fetch(url, {
//       method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then(res => res.json())
//       .then(savedUser => {
//         const updatedUsers = editingUserId
//           ? users.map(user => (user.id === editingUserId ? savedUser : user))
//           : [...users, savedUser];
//         setUsers(updatedUsers);
//         setNewUser({ name: '', email: '', role: 'donor' });
//         setEditingUserId(null);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   };

//   const handleDeleteClick = userId => {
//     setLoading(true);
//     fetch(`http://localhost:5000/users/${userId}`, { method: 'DELETE' })
//       .then(() => {
//         const updatedUsers = users.filter(user => user.id !== userId);
//         setUsers(updatedUsers);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setNewUser(prevUser => ({ ...prevUser, [name]: value }));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       <form className="mb-4">
//         <label className="block mb-2">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={newUser.name}
//             onChange={handleInputChange}
//             className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
//           />
//         </label>
//         <label className="block mb-2">
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={newUser.email}
//             onChange={handleInputChange}
//             className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
//           />
//         </label>
//         <label className="block mb-2">
//           Role:
//           <select
//             name="role"
//             value={newUser.role}
//             onChange={handleInputChange}
//             className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
//           >
//             <option value="donor">Donor</option>
//             <option value="organization">Organization</option>
//           </select>
//         </label>
// <div className="flex">
//   <button
//     type="button"
//     onClick={handleSaveClick}
//     disabled={!newUser.name || !newUser.email || loading}
//     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//   >
//     {editingUserId ? 'Save Changes' : 'Create User'}
//   </button>
//   <button
//     type="button"
//     onClick={() => {
//       setNewUser({ name: '', email: '', role: 'donor' });
//       setEditingUserId(null);
//     }}
//     disabled={loading}
//     className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//   >
//     Cancel
//   </button>
// </div>
// <table className="table-auto mt-4">
//   <thead>
//     <tr>
//       <th className="px-4 py-2">Name</th>
//       <th className="px-4 py-2">Email</th>
//       <th className="px-4 py-2">Role</th>
//       <th className="px-4 py-2">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     {users.map(user => (
//       <tr key={user.id}>
//         <td className="border px-4 py-2">{user.name}</td>
//         <td className="border px-4 py-2">{user.email}</td>
//         <td className="border px-4 py-2">{user.role}</td>
//         <td className="border px-4 py-2">
//           <button
//             type="button"
//             onClick={() => handleEditClick(user.id)}
//             disabled={loading}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
//           >
//             Edit
//           </button>
//           <button
//             type="button"
//             onClick={() => handleDeleteClick(user.id)}
//             disabled={loading}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// {loading && <p className="text-gray-500 mt-4">Loading...</p>}
// </form>
// </div>
// );
// }
// export default UserManagement;





import React, { useState, useEffect } from 'react';

function UserManagement() {
const [applications, setApplications] = useState([]);
const [loading, setLoading] = useState(false);
const [editingApplicationId, setEditingApplicationId] = useState(null);
const [newApplication, setNewApplication] = useState({ name: '', email: '', website: '', status: 'pending' });

useEffect(() => {
setLoading(true);
fetch('https://mazingira-api.onrender.com/applications')
.then(res => res.json())
.then(data => {
setApplications(data);
setLoading(false);
})
.catch(err => {
console.error(err);
setLoading(false);
});
}, []);

const handleEditClick = applicationId => {
setEditingApplicationId(applicationId);
const applicationToEdit = applications.find(application => application.id === applicationId);
setNewApplication(applicationToEdit);
};

const handleSaveClick = () => {
setLoading(true);
const method = editingApplicationId ? 'PUT' : 'POST';
const url = editingApplicationId ? ` https://mazingira-api.onrender.com/${editingApplicationId}` : ' https://mazingira-api.onrender.com/applications';
fetch(url, {
method,
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newApplication),
})
.then(res => res.json())
.then(savedApplication => {
const updatedApplications = editingApplicationId
? applications.map(application => (application.id === editingApplicationId ? savedApplication : application))
: [...applications, savedApplication];
setApplications(updatedApplications);
setNewApplication({ name: '', email: '', website: '', status: 'pending' });
setEditingApplicationId(null);
setLoading(false);
})
.catch(err => {
console.error(err);
setLoading(false);
});
};

const handleDeleteClick = applicationId => {
setLoading(true);
fetch(' https://mazingira-api.onrender.com/${applicationId}', { method: 'DELETE' })
.then(() => {
const updatedApplications = applications.filter(application => application.id !== applicationId);
setApplications(updatedApplications);
setLoading(false);
})
.catch(err => {
console.error(err);
setLoading(false);
});
};

const handleInputChange = event => {
const { name, value } = event.target;
setNewApplication(prevApplication => ({ ...prevApplication, [name]: value }));
};

const handleStatusChange = (applicationId, newStatus) => {
  setLoading(true);
  const updatedApplication = applications.find(application => application.id === applicationId);
  updatedApplication.status = newStatus;
  updatedApplication.name = updatedApplication.name || '';
  updatedApplication.email = updatedApplication.email || '';
  updatedApplication.website = updatedApplication.website || '';
  
  fetch(` https://mazingira-api.onrender.com/applications/${applicationId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedApplication),
  })
    .then(res => res.json())
    .then(savedApplication => {
      if (newStatus === 'accepted') {
        const newOrganization = {
          name: updatedApplication.name ? updatedApplication.name : '',
  email: updatedApplication.email ? updatedApplication.email : '',
  website: updatedApplication.website ? updatedApplication.website : '',
  status: 'active',
        };
        console.log('newOrganization:', newOrganization); // add this line to check newOrganization
        fetch(' https://mazingira-api.onrender.com/organizations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrganization),
        })
          .then(res => res.json())
          .then(savedOrganization => {
            console.log('savedApplication:', savedOrganization); // add this line to check savedOrganization
            // Send email to the organization
            const emailjs = require('emailjs-com');
            const templateParams = {
              to_name: savedOrganization.name,
              to_email: savedOrganization.email,
              message_html: `Congratulations! After carefully reviewing the legitimacy and credibility of your organization, You have been accepted to join the Mazingira platform. Please click on the following link to login and setup your organization details: http://localhost:5000/organization-login`
            };
            emailjs.send('service_65qzd7r', 'template_6r5cibg', templateParams, 'vIZosvxHBrDlxjMHG')
              .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                console.log('FAILED...', error);
              });
            setLoading(false);
          })
          .catch(err => {
            console.error(err);
            setLoading(false);
          });
      } else {
        const updatedApplications = applications.map(application =>
          application.id === savedApplication.id ? savedApplication : application
        );
        setApplications(updatedApplications);
        setLoading(false);
      }
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
};



function handleCancelClick() {
  // Add your logic here to handle the cancel click event
  console.log("Cancel button clicked");
}






return (
  <div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Application Management</h1>
  <table className="table-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Website</th>
        <th className="px-4 py-2">Status</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {loading ? (
        <tr>
          <td colSpan="5" className="text-center py-4">
            Loading...
          </td>
        </tr>
      ) : applications.length ? (
        applications.map(application => (
          <tr key={application.id}>
            <td className="border px-4 py-2">{application.name}</td>
            <td className="border px-4 py-2">{application.email}</td>
            <td className="border px-4 py-2">{application.website}</td>
            <td className="border px-4 py-2">
              <select
                className="bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={application.status}
                onChange={e => handleStatusChange(application.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleEditClick(application.id)}>Edit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteClick(application.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className="text-center py-4">
            No applications found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
  <h2 className="text-xl font-bold my-4">{editingApplicationId ? 'Edit Application' : 'Add New Application'}</h2>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSaveClick}>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        name="name"
        type="text"
        value={newApplication.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"    
  name="email"
  type="email"
  value={newApplication.email}
  onChange={handleInputChange}
  />
  </div>
  <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="website">Website</label>
  <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="website"
       name="website"
       type="text"
       value={newApplication.website}
       onChange={handleInputChange}
     />
  </div>
  <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="status">Status</label>
  <select
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="status"
       name="status"
       value={newApplication.status}
       onChange={handleInputChange}
     >
  <option value="pending">Pending</option>
  <option value="accepted">Accepted</option>
  <option value="rejected">Rejected</option>
  </select>
  </div>
  <div className="flex items-center justify-between">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
  {editingApplicationId ? 'Save Changes' : 'Add Application'}
  </button>
  {editingApplicationId && (
  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCancelClick}>
  Cancel
  </button>
  )}
  </div>
  
    </form>
  </div>
);
}
export default UserManagement;