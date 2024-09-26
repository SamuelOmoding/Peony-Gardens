import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ActivitiesExperience() {    
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
      const handleMouseEnter = () => {
        setIsDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setIsDropdownOpen(false);
      };
    
      return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-gray-800 focus:outline-none"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            ACTIVITIES & EXPERIENCE <span className="ml-1">▼</span>
          </button>
    
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-50" role="menu">
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/quad-bikes" className="font-thin block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                 QUAD BIKES
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/swimming-pool" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  SWIMMING POOL
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/archery" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  ARCHERY
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/zip-lining-high-ropes" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  ZIP LINING & HIGH ROPES
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/indoor-activities" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  INDOOR ACTIVITIES
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/kids-playground" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  KIDS PLAYGROUND
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
                <Link to="/experience-activities/activities-rate-card" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
                  ACTIVITIES RATE CARD
                </Link>
              </li>
            </ul>
          )}
        </div>
      );
    }
    


export default ActivitiesExperience