import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import archery from '../assets/archery.jpg';
import archery1 from '../assets/Archerry .jpeg';
import ARCHERY2 from '../assets/ARCHERY2.jpg';
import ARCHERY3 from '../assets/ARCHERY3.JPG';
import Archer from '../assets/archery1.jpg';
import Archery4 from '../assets/SET.jpg';
import Travel from "../assets/travel.png";

function Archery() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative">
      <img
        src={Archer}
        alt="Archery"
        className="w-full h-screen object-cover"
      />

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Archery</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          Nothing clears your mind better than shooting an arrow. Whether you are a beginner or an advanced archer, Peony Gardens offers an archery experience that's almost impossible to find elsewhere.
        </p>
      </div>

      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[archery, Archery4, archery1, ARCHERY3, ARCHERY2].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Archery ${index + 1}`}
              className="rounded-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Book Your Ride</h2>
        <p className="text-lg text-black mb-6 leading-relaxed tracking-wide px-4 py-2 bg-gray-100 rounded-lg">
          To book your Archery experience, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
        </p>
        <button
          onClick={handleViewRates}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-orange-900 transition duration-300"
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

export default Archery;
