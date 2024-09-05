import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DiningWining() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Dining & Wining</h1>
        {/* <p className="text-lg mb-2">
        The swahili themed restaurant comes complete with true makuti & swahili wall finishing. We start your day on a good note from either the buffet setup or an ala carte service. Breakfast will definitely impress you; it ranges from eggs, yoghurt, meat, cereals, fresh fruits and much more.
        </p> */}
      </div>

      {/* Dropdown Button */}
      <div 
        className="absolute top-0 left-0 mt-4 ml-4" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="px-4 py-2 text-lg font-medium text-gray-700 bg-white bg-opacity-75 hover:text-gray-800 focus:outline-none rounded"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          Restaurant <span className="ml-1">▼</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-50" role="menu">
            <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
              <Link to="/DiningWining/meetings-conferences" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                Restaurant
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
              <Link to="/DiningWining/weddings-events" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                Peony Bar
              </Link>
            </li>
            </ul>
        )}
      </div>
    </div>
  );
}

export default DiningWining;
