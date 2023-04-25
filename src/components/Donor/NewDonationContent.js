

    // const handleDonate = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:5000/organizations/${orgData.id}`, { method: 'POST' });
    //     if (response.ok) {
    //       setIsDonated(true);
    //       setOrgData(null);
    //     } else {
    //       throw new Error('Failed to donate');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     alert('Failed to donate. Please try again later.');
    //   }
    // };
    







import React, { useState, useEffect } from 'react';


function NewDonationContent({ organization, onDonate, onAddToDonationList }) {
  const [isDonated, setIsDonated] = useState(false);
  const [orgData, setOrgData] = useState(organization);
  const [addedToDonationList, setAddedToDonationList] = useState(false);

  const handleDonate = async () => {
    try {
      const response = await fetch('/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ organizationId: orgData?.id }),
      });
      if (response.ok) {
        setIsDonated(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error donating:', error);
      // Handle network error or error response here
    }
  };
  
  const handleAddToDonationList = async () => {
    try {
      const response = await fetch('/addtodonationlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ organizationId: orgData?.id }),
      });
      if (response.ok) {
        setAddedToDonationList(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error adding to donation list:', error);
      // Handle network error or error response here
    }
  };
  

  return (
    <>
      <div className="bg-gray-100 shadow-md rounded-md p-4">
        <div className="flex-1 mr-6  mt-6">
          <div className="">
            <div className="flex">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 flex-grow ml-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="object-cover object-center h-24 w-24" src={orgData.image} alt="Organization Image" />
                  </div>
                  <div className="flex-grow p-6">
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">{orgData.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{orgData.description}</p>
                    <p className="text-gray-600 text-sm mb-2">Email: {orgData.email}</p>
                    <a href={orgData.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mb-2 hover:underline">
                      Website: {orgData.website}
                    </a>
                    <p className="text-gray-600 text-sm mb-2">Contact Person: {orgData.contactPerson}</p>
                    {/* Wrap the Donate button inside an anchor tag */}
                    <a href="/transactions">
                      <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${isDonated ? 'bg-green-600' : 'bg-blue-500'} mr-2`}>
                        {isDonated ? 'Donated!' : 'Donate'}
                      </button>
                    </a>
                    <button className={`bg-gray-400 hover:bg-gray-600 text-gray-800 text-white font-semibold py-2 px-4 rounded mt-2 ${addedToDonationList ? 'bg-green-600' : ''}`} onClick={handleAddToDonationList}>
                      {addedToDonationList ? 'Added to Donation List' : 'Donate Later'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewDonationContent;






