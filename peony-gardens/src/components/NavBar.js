import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    accommodation: false,
    meetings: false,
    dining: false,
    activities: false,
  });

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const closeAllDropdowns = () => {
    setIsDropdownOpen({
      accommodation: false,
      meetings: false,
      dining: false,
      activities: false,
    });
  };

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gray-700 bg-opacity-85 fixed top-1 z-50 shadow-md'>
      <div>
        <img src={Logo} alt="logo" className="ml-4 h-12 w-auto" />
      </div>

      <ul className="hidden md:flex space-x-6 items-center">
        <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
            HOME
          </NavLink>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleDropdown('accommodation')}
            className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
          >
            ACCOMMODATION <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.accommodation && (
            <ul className="absolute left-0 mt-4 bg-white text-gray-900 shadow-lg rounded-md w-48">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/accommodation/double-room" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  DOUBLE ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/accommodation/twin-triple-room" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  TWIN / TRIPLE ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/accommodation/family-room" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  FAMILY ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/accommodation/honeymoon-room" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  HONEYMOON ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/accommodation/camping-experience" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  CAMPING EXPERIENCE
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Meetings & Events dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('meetings')}
            className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
          >
            MEETINGS & EVENTS <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.meetings && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-48">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/meetings-events/meetings-conferences" className="text-smblock text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  MEETINGS & CONFERENCES
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/meetings-events/weddings-events" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  WEDDINGS & EVENTS
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/meetings-events/team-building" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  TEAM BUILDING
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Dining & Wining dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('dining')}
            className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
          >
            DINING & WINING <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.dining && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-48">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/dining-wining/restaurant" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  RESTAURANT
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/dining-wining/peony-bar" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  PEONY BAR
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Activities & Experience dropdown */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('activities')}
            className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
          >
            ACTIVITIES & EXPERIENCE <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.activities && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-56">
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/quad-bikes" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  QUAD BIKES
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/swimming-pool" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  SWIMMING POOL
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/archery" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  ARCHERY
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/zip-lining-high-ropes" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  ZIP LINING & HIGH ROPES
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/indoor-activities" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  INDOOR ACTIVITIES
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/kids-playground" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  KIDS PLAYGROUND
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/activities-experience/activities-rate-card" className="text-sm block text-gray-900 hover:text-gray-800" onClick={closeAllDropdowns}>
                  ACTIVITIES RATE CARD
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
          <NavLink to="/deals-offers" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
            DEALS & OFFERS
          </NavLink>
        </li>

        <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
            ABOUT US
          </NavLink>
        </li>

        <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-yellow-600 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 space-y-8 z-40">
          {/* Links for mobile menu */}
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <NavLink to="/" onClick={() => setNav(false)}>
              HOME
            </NavLink>
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <button onClick={() => toggleDropdown('accommodation')}>
              ACCOMMODATION <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.accommodation && (
              <ul className="flex flex-col items-center space-y-4 mt-4">
                <li>
                  <NavLink to="/accommodation/double-room" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-600 hover:text-white">
                    DOUBLE ROOM
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <button onClick={() => toggleDropdown('meetings')}>
              MEETINGS & EVENTS <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.meetings && (
              <ul className="flex flex-col items-center space-y-4 mt-4">
                <li>
                  <NavLink to="/meetings-events/meetings-conferences" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-600 hover:text-white">
                    MEETINGS & CONFERENCES
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <button onClick={() => toggleDropdown('dining')}>
              DINING & WINING <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.dining && (
              <ul className="flex flex-col items-center space-y-4 mt-4">
                <li>
                  <NavLink to="/dining-wining/restaurant" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-600 hover:text-white">
                    RESTAURANT
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <button onClick={() => toggleDropdown('activities')}>
              ACTIVITIES & EXPERIENCE <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.activities && (
              <ul className="flex flex-col items-center space-y-4 mt-4">
                <li>
                  <NavLink to="/activities-experience/quad-bikes" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-600 hover:text-white">
                    QUAD BIKES
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <NavLink to="/deals-offers" onClick={() => setNav(false)}>
              DEALS & OFFERS
            </NavLink>
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <NavLink to="/about" onClick={() => setNav(false)}>
              ABOUT US
            </NavLink>
          </li>
          <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
            <NavLink to="/contact" onClick={() => setNav(false)}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;



// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import Logo from '../assets/Logo.png';

// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     accommodation: false,
//     meetings: false,
//     dining: false,
//     activities: false,
//   });

//   const handleMouseEnter = (dropdown) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [dropdown]: true,
//     }));
//   };

//   const handleMouseLeave = (dropdown) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [dropdown]: false,
//     }));
//   };

//   return (
//     <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gray-700 bg-opacity-85 fixed top-1 z-50 shadow-md'>
//       <div>
//         <img src={Logo} alt="logo" className="ml-4 h-12 w-auto" />
//       </div>

//       <ul className="hidden md:flex space-x-6 items-center">
//         {/* Home link */}
//         <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
//           <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
//             HOME
//           </NavLink>
//         </li>

//         {/* Accommodation dropdown */}
//         <li 
//           className="relative"
//           onMouseEnter={() => handleMouseEnter('accommodation')}
//           onMouseLeave={() => handleMouseLeave('accommodation')}
//         >
//           <button
//             className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
//           >
//             ACCOMMODATION <span className="ml-1">▼</span>
//           </button>
//           {isDropdownOpen.accommodation && (
//             <ul className="absolute left-0 mt-2 bg-yellow-700 text-gray-900 shadow-lg rounded-md w-48"
//                 onMouseEnter={() => handleMouseEnter('accommodation')}
//                 onMouseLeave={() => handleMouseLeave('accommodation')}
//             >
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/accommodation/double-room" className="block text-gray-900 hover:text-gray-800">
//                   DOUBLE ROOM
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/accommodation/twin-triple-room" className="block text-gray-900 hover:text-gray-800">
//                   TWIN / TRIPLE ROOM
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/accommodation/family-room" className="block text-gray-900 hover:text-gray-800">
//                   FAMILY ROOM
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/accommodation/honeymoon-room" className="block text-gray-900 hover:text-gray-800">
//                   HONEYMOON ROOM
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/accommodation/camping-experience" className="block text-gray-900 hover:text-gray-800">
//                   CAMPING EXPERIENCE
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Meetings & Events dropdown */}
//         <li 
//           className="relative"
//           onMouseEnter={() => handleMouseEnter('meetings')}
//           onMouseLeave={() => handleMouseLeave('meetings')}
//         >
//           <button
//             className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
//           >
//             MEETINGS & EVENTS <span className="ml-1">▼</span>
//           </button>
//           {isDropdownOpen.meetings && (
//             <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-48"
//                 onMouseEnter={() => handleMouseEnter('meetings')}
//                 onMouseLeave={() => handleMouseLeave('meetings')}
//             >
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/meetings-events/meetings-conferences" className="block text-gray-900 hover:text-gray-800">
//                   MEETINGS & CONFERENCES
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/meetings-events/weddings-events" className="block text-gray-900 hover:text-gray-800">
//                   WEDDINGS & EVENTS
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/meetings-events/team-building" className="block text-gray-900 hover:text-gray-800">
//                   TEAM BUILDING
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Dining & Wining dropdown */}
//         <li 
//           className="relative"
//           onMouseEnter={() => handleMouseEnter('dining')}
//           onMouseLeave={() => handleMouseLeave('dining')}
//         >
//           <button
//             className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
//           >
//             DINING & WINING <span className="ml-1">▼</span>
//           </button>
//           {isDropdownOpen.dining && (
//             <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-48"
//                 onMouseEnter={() => handleMouseEnter('dining')}
//                 onMouseLeave={() => handleMouseLeave('dining')}
//             >
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/dining-wining/restaurant" className="block text-gray-900 hover:text-gray-800">
//                   RESTAURANT
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/dining-wining/peony-bar" className="block text-gray-900 hover:text-gray-800">
//                   PEONY BAR
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         {/* Activities & Experience dropdown */}
//         <li 
//           className="relative"
//           onMouseEnter={() => handleMouseEnter('activities')}
//           onMouseLeave={() => handleMouseLeave('activities')}
//         >
//           <button
//             className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out focus:outline-none"
//           >
//             ACTIVITIES & EXPERIENCE <span className="ml-1">▼</span>
//           </button>
//           {isDropdownOpen.activities && (
//             <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-lg rounded-md w-56"
//                 onMouseEnter={() => handleMouseEnter('activities')}
//                 onMouseLeave={() => handleMouseLeave('activities')}
//             >
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/quad-bikes" className="block text-gray-900 hover:text-gray-800">
//                   QUAD BIKES
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/swimming-pool" className="block text-gray-900 hover:text-gray-800">
//                   SWIMMING POOL
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/archery" className="block text-gray-900 hover:text-gray-800">
//                   ARCHERY
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/zip-lining-high-ropes" className="block text-gray-900 hover:text-gray-800">
//                   ZIP LINING & HIGH ROPES
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/indoor-activities" className="block text-gray-900 hover:text-gray-800">
//                   INDOOR ACTIVITIES
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/kids-playground" className="block text-gray-900 hover:text-gray-800">
//                   KIDS PLAYGROUND
//                 </NavLink>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100">
//                 <NavLink to="/activities-experience/activities-rate-card" className="block text-gray-900 hover:text-gray-800">
//                   ACTIVITIES RATE CARD
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
//           <NavLink to="/deals-offers" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
//             DEALS & OFFERS
//           </NavLink>
//         </li>

//         <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
//           <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
//             ABOUT US
//           </NavLink>
//         </li>

//         <li className="text-md font-small text-yellow-600 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
//           <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-yellow-600"} end>
//             CONTACT
//           </NavLink>
//         </li>
//       </ul>

//       {/* Mobile Menu Button */}
//       <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-yellow-600 md:hidden">
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {/* Mobile Menu */}
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 space-y-8 z-40">
//           {/* Links for mobile menu */}
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <NavLink to="/" onClick={() => setNav(false)}>
//               HOME
//             </NavLink>
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <button onClick={() => handleMouseEnter('accommodation')}>
//               ACCOMMODATION <span className="ml-1">▼</span>
//             </button>
//             {isDropdownOpen.accommodation && (
//               <ul className="flex flex-col items-center space-y-4 mt-4"
//                   onMouseEnter={() => handleMouseEnter('accommodation')}
//                   onMouseLeave={() => handleMouseLeave('accommodation')}
//               >
//                 <li>
//                   <NavLink to="/accommodation/double-room" onClick={() => { handleMouseLeave('accommodation'); setNav(false); }} className="text-yellow-600 hover:text-white">
//                     DOUBLE ROOM
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <button onClick={() => handleMouseEnter('meetings')}>
//               MEETINGS & EVENTS <span className="ml-1">▼</span>
//             </button>
//             {isDropdownOpen.meetings && (
//               <ul className="flex flex-col items-center space-y-4 mt-4"
//                   onMouseEnter={() => handleMouseEnter('meetings')}
//                   onMouseLeave={() => handleMouseLeave('meetings')}
//               >
//                 <li>
//                   <NavLink to="/meetings-events/meetings-conferences" onClick={() => { handleMouseLeave('meetings'); setNav(false); }} className="text-yellow-600 hover:text-white">
//                     MEETINGS & CONFERENCES
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <button onClick={() => handleMouseEnter('dining')}>
//               DINING & WINING <span className="ml-1">▼</span>
//             </button>
//             {isDropdownOpen.dining && (
//               <ul className="flex flex-col items-center space-y-4 mt-4"
//                   onMouseEnter={() => handleMouseEnter('dining')}
//                   onMouseLeave={() => handleMouseLeave('dining')}
//               >
//                 <li>
//                   <NavLink to="/dining-wining/restaurant" onClick={() => { handleMouseLeave('dining'); setNav(false); }} className="text-yellow-600 hover:text-white">
//                     RESTAURANT
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <button onClick={() => handleMouseEnter('activities')}>
//               ACTIVITIES & EXPERIENCE <span className="ml-1">▼</span>
//             </button>
//             {isDropdownOpen.activities && (
//               <ul className="flex flex-col items-center space-y-4 mt-4"
//                   onMouseEnter={() => handleMouseEnter('activities')}
//                   onMouseLeave={() => handleMouseLeave('activities')}
//               >
//                 <li>
//                   <NavLink to="/activities-experience/quad-bikes" onClick={() => { handleMouseLeave('activities'); setNav(false); }} className="text-yellow-600 hover:text-white">
//                     QUAD BIKES
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <NavLink to="/deals-offers" onClick={() => setNav(false)}>
//               DEALS & OFFERS
//             </NavLink>
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <NavLink to="/about" onClick={() => setNav(false)}>
//               ABOUT US
//             </NavLink>
//           </li>
//           <li className="text-2xl text-yellow-600 hover:text-white transition duration-200 ease-in-out">
//             <NavLink to="/contact" onClick={() => setNav(false)}>
//               CONTACT
//             </NavLink>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default NavBar;


