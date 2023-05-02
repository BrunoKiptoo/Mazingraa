// import React, { useState, useEffect } from 'react';


// function DonorManagement() {
//   const [donationData, setDonationData] = useState([]);
//   const [donorName, setDonorName] = useState('');

//   useEffect(() => {
//     // Fetch donation data from server
//     fetch('/donation-data')
//       .then(response => response.json())
//       .then(data => setDonationData(data));

//     // Fetch donor name from server
//     fetch('/donor-name')
//       .then(response => response.json())
//       .then(data => setDonorName(data.name));
//   }, []);

//   const renderTransactionHistory = () => {
//     if (donationData.length === 0) {
//       return <p>No donations found.</p>;
//     }

//     return (
//       <table className="table-auto w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Amount</th>
//             <th className="px-4 py-2">Payment Method</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donationData.map((donation, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">{donation.date}</td>
//               <td className="border px-4 py-2">${donation.amount}</td>
//               <td className="border px-4 py-2">{donation.paymentMethod}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   const renderThankYouMessage = () => {
//     if (donationData.length === 0) {
//       return null;
//     }

//     const latestDonation = donationData[0];
//     const message = `Thank you for your donation of $${latestDonation.amount} made on ${latestDonation.date}.`;

//     return <p className="text-gray-500 mb-4">{message}</p>;
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-8">
//       <h1 className="text-3xl font-bold mb-4">Donor Management</h1>
//       <div className="bg-white shadow rounded-lg p-4 mb-4">
//         <h2 className="text-xl font-bold mb-2">Welcome, {donorName}!</h2>
//         {renderThankYouMessage()}
//         <p className="text-gray-500 mb-2">Here's your transaction history:</p>
//         {renderTransactionHistory()}
//       </div>
//       {/* Display profile form and donation options here */}
//     </div>
//   );
// }

// export default DonorManagement;


import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function DonorManagement() {
  const [donationData, setDonationData] = useState([]);
  const [organizationData, setOrganizationData] = useState([]);

  useEffect(() => {
    // Fetch donation data from server
    fetch('https://mazingira-api.onrender.com/donation-data')
      .then(response => response.json())
      .then(data => setDonationData(data));

    // Fetch organization data from server
    fetch('https://mazingira-api.onrender.com/organization-data')
      .then(response => response.json())
      .then(data => setOrganizationData(data));
  }, []);

  const renderTransactionHistory = () => {
    if (donationData.length === 0) {
      return <p>No donations found.</p>;
    }

    return (
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Donor Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Payment Method</th>
            <th className="px-4 py-2">Organization</th>
          </tr>
        </thead>
        <tbody>
          {donationData.map((donation, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{donation.donorName}</td>
              <td className="border px-4 py-2">{donation.date}</td>
              <td className="border px-4 py-2">${donation.amount}</td>
              <td className="border px-4 py-2">{donation.paymentMethod}</td>
              <td className="border px-4 py-2">{getOrganizationName(donation.organizationId)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getOrganizationName = (id) => {
    const organization = organizationData.find(org => org.id === id);
    return organization ? organization.name : 'Unknown Organization';
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Donor Management</h1>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Transaction History</h2>
        {renderTransactionHistory()}
      </div>
    </div>
  );
}

export default DonorManagement;

