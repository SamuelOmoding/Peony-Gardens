import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Travel from "../assets/travel.jpeg";
import Team from "../assets/Team.jpeg";
import Team1 from '../assets/Team1.jpeg';
import Team2 from '../assets/Team2.jpeg';
import Team3 from '../assets/Team3.jpeg';

function PeonyBar() {
  return (
    <div className="relative">
      <img
        src={Team}
        alt="Peony Bar"
        className="w-full h-screen object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-center px-6 ">
        <h1 className="text-4xl font-bold mb-4">Peony Bar</h1>
        <p className="text-lg mb-2 bg-gray-900 bg-opacity-55">
        Our bar is thoughtfully placed on the first floor to make sure you don’t miss the sunset as you take your sips from one of our premium liquors and local drinks. Don’t also miss to try out our signature cocktails creatively mixed to give you the best feeling ever from our highly skilled mixologists.        <br />
        </p>
      </div>

      <div className="bg-white p-2 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-12 bg-gray-50 py-8">
        <div className="flex justify-center items-center space-x-4 mb-2">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-3xl text-gray-800 hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-gray-800 hover:text-black" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-gray-800 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-500" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className="text-3xl text-gray-800 hover:text-green-600" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">#PeonyGardensHotel</p>
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

export default PeonyBar;
