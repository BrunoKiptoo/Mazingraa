import React from 'react';
import Search from './Search';
import Filter from '../Donor/DonorFilter';

function DonorNavBar() {
  return (
    <nav className="bg-gold text-white py-4">
      <ul className="flex justify-between items-center px-4">
        <li className="list-none">
          <a href="/donor-dashboard" className="text-white no-underline">
            Home
          </a>
        </li>
        <li className="list-none">
          <Search />
        </li>
        <li className="list-none">
          <Filter />
        </li>
      </ul>
    </nav>
  );
}

export default DonorNavBar;
