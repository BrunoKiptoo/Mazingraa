




import React, { useState, useEffect } from 'react';
import { FaPaypal, FaMobileAlt,  FaGlobe, FaMapMarkerAlt, FaCopy  } from 'react-icons/fa';

function DirectDonation() {
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch('https://mazingira-api.onrender.com/organizations');
        const data = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrganizations();
  }, []);

  const [isDonated, setIsDonated] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const filteredOrganizations = organizations.filter(orgData =>
    orgData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center mt-6 mb-4">
        <input
          className="border border-gray-400 p-2 rounded-lg w-1/4 mr-4"
          type="text"
          placeholder="Search for organizations"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => {
            const filteredResults = organizations.filter((orgData) =>
              orgData.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setOrganizations(filteredResults);
          }}
        >
          Search
        </button>
      </div>
      {filteredOrganizations.map(orgData => (
                   <div className="bg-gray-100 shadow-md rounded-md p-4" key={orgData.id}>
           {/* <h1 className="text-2xl font-bold">Here is a list of organizations you can donate to</h1> */}
           <div className="flex-1 mr-6 mt-6">
             <div className="">
               <div className="flex">
                 <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 flex-grow ml-4">
                   <div className="flex">
                     <div className="flex-shrink-0">
                       <img className="object-cover object-center h-24 w-24 rounded-full" src={orgData.image} alt="Organization Image" />
                     </div>
                     <div className="flex-grow p-6">
                       <h3 className="text-gray-900 font-semibold text-lg mb-2">{orgData.name}</h3>
                       <p className="text-gray-600 text-sm mb-4">{orgData.description}</p>
                       <div>
                         <p className="text-black text-sm mb-2 flex items-center">
                           <FaPaypal className="inline-block mr-2" />
                           Paypal:
                           <span onClick={() => copyToClipboard(orgData.email)} className="cursor-pointer ml-2 text-blue-500 hover:underline">
                             {orgData.email}
                             <FaCopy className="inline-block ml-2" />
                           </span>
                         </p>
                         <p className="text-black text-sm mb-2 flex items-center">
                           <FaMobileAlt className="inline-block mr-2" />
                           M-Pesa Express:
                           <span onClick={() => copyToClipboard(orgData.orgShortCode)} className="cursor-pointer ml-2 text-blue-500 hover:underline">
                             {orgData.orgShortCode}
                             <FaCopy className="inline-block ml-2" />
                           </span>
                         </p>
                       </div>
                       <p className="text-black text-sm mb-2 flex items-center"><FaMapMarkerAlt  className="inline-block mr-2" />{orgData.location}</p>
                       <a href={orgData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mb-4 hover:underline flex items-center">
                         <FaGlobe className="inline-block mr-2" />
                         {orgData.website}
                       </a>
                       <p className="text-gray-600 text-sm py-2 mb-2">Contact Person: {orgData.contactPerson}</p>
                       <div className="flex justify-center items-center mt-4">
                         <a href="/transactions">
                           <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 ${isDonated ? 'bg-green-600' : ''}`}>
                             {isDonated ? 'Donated!' : 'Donate'}
                           </button>
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       
))}
</>
);
}

export default DirectDonation;





// {isDonated && (
//     <div className="mt-4 p-4 bg-green-100 rounded-md">
//     <h2 className="text-xl font-semibold text-green-800">Thank you for your donation!</h2>
//     <p className="mt-2">Your donation has been received and will be used to support the organization's efforts.</p>
//     </div>
//     )}