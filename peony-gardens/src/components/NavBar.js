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
    <div className='flex justify-between items-center w-full h-16 px-4 text-white bg-gray-800 bg-opacity-90 fixed top-0 z-50 shadow-md'>
      <div>
        <img src={Logo} alt="logo" className="ml-4 h-10 w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-yellow-500"} end>
            HOME
          </NavLink>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleDropdown('accommodation')}
            className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300 focus:outline-none"
          >
            ACCOMMODATION <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.accommodation && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-md rounded-md w-44">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/accommodation/double-room" onClick={closeAllDropdowns}>
                  DOUBLE ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/accommodation/twin-triple-room" onClick={closeAllDropdowns}>
                  TWIN / TRIPLE ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/accommodation/family-room" onClick={closeAllDropdowns}>
                  FAMILY ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/accommodation/honeymoon-room" onClick={closeAllDropdowns}>
                  HONEYMOON ROOM
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/accommodation/camping-experience" onClick={closeAllDropdowns}>
                  CAMPING EXPERIENCE
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* Other Dropdowns */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown('meetings')}
            className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300 focus:outline-none"
          >
            MEETINGS & EVENTS <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen.meetings && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-md rounded-md w-44">
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/meetings-events/meetings-conferences" onClick={closeAllDropdowns}>
                  MEETINGS & CONFERENCES
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/meetings-events/weddings-events" onClick={closeAllDropdowns}>
                  WEDDINGS & EVENTS
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-sm">
                <NavLink to="/meetings-events/team-building" onClick={closeAllDropdowns}>
                  TEAM BUILDING
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300">
          <NavLink to="/deals-offers" className={({ isActive }) => isActive ? "text-white" : "text-yellow-500"} end>
            DEALS & OFFERS
          </NavLink>
        </li>

        <li className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300">
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-yellow-500"} end>
            ABOUT US
          </NavLink>
        </li>

        <li className="text-sm font-medium text-yellow-500 hover:text-white transition ease-in-out duration-300">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-yellow-500"} end>
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-yellow-500 md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 space-y-6 z-40">
          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
            <NavLink to="/" onClick={() => setNav(false)}>
              HOME
            </NavLink>
          </li>
          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
            <button onClick={() => toggleDropdown('accommodation')}>
              ACCOMMODATION <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.accommodation && (
              <ul className="flex flex-col items-center space-y-2 mt-4">
                <li>
                  <NavLink to="/accommodation/double-room" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-500 hover:text-white">
                    DOUBLE ROOM
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
            <button onClick={() => toggleDropdown('meetings')}>
              MEETINGS & EVENTS <span className="ml-1">▼</span>
            </button>
            {isDropdownOpen.meetings && (
              <ul className="flex flex-col items-center space-y-2 mt-4">
                <li>
                  <NavLink to="/meetings-events/meetings-conferences" onClick={() => { closeAllDropdowns(); setNav(false); }} className="text-yellow-500 hover:text-white">
                    MEETINGS & CONFERENCES
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
            <NavLink to="/deals-offers" onClick={() => setNav(false)}>
              DEALS & OFFERS
            </NavLink>
          </li>

          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
            <NavLink to="/about" onClick={() => setNav(false)}>
              ABOUT US
            </NavLink>
          </li>

          <li className="text-xl text-yellow-500 hover:text-white transition ease-in-out duration-300">
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
