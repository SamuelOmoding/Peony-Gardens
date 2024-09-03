import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Accommodation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 text-lg font-medium text-black hover:text-gray-800 focus:outline-none"
      >
        Accommodation
      </button>
      
      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 bg-blue text-black shadow-lg rounded-md w-64">
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/accommodation/double-room">DOUBLE ROOM</Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/accommodation/twin-triple-room">TWIN / TRIPLE ROOM</Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/accommodation/family-room">FAMILY ROOM</Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/accommodation/honeymoon-room">HONEYMOON ROOM</Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100">
            <Link to="/accommodation/camping-experience">CAMPING EXPERIENCE</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Accommodation;
