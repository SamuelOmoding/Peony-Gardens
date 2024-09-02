import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home', path: '/' },
    { id: 2, link: 'accommodation', path: '/accommodation' },
    { id: 3, link: 'meetings & events', path: '/meetings-events' },
    { id: 4, link: 'dining & wining', path: '/dining-wining' },
    { id: 5, link: 'experience & activities', path: '/experience-activities' },
    { id: 6, link: 'deals & offers', path: '/deals-offers' },
    { id: 7, link: 'about us', path: '/about' },
    { id: 8, link: 'contact', path: '/contact' },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 z-50 shadow-md'>
      {/* Logo Section */}
      <div>
        <img src={Logo} alt="logo" className="ml-2 h-12 w-auto" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link, path }) => (
          <li key={id} className="text-lg font-medium text-gray-300 hover:text-white hover:scale-105 transition duration-200 ease-in-out">
            <NavLink
              to={path}
              className={({ isActive }) => isActive ? "text-white" : "text-gray-300"}
              end
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 space-y-8">
          {links.map(({ id, link, path }) => (
            <li key={id} className="text-2xl text-gray-300 hover:text-white transition duration-200 ease-in-out">
              <Link to={path} onClick={() => setNav(false)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
