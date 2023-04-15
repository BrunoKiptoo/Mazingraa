// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import DonorNavBar from './DonorNavBar';

// function Dashboard() {
//   const [sidebarExpanded, setSidebarExpanded] = useState(true);

//   const handleToggleSidebar = () => {
//     setSidebarExpanded(!sidebarExpanded);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">
//         <div className="flex h-screen">
//           <div className={`w-1/5 bg-gray-200 ${sidebarExpanded ? '' : 'w-14'}`}>
//             {/* Sidebar Container */}
//             <div className="flex flex-col h-full p-4">
//               <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md ">History</button>
//               <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Reminder</button>
//               <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Beneficiary Stories</button>
//               <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">My Account</button>
//               <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Logout</button>
//             </div>
//             <div className="flex justify-center items-center mt-auto">
//               <button className="focus:outline-none" onClick={handleToggleSidebar}>
//                 <FontAwesomeIcon icon={sidebarExpanded ? 'chevron-left' : 'chevron-right'} className="text-2xl text-gray-600 transform transition duration-300 hover:rotate-180" />
//               </button>
//             </div>
//           </div>
//           <div className="flex-grow flex flex-col">
//             <div className="flex-none">
//               <DonorNavBar />
//             </div>
//             <div className="flex-grow">
//               <div className="flex items-center justify-center h-full">
//                 <h1 className="text-3xl text-gray-600">Main Content</h1>
//               </div>
//             </div>
//             <div className="flex-none">
//               <div className="flex items-center justify-between bg-gray-200 p-4">
//                 <div>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaGithub} className="text-2xl text-gray-600" />
//                   </span>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaLinkedin} className="text-2xl text-gray-600" />
//                   </span>
//                   <span>
//                     <FontAwesomeIcon icon={FaTwitter} className="text-2xl text-gray-600" />
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">© 2023 Your Website. All rights reserved.</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaGithub, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import DonorNavBar from './DonorNavBar';

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">
//         <div className="flex h-screen">
//           {isSidebarOpen && (
//             <div className="w-1/5 bg-gray-200">
//               {/* Sidebar Container */}
//               <div className="flex flex-col h-full p-4">
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md ">History</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Reminder</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Beneficiary Stories</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">My Account</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Logout</button>
//               </div>
//             </div>
//           )}
//           <div className="flex-grow flex flex-col">
//             <div className="flex-none">
//               <DonorNavBar />
//             </div>
//             <div className="flex-grow">
//               <div className="flex items-center justify-center h-full">
//                 <h1 className="text-3xl text-gray-600">Main Content</h1>
//               </div>
//             </div>
//             <div className="flex-none">
//               <div className="flex items-center justify-between bg-gray-200 p-4">
//                 <div>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaGithub} className="text-2xl text-gray-600" />
//                   </span>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaLinkedin} className="text-2xl text-gray-600" />
//                   </span>
//                   <span>
//                     <FontAwesomeIcon icon={FaTwitter} className="text-2xl text-gray-600" />
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">© 2023 Your Website. All rights reserved.</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Sidebar Toggle Button */}
//           <div
//             className="fixed top-1/2 right-0 -translate-y-1/2 transform bg-gray-200 p-2 cursor-pointer"
//             onClick={handleSidebarToggle}
//           >
//             {isSidebarOpen ? (
//               <FontAwesomeIcon icon={FaChevronLeft} className="text-2xl text-gray-600" />
//             ) : (
//               <FontAwesomeIcon icon={FaChevronRight} className="text-2xl text-gray-600" />
//               )}
//               </div>
//               </div>
//               </div>
//               </div>
//               );
//               }
              
//               export default Dashboard;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaGithub, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// import DonorNavBar from './DonorNavBar';

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">
//         <div className="flex h-screen">
//           {isSidebarOpen && (
//             <div className="w-1/5 bg-gray-200">
//               {/* Sidebar Container */}
//               <div className="flex flex-col h-full p-4">
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md ">History</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Reminder</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Beneficiary Stories</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">My Account</button>
//                 <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Logout</button>
//               </div>
//             </div>
//           )}
//           <div className="flex-grow flex flex-col">
//             <div className="flex-none">
//               <DonorNavBar />
//             </div>
//             <div className="flex-grow">
//               <div className="flex items-center justify-center h-full">
//                 <h1 className="text-3xl text-gray-600">Main Content</h1>
//               </div>
//             </div>
//             <div className="flex-none">
//               <div className="flex items-center justify-between bg-gray-200 p-4">
//                 <div>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaGithub} className="text-2xl text-gray-600" />
//                   </span>
//                   <span className="mr-4">
//                     <FontAwesomeIcon icon={FaLinkedin} className="text-2xl text-gray-600" />
//                   </span>
//                   <span>
//                     <FontAwesomeIcon icon={FaTwitter} className="text-2xl text-gray-600" />
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">© 2023 Your Website. All rights reserved.</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Sidebar Toggle Button */}
//           <div
//             className="fixed top-1/2 right-0 -translate-y-1/2 transform bg-gray-200 p-2 cursor-pointer"
//             onClick={handleSidebarToggle}
//           >
//             <span
//               className="text-gray-600 text-sm absolute right-0 top-full transform translate-x-1/2 bg-gray-100 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
//             >
//               {isSidebarOpen? (
// <span>
// Hide Sidebar
// <FaChevronLeft className="inline-block ml-1" />
// </span>
// ) : (
// <span>
// Show Sidebar
// <FaChevronRight className="inline-block ml-1" />
// </span>
// )}
// </span>
// <FontAwesomeIcon icon={isSidebarOpen ? FaChevronLeft : FaChevronRight} className="text-2xl text-gray-600 group-hover:text-gray-800 transition-transform" />
// </div>
// </div>
// </div>
// </div>
// );
// }

// export default Dashboard;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import DonorNavBar from './DonorNavBar';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex h-screen">
          {isSidebarOpen && (
            <div className="w-1/5 bg-gray-200">
              {/* Sidebar Container */}
              <div className="flex flex-col h-full p-4">
                <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md ">History</button>
                <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Reminder</button>
                <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Beneficiary Stories</button>
                <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">My Account</button>
                <button className="py-2 mb-2 bg-white hover:bg-gray-100 text-gray-600 text-lg font-medium rounded-md">Logout</button>
              </div>
            </div>
          )}
          <div className="flex-grow flex flex-col">
            <div className="flex-none">
              <DonorNavBar />
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
                  <span className="text-gray-600">© 2023 Your Website. All rights reserved.</span>
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
