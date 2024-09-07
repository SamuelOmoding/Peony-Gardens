import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MeetingsEvents() {
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
        <h1 className="text-4xl font-bold mb-4">Meetings & Conferences</h1>
        <p className="text-lg mb-2">
          The Last Village Conference Facilities give your business an ideal setup for a truly beneficial meeting, conference, or training. The Last Village is located in a huge, beautiful hilly compound with natural attractions and equipped with world-class facilities and service.
        </p>
        <p className="text-lg">
          No matter the size of your meeting, The Last Village will make a perfect, custom package for you.
        </p>
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
          Meetings & Events <span className="ml-1">▼</span>
        </button>

        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-50" role="menu">
            <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
              <Link to="/MeetingsEvents/meetings-conferences" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                MEETINGS & CONFERENCES
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
              <Link to="/MeetingsEvents/weddings-events" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                WEDDINGS & EVENTS
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
              <Link to="/MeetingsEvents/team-building" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                TEAM BUILDING
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default MeetingsEvents;


