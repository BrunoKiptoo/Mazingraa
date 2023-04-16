
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight, FaDonate, FaHistory, FaBell, FaHeart, FaEdit } from 'react-icons/fa';

import DonorNavBar from './DonorNavBar';
import HistoryContent from './HistoryContent';
import NewDonationContent from './NewDonationContent';
import BeneficiaryStoriesContent from './BeneficiaryStoriesContent ';
import ReminderContent from './ReminderContent';

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

  const [selectedContent, setSelectedContent] = useState(null);


  return (
   
    <div className="flex flex-col min-h-screen bg-fff5e1">
      <div className="flex-grow">
        <div className="flex h-screen">
          {isSidebarOpen && (
            <div className="w-1/5 bg-gray-200">
              {/* Sidebar Container */}
              <div className="flex flex-col h-full p-4  bg-[#464931] ">
                {/* Profile Picture */}
              {/* Profile Picture */}
<div className="flex items-center justify-center mb-4">
  <img
    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    alt="Profile Picture"
    className="w-30 h-20 rounded-full"
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
    <p className="text-white mb-4">or</p>
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
                  <p className="text-white text-lg font-medium mb-2">{name}</p>
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
                  <p className="text-white mb-5">{email}</p>
                )}

                {/* Edit Icon */}
                {isEditFormOpen ? (
                  <button
                    className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                ) : (
                  <button
                  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-9 flex items-center justify-center"
                  onClick={handleEditClick}
                >
                  <FaEdit className="mr-2" />
                  Edit
                </button>
                )}
               <div class="flex flex-col h-full p-4">

  <button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('new-donation')}>
  <FaDonate className="mr-2" />
  <span>New Donation</span>
</button>

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('history')}>
  <FaHistory className="mr-2" />
  <span>History</span>
</button>

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('reminder')}>
  <FaBell className="mr-2" />
  <span>Reminder</span>
</button>

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center"
  onClick={() => setSelectedContent('beneficiary-stories')}>
  <FaHeart className="mr-2" />
  <span>Beneficiary Stories</span>
</button>

              <a href="/login" 
              className="py-2 mb-2 mt-auto bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md ">
              Logout
              </a>
              </div>

            </div>
            </div>
          )}
          
          <div className="flex-grow flex flex-col ">
            <div className="flex-none ">
              <DonorNavBar name={name} />
            </div>
            <div className="flex-grow">
              {/* Render content based on selectedContent */}
    {selectedContent === 'new-donation' && <NewDonationContent />}
    {selectedContent === 'history' && <HistoryContent />}
    {selectedContent === 'reminder' && <ReminderContent />}
    {selectedContent === 'beneficiary-stories' && <BeneficiaryStoriesContent />}
              <div className="flex items-center justify-center h-full">
                <h1 className="text-3xl text-orange-600">Main Content</h1>
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
                  <span className="text-gray-600 ">© 2023 Mazingira. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Toggle Button */}
          <div className='fixed right-0 bottom-1/2 mr-1 mb-4 p-2 flex items-center bg-gray-600 rounded-full cursor-pointer'>
  <span
    className="text-gray-600 text-sm absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 px-2 py-1 rounded-md"
    onClick={handleSidebarToggle}
    title={isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
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




