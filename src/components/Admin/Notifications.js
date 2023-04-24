









// import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';
// import tw from 'tailwind-styled-components';

// const ModalOverlay = tw.div`
//   fixed 
//   inset-0 
//   bg-gray-500 
//   bg-opacity-75 
//   flex 
//   justify-center 
//   items-center 
//   z-10
// `;

// const Modal = tw.div`
//   bg-white 
//   w-1/2 
//   p-6 
//   rounded-lg 
//   shadow-lg
// `;

// const FormLabel = tw.label`
//   block 
//   text-sm 
//   font-medium 
//   text-gray-700
// `;

// const FormInput = tw.input`
//   mt-1 
//   focus:ring-indigo-500 
//   focus:border-indigo-500 
//   block 
//   w-full 
//   sm:text-sm 
//   border-gray-300 
//   rounded-md
// `;

// const FormTextarea = tw.textarea`
//   mt-1 
//   focus:ring-indigo-500 
//   focus:border-indigo-500 
//   block 
//   w-full 
//   sm:text-sm 
//   border-gray-300 
//   rounded-md
// `;

// const FormButton = tw.button`
//   inline-flex 
//   items-center 
//   px-4 
//   py-2 
//   border 
//   border-transparent 
//   text-sm 
//   font-medium 
//   rounded-md 
//   shadow-sm 
//   text-white 
//   focus:outline-none 
//   focus:ring-2 
//   focus:ring-offset-2 
//   focus:ring-indigo-500
// `;

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     message: '',
//     sender: 'Admin',
//     image: 'https://via.placeholder.com/50',
//     user: ''
//   });

//   useEffect(() => {
//     fetch('http://localhost:5000/notifications')
//       .then(res => res.json())
//       .then(data => {
//         const notificationsWithDate = data.map(notification => {
//           return {
//             ...notification,
//             createdAt: new Date()
//           };
//         });
//         setNotifications(notificationsWithDate);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const handleDeleteNotification = (id) => {
//     fetch(`http://localhost:5000/notifications/${id}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         const updatedNotifications = notifications.filter(notification => notification.id !== id);
//         setNotifications(updatedNotifications);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleClearNotifications = () => {
//     fetch('http://localhost:5000/notifications', {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => {
//         setNotifications([]);
//         setShowModal(false);
//       })
//       .catch(err => console.log(err));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:5000/notifications', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(data => {
//         setNotifications([...notifications, data]);
//         setFormData({
//           title: '',
//           message: '',
         

// sender: 'Admin',
// image: 'https://via.placeholder.com/50',
// user: ''
// });
// setShowModal(false);
// })
// .catch(err => console.log(err));
// };

// return (
// <div>
// <h1 className="text-3xl font-bold mb-4">Notifications</h1>
// {notifications.map(notification => (
// <div key={notification.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4">
// <div className="flex items-center">
// <img src={notification.image} alt="user avatar" className="w-10 h-10 rounded-full mr-4" />
// <div>
// <h2 className="text-md font-medium text-gray-800">{notification.title}</h2>
// <p className="text-sm text-gray-600">{notification.message}</p>
// <p className="text-xs text-gray-500 mt-1">Sent by: {notification.sender} at {notification.createdAt.toLocaleString()}</p>
// </div>
// </div>
// <button onClick={() => handleDeleteNotification(notification.id)} className="text-gray-600 hover:text-red-600">
// <FaTrash />
// </button>
// </div>
// ))}
// <div className="flex justify-end">
// <button onClick={() => setShowModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
// Add Notification
// </button>
// {notifications.length > 0 && (
// <button onClick={() => setShowModal(true)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
// Clear Notifications
// </button>
// )}
// </div>
// {showModal && (
// <ModalOverlay>
// <Modal>
// <h1 className="text-xl font-bold mb-4">Add Notification</h1>
// <form onSubmit={handleSubmit}>
// <div className="mb-4">
// <FormLabel>Title</FormLabel>
// <FormInput type="text" name="title" value={formData.title} onChange={handleInputChange} />
// </div>
// <div className="mb-4">
// <FormLabel>Message</FormLabel>
// <FormTextarea name="message" rows="3" value={formData.message} onChange={handleInputChange}></FormTextarea>
// </div>
// <FormButton type="submit">Add Notification</FormButton>
// <FormButton onClick={() => setShowModal(false)} className="bg-red-600 hover:bg-red-700 ml-4">Cancel</FormButton>
// </form>
// </Modal>
// </ModalOverlay>
// )}
// </div>
// );
// };

// export default Notifications;

import React, { useState, useEffect } from 'react';

function Notifications() {


  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);


  const [formData, setFormData] = useState({
    title: '',
    message: '',
    sender: 'Admin',
    image: 'https://via.placeholder.com/50',
    user: ''
  });
  const [sendToAll, setSendToAll] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/notifications')
      .then(res => res.json())
      .then(data => {
        const notificationsWithDate = data.map(notification => {
          return {
            ...notification,
            createdAt: new Date()
          };
        });
        setNotifications(notificationsWithDate);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDeleteNotification = (id) => {
    fetch(`http://localhost:5000/notifications/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        const updatedNotifications = notifications.filter(notification => notification.id !== id);
        setNotifications(updatedNotifications);
      })
      .catch(err => console.log(err));
  };

  const handleClearNotifications = () => {
    fetch('http://localhost:5000/notifications', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        setNotifications([]);
        setShowModal(false);
      })
      .catch(err => console.log(err));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let url;
    if (sendToAll) {
      url = 'http://localhost:5000/notifications/all';
    } else {
      url = `http://localhost:5000/notifications/${formData.user}`;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setNotifications([...notifications, data]);
        setFormData({
          title: '',
          message: '',
          sender: 'Admin',
          image: 'https://via.placeholder.com/50',
          user: ''
        });
        setShowModal(false);
      })
      .catch(err => console.log(err));
  };

  const handleSendToAllChange = (event) => {
    setSendToAll(event.target.value === 'all');
  };

  return (
    <div>
    <h1>Notifications</h1>
    <div>
      <button onClick={() => setShowCreateModal(true)}>Create Notification</button>
      <button onClick={() => setShowClearModal(true)}>Clear All Notifications</button>
    </div>
  
    <div>
      {notifications.map(notification => (
        <div key={notification.id}>
          <h2>{notification.title}</h2>
          <p>{notification.message}</p>
          <p>{notification.sender}</p>
          <p>{notification.createdAt.toLocaleString()}</p>
          <button onClick={() => handleDeleteNotification(notification.id)}>Delete</button>
        </div>
      ))}
    </div>
  
    {showCreateModal && (
    <div className="fixed z-50 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create Notification</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="border-2 border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="border-2 border-gray-300 rounded-lg p-2 w-full"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="sender" className="block font-bold mb-2">Sender:</label>
            <input type="text" id="sender" name="sender" value={formData.sender} onChange={handleInputChange} className="border-2 border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block font-bold mb-2">Image:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} className="border-2 border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="user" className="block font-bold mb-2">User:</label>
            <input type="text" id="user" name="user" value={formData.user} onChange={handleInputChange} className="border-2 border-gray-300 rounded-lg p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Send to:</label>
            <select value={sendToAll ? 'all' : 'user'} onChange={handleSendToAllChange} className="border-2 border-gray-300 rounded-lg p-2 w-full">
              <option value="all">All Users</option>
              <option value="user">Selected User</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 mr-2">Send</button>
            <button onClick={() => setShowCreateModal(false)} className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4">Cancel</button>
          </div>
        </form>
      </div>
    </div>
   </div>
   
)}
  
  {showClearModal && (
  <div className="fixed z-50 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Clear All Notifications</h2>
        <p className="mb-4">Are you sure you want to clear all notifications?</p>
        <div className="flex justify-end">
          <button onClick={() => handleClearNotifications()} className="bg-red-500 text-white rounded-lg py-2 px-4 mr-2">Yes</button>
          <button onClick={() => setShowClearModal(false)} className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4">No</button>
        </div>
      </div>
    </div>
  </div>
)}

  </div>
  
  
  );
      }  

  export default Notifications