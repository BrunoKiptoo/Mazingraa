
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import DonorNavBar from './DonorNavBar';

function Dashboard() {

  
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@example.com");
    const [profilePicture, setProfilePicture] = useState("https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80");
  
    const handleEditClick = () => {
      setIsEditFormOpen(true);
    }
  
    const handleSaveClick = () => {
      setIsEditFormOpen(false);
    }

    // Function to handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


  // Function to handle profile picture change
  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.value);
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
   
    <div className="flex flex-col min-h-screen bg-fff5e1">
      <div className="flex-grow">
        <div className="flex h-screen">
          {isSidebarOpen && (
            <div className="w-1/5 bg-gray-200">
              {/* Sidebar Container */}
              <div className="flex flex-col h-full p-4 ">
                {/* Profile Picture */}
              {/* Profile Picture */}
<div className="flex items-center justify-center mb-4">
  <img
    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    alt="Profile Picture"
    className="w-16 h-16 rounded-full"
  />
</div>

{/* Profile Picture Upload */}
{isEditFormOpen && (
  <div>
    <input
      type="file"
      accept="image/*"
      onChange={(e) => handleProfilePictureChange(e)}
      className="w-full mb-2 px-2 py-1 rounded-md"
    />
    <p className="text-gray-600 mb-4">or</p>
    <input
      type="text"
      placeholder="Enter Image URL"
      value={profilePicture}
      onChange={(e) => setProfilePicture(e.target.value)}
      className="w-full mb-2 px-2 py-1 rounded-md"
    />
  </div>
)}


                {/* Name */}
                {isEditFormOpen ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-2 px-2 py-1 rounded-md"
                  />
                ) : (
                  <p className="text-gray-600 text-lg font-medium mb-2">{name}</p>
                )}

                {/* Email */}
                {isEditFormOpen ? (
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange} // Use the handleEmailChange function to handle email change
                    className="w-full mb-4 px-2 py-1 rounded-md"
                  />
                ) : (
                  <p className="text-gray-600">{email}</p>
                )}

                {/* Edit Icon */}
                {isEditFormOpen ? (
                  <button
                    className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md mb-9"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
               <div class="flex flex-col h-full p-4">
  <a href="/new-donation" class="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md mb-4">New-Donation</a>
  <a href="/history" class="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md mb-4">History</a>
  <a href="/reminder" class="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md mb-4">Reminder</a>
  <a href="/beneficiary-stories" class="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Beneficiary Stories</a>
  <a href="/login" class="py-2 mb-2 mt-auto bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Logout</a>
</div>

            </div>
            </div>
          )}
          
          <div className="flex-grow flex flex-col">
            <div className="flex-none">
              <DonorNavBar name={name} />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-center h-full">
                <h1 className="text-3xl text-gray-600">Main Content</h1>
              </div>
            </div>
            <div className="flex-none">
              <div className="flex items-center justify-between bg-gray-200 p-4">
                <div>
                  <span className="mr-4">
                    <FontAwesomeIcon icon={FaGithub} className="text-2xl text-gray-600" />
                  </span>
                  <span className="mr-4">
                    <FontAwesomeIcon icon={FaLinkedin} className="text-2xl text-gray-600" />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={FaTwitter} className="text-2xl text-gray-600" />
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">© 2023 Mazingira. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Toggle Button */}
          <div
            className="fixed top-1/2 right-0 -translate-y-1/2 transform bg-gray-200 p-2 cursor-pointer"
            onClick={handleSidebarToggle}
            title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          >
            <span
              className="text-gray-600 text-sm absolute right-0 top-full transform translate-x-1/2 bg-gray-100 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {isSidebarOpen ? (
                <span>
                  Hide Sidebar
                  <FaChevronLeft className="inline-block ml-1" />
                </span>
               ) : (
                <span>
                  Show Sidebar
                  <FaChevronRight className="inline-block ml-1" />
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  
  );
}
export default Dashboard;





