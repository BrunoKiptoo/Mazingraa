import React from 'react';

function DonorNavBar(props) { // Update prop name to "name"
  return (
    <nav className="bg-black text-white py-2">
      <div className="flex justify-between items-center px-4">
        <ul className="flex items-center space-x-4">
          <li className="list-none">
            <a href="/donor-dashboard" className="bg-[#fff5e1] hover:bg-yellow-200 text-[#32594a] font-semibold py-2 px-4 rounded ">
              Home
            </a>
          </li>
          <li className="list-none">
            {/* <Search /> */}
          </li>
          <li className="list-none">
            {/* <Filter /> */}
          </li>
        </ul>
        <div className="p-4">
          <p>Hello, {props.name}! Welcome to your dashboard! Here you can manage your account settings, view your donations, and more.</p> {/* Update prop name to "name" */}
        </div>
      </div>
    </nav>
  );
}

export default DonorNavBar;
