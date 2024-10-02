import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Pool1 from '../assets/Pool.jpeg';
import Pool2 from '../assets/Pool2.jpeg';
import Pool3 from '../assets/pool2.jpg';
import Pool4 from '../assets/Pool4.jpeg';
import Pool5 from '../assets/Pool5.jpeg';
import Pool6 from '../assets/Pool6.jpeg';
import Pool7 from '../assets/pool.jpg';
import Pool8 from '../assets/pool1.jpg';
import Pool9 from '../assets/Pool7.jpg';
import Swim from '../assets/swimming.jpg';
import Travel from "../assets/travel.png";

const SwimmingPool = () => {
  const navigate = useNavigate();

  const BUTTON_BG_COLOR = 'bg-green-500';
  const BUTTON_HOVER_COLOR = 'bg-orange-900';
  // const TEXT_COLOR = 'text-black';
  // const FOOTER_BG_COLOR = 'bg-gray-800';
  const FOOTER_TEXT_COLOR = 'text-white';

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative">
      <img
        src={Swim}
        alt="Swimming Pool"
        className="w-full h-screen object-cover"
      />

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Swimming Pools</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          Perfect for leisure, keeping fit and having a playful day with your kids, friends, and families. Everyone loves a dip on a hot day to cool off the mid-day heat while getting entertained.
          <br /><br />
          If you prefer to relax on the poolside without getting wet, we have comfortable poolside beds for you to lounge around as you enjoy the beautiful scenery surrounding the gardens.
        </p>
      </div>

      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[Pool6, Pool2, Pool3, Pool4, Pool5, Pool1, Pool7, Pool8, Pool9].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Swimming Pool ${index + 1}`}
              className="rounded-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Let's Go Swimming</h2>
        <p className="text-lg text-black mb-6 leading-relaxed tracking-wide px-4 py-2 bg-gray-100 rounded-lg">
          Perfect for leisure, keeping fit, and having a playful day with your kids, friends, and families. Everyone loves a dip on a hot day to cool off the mid-day heat while getting entertained.
        </p>
        <button
          onClick={handleViewRates}
          className={`mt-6 ${BUTTON_BG_COLOR} ${FOOTER_TEXT_COLOR} py-2 px-4 rounded hover:${BUTTON_HOVER_COLOR} transition duration-300`}
        >
          View Rates
        </button>
      </div>

      <div className="relative z-20 mt-12 bg-gray-800 py-8">
        <div className="flex justify-center items-center space-x-4 mb-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-3xl text-gray-300 hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-gray-300 hover:text-black" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-gray-300 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-300 hover:text-blue-500" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className="text-3xl text-gray-300 hover:text-green-600" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-300">#PeonyGardensHotel</p>
        </div>
        <div className="flex justify-center my-4">
          <img src={Travel} alt="Travel Wishlist Logo" className="h-20 w-20" />
        </div>
        <div className="bg-gray-800 text-center text-white py-2">
          <p>© Copyright 2024. Peony Gardens. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default SwimmingPool;
