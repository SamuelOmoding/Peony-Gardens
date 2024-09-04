import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Accommodation() {
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
        ACCOMMODATION <span className="ml-1">▼</span>
      </button>

      {isDropdownOpen && (
        <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-64 z-50" role="menu">
          <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
            <Link to="/accommodation/double-room" className="font-thin block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
              DOUBLE ROOM
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
            <Link to="/accommodation/twin-triple-room" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
              TWIN / TRIPLE ROOM
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
            <Link to="/accommodation/family-room" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
              FAMILY ROOM
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
            <Link to="/accommodation/honeymoon-room" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
              HONEYMOON ROOM
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100" role="menuitem">
            <Link to="/accommodation/camping-experience" className="block text-gray-900 hover:text-gray-800" onClick={() => setIsDropdownOpen(false)}>
              CAMPING EXPERIENCE
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Accommodation;




// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// function Accommodation() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={toggleDropdown}
//         className="px-4 py-2 text-lg font-medium text-black hover:text-gray-800 focus:outline-none"
//         aria-haspopup="true"
//         aria-expanded={isDropdownOpen}
//       >
//         Accommodation
//       </button>
      
//       {isDropdownOpen && (
//         <ul className="absolute left-0 mt-2 bg-white text-orange-700 shadow-lg rounded-md w-64" role="menu">
//           <li className="px-4 py-3 hover:bg-gray-900" role="menuitem">
//             <Link to="/accommodation/double-room">DOUBLE ROOM</Link>
//           </li>
//           <li className="px-4 py-3 hover:bg-gray-900" role="menuitem">
//             <Link to="/accommodation/twin-triple-room">TWIN / TRIPLE ROOM</Link>
//           </li>
//           <li className="px-4 py-3 hover:bg-gray-900" role="menuitem">
//             <Link to="/accommodation/family-room">FAMILY ROOM</Link>
//           </li>
//           <li className="px-4 py-3 hover:bg-gray-900" role="menuitem">
//             <Link to="/accommodation/honeymoon-room">HONEYMOON ROOM</Link>
//           </li>
//           <li className="px-4 py-3 hover:bg-gray-900" role="menuitem">
//             <Link to="/accommodation/camping-experience">CAMPING EXPERIENCE</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Accommodation;
