import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Travel from "../assets/travel.png";
import meeting from '../assets/meeting1.jpeg';
import meeting1 from '../assets/meeting2.jpeg';
import meeting2 from '../assets/meet.jpeg';
import meeting3 from '../assets/meeting.jpeg';

function MeetingsConferences() {
  return (
    <div className="relative">
      <img
        src={meeting}
        alt="Meetings and Conference"
        className="w-full h-screen object-cover"
      />

      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[meeting1, meeting2, meeting3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover transition-transform duration-300 hover:scale-105" 
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Meetings & Conference</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          Peony Gardens Conference Facilities give your business an ideal setup for a truly beneficial meeting, conference, or training. Peony Gardens is located in a huge, beautiful hilly compound with natural attractions and equipped with world-class facilities and service.
          <br /><br />
          No matter the size of your meeting, Peony Gardens makes a perfect, custom package for you.
        </p>
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

export default MeetingsConferences;
