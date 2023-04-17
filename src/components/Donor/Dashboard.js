
import React, { useState, useEffect } from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaChevronLeft, FaChevronRight, FaDonate, FaHistory, FaBell, FaHeart, FaEdit, FaSignOutAlt } from 'react-icons/fa';

import DonorNavBar from './DonorNavBar';
import HistoryContent from './HistoryContent';
import NewDonationContent from './NewDonationContent';
import BeneficiaryStoriesContent from './BeneficiaryStoriesContent ';
import ReminderContent from './ReminderContent';
import NewDonationModal from './NewDonationModal';

function Dashboard() {

  
// *******************************************************************************************************************************************************************
    // This is for the NewDonationContent Rendering

    const [organizations, setOrganizations] = useState([]);


    useEffect(() => {
      // Fetch organizations data from backend API
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/organizations');
          const data = await response.json();
          // Update state with fetched data
          setOrganizations(data);
        } catch (error) {
          console.error('Failed to fetch organizations data:', error);
        }
      };
  
      fetchData();
    }, []); 

    const handleDonate = (organizationId) => {
      // Implement your logic for handling donation here
      console.log(`Donating to organization with id: ${organizationId}`);
    };
  
    const handleAddToDonationList = (organizationId) => {
      // Implement your logic for adding to donation list here
      console.log(`Adding organization with id: ${organizationId} to donation list`);
    };

// *******************************************************************************************************************************************************************
    
// ****************************************************************************************************************************************************************
    // This is for Editing User information  including name, email, and profile picture


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

// ****************************************************************************************************************************************************************
  
// ******************************************************************************************************************************************************************
    // This is for handiling the handleSidebarToggle

const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

// *******************************************************************************************************************************************************************

// This is for handling the display of the Content Area

  const [selectedContent, setSelectedContent] = useState(null);

  
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);


  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsWelcomeShown(false);
  };


  // // Function to handle "New-Donation" button click
  // const handleNewDonationClick = () => {
  //   if (!isWelcomeShown) {
  //     setSelectedContent('new-donation');
  //   }
  // };

// Define the handleNewDonationClick function in your component or in a separate module
const handleNewDonationClick = () => {
  console.log('New-Donation button clicked'); // Add your custom logic here
  setSelectedContent('new-donation');
};



  return (
   
    <div className="flex flex-col min-h-screen bg-fff5e1">
      <div className="flex-grow">
        <div className="flex h-screen">



  {/* ************************************This is the START of the contents related to the Sidebar Container********************************************** */}
          {isSidebarOpen && (
         
            <div className="flex-grow flex flex-col md:flex-row  h-full">
              <div className="w-full md:w-1/5 bg-gray-200 flex-1 fixed top-0 bottom-0 left-0">
              {/* w-1/5 bg-gray-200 flex-1 fixed top-0 bottom-0 left-0 */}
             
              <div className="flex flex-col h-full p-4  bg-[#464931] ">

                {/* Profile Picture ******************************************************************************************************/}

                    <div className="flex items-center justify-center mb-4">
                          <img
                            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt="Profile Picture"
                            className="w-30 h-20 rounded-full"
                          />
                    </div>

                {/* Profile Picture Upload *************************************************************************************************/}

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

              {/* ***************************End of Profile Picture Uploads********************************************************************* */}


                {/* Name and Email and Icon EditForm***********************************************************************************************************************/}

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


                                                      {/* This are the dashboard Buttons  */}

               <div className="flex flex-col h-full p-4">

{/* ***********************************************New-Donation Button*************************************************************** */}

{/* <button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => {
    
    console.log('New-Donation button clicked'); // Add console.log statement here
    setSelectedContent('new-donation');
  }}
  
>
  <FaDonate className="mr-2" />
  <span>New-Donation</span>
</button> */}



<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={handleNewDonationClick} // Add the onClick event handler here
>
  <FaDonate className="mr-2" />
  <span>New-Donation</span>
</button>


{/* ***********************************************End of New-Donation Button*************************************************************** */}


{/* ***********************************************History Button*************************************************************** */}

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('history')}>
  <FaHistory className="mr-2" />
  <span>History</span>
</button>

{/* ***********************************************End of History Button*************************************************************** */}

{/* ***********************************************Reminder Button*************************************************************** */}
<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
  onClick={() => setSelectedContent('reminder')}>
  <FaBell className="mr-2" />
  <span>Reminder</span>
</button>

{/* ***********************************************End of Reminder Button*************************************************************** */}

{/* ***********************************************Beneficiaries Stories Button*************************************************************** */}

<button
  className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center"
  onClick={() => setSelectedContent('beneficiary-stories')}>
  <FaHeart className="mr-2" />
  <span>Beneficiary Stories</span>
</button>


{/* ***********************************************End of Beneficiary Stories Button*************************************************************** */}

{/* ***********************************************Logout Button*************************************************************** */}

  <a href="/login" 
    className="py-2 mb-2 mt-auto bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md flex items-center justify-center ">
    <FaSignOutAlt className="mr-2" />
    <span>Logout</span>
  </a>

{/* ***********************************************End of Logout Button*************************************************************** */}

              </div>

                                            {/* This is the end of the dashboard Buttons  */}

        </div>
      </div>
      </div>
    
    )}

{/* ************************************This is the END of the contents related to the Sidebar Container********************************************** */}

                                              
                                              
                                              {/* This is the START OF THE CONTENT AREA */}

{/* ******These is where the props are passed from their imported components *************************************************************************************************** */}
          
                <div className="flex-grow flex flex-col   ">
                {/* flex-grow flex flex-col  changed */}
                      <div className="flex-none   ">
                          <DonorNavBar name={name} 
                                       handleSidebarToggle={handleSidebarToggle}
                          />
                      </div>

<div className="flex-grow">

{/*******************NewDonation Content ********************************************** */}
                
<div>
      {/* Render NewDonationContent component for each organization and pass the props */}
      {selectedContent === 'new-donation' &&
        organizations.map((org) => (
          <NewDonationContent
            key={org.id}
            organization={org}
            onDonate={handleDonate}
            onAddToDonationList={handleAddToDonationList}
            
          />
        ))}
      {/* Render NewDonationModal with welcome message */}
      {selectedContent === 'new-donation' && !isWelcomeShown && <NewDonationModal setIsWelcomeShown={setIsWelcomeShown}/>}
      
    </div>

{/*******************End of NewDonation Content ********************************************** */}

{/*******************HISTORY Content ********************************************** */}
<div>
{selectedContent === 'history' && <HistoryContent />}
</div>
   
{/*******************End of Hitory Content ********************************************** */}

{/*******************ReminderContent Content ********************************************** */}

<div>
{selectedContent === 'reminder' && <ReminderContent />}
</div>

{/*******************End of ReminderContent Content ********************************************** */}


{/*******************Beneficiary Stories Content ********************************************** */}
<div>
{selectedContent === 'beneficiary-stories' && <BeneficiaryStoriesContent />}
</div>

{/*******************End of Benficiary Content ********************************************** */}
      
</div>

{/* ************************************************************************************************************************************************************** */}

                                    
                                            {/* START OF FOOTER CONTENT */}

            <div className="flex-none  w-full">
                  <div className="flex items-center justify-between bg-gray-200 p-4">
                        <div className="flex items-center ">
                              <span className="mr-4">
                                    <FaFacebook className="text-2xl text-gray-600" />
                              </span>
                              <span className="mr-4">
                                    <FaInstagram className="text-2xl text-gray-600" />
                              </span>
                              <span>
                                    <FaTwitter className="text-2xl text-gray-600" />
                              </span>
                          </div>
                          <div>
                              <span className="text-gray-600 ">© 2023 Mazingira. All rights reserved.</span>
                          </div>
                  </div>

            </div>
                                          {/* This is the END OF FOOTER CONTENT */}
          </div>

                                        {/* This is the END OF THE CONTENT AREA */}



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

                                            {/* Sidebar Toggle Button */}
        </div>
      </div>
    </div>
  
  );
}
export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import NewDonationContent from './NewDonationContent';

// function Dashboard() {
//   const [selectedContent, setSelectedContent] = useState(null);
//   const [organizations, setOrganizations] = useState([]);

//   const handleDonate = (organizationId) => {
//     // Implement your logic for handling donation here
//     console.log(`Donating to organization with id: ${organizationId}`);
//   };

//   const handleAddToDonationList = (organizationId) => {
//     // Implement your logic for adding to donation list here
//     console.log(`Adding organization with id: ${organizationId} to donation list`);
//   };

//   useEffect(() => {
//     // Fetch organizations data from backend API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/organizations');
//         const data = await response.json();
//         // Update state with fetched data
//         setOrganizations(data);
//       } catch (error) {
//         console.error('Failed to fetch organizations data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to fetch data only once on component mount

//   return (
//     <div>
//       <button
//         className="py-2 mb-2 bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] text-gray-600 font-medium rounded-md mb-4 flex items-center justify-center"
//         onClick={() => {
//           console.log('New-Donation button clicked'); // Add console.log statement here
//           setSelectedContent('new-donation');
//         }}
//       >
//         <FaDonate className="mr-2" />
//         <span>New-Donation</span>
//       </button>
//       {selectedContent === 'new-donation' && organizations.map((org) => (
//         // Render NewDonationContent component for each organization and pass the props
//         <NewDonationContent
//           key={org.id}
//           organization={org}
//           onDonate={handleDonate}
//           onAddToDonationList={handleAddToDonationList}
//         />
//       ))}
//     </div>
//   );
// }

// export default Dashboard;

