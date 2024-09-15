import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Travel from "../assets/travel.png";
import Wed1 from '../assets/wed1.jpeg';
import Wed2 from '../assets/wed2.jpeg';
import Wed3 from '../assets/wed3.jpeg';
import Wed4 from '../assets/wed4.jpeg';

function WeddingsEvents() {
  return (
    <div className="relative">
      {/* Main Image */}
      <img
        src={Wed4}
        alt="Weddings & Events"
        className="w-full h-screen object-cover"
      />

      {/* Wedding & Event Images Grid */}
      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[Wed1, Wed2, Wed3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Wedding Event ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover transition-transform duration-300 hover:scale-105" 
            />
          ))}
        </div>
      </div>

      {/* Text Block */}
      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Weddings & Events</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          Peony Gardens is the perfect venue for weddings and events, offering world-class facilities, beautiful natural surroundings, and exceptional service to make your event unforgettable.
          <br /><br />
          No matter the size of your event, Peony Gardens creates a custom package for you.
        </p>
      </div>

      <div className="relative z-20 mt-12 bg-black py-8">
  <div className="flex justify-center items-center space-x-4 mb-2">
    {/* Social Media Icons */}
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

export default WeddingsEvents;
