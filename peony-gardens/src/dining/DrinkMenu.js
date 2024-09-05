import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import DrinkMenu1 from '../assets/DrinkMenu1.png'; // Update with actual paths to your images
import DrinkMenu2 from '../assets/DrinkMenu2.png';
import DrinkMenu3 from '../assets/DrinkMenu3.png';
import DrinkMenu4 from '../assets/DrinkMenu4.png';
import DrinkMenu5 from '../assets/DrinkMenu5.png';
import DrinkMenu6 from '../assets/DrinkMenu6.png';
import DrinkMenuPDF from '../assets/DrinkMenu.pdf'; // Path to your PDF file

function DrinkMenu() {
  return (
    <div className="relative">
      {/* Gallery Section */}
      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Drink Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[DrinkMenu1, DrinkMenu2, DrinkMenu3, DrinkMenu4, DrinkMenu5, DrinkMenu6].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Drink Menu Page ${index + 1}`} 
              className="rounded-lg w-full h-auto object-cover" 
            />
          ))}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
            <img src="pdf-icon.png" alt="PDF Icon" className="w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold">DRINKS MENU</h3>
              <p className="text-sm text-gray-600">1 file(s), 7.82 MB</p>
            </div>
          </div>
          <a href={DrinkMenuPDF} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Download</a>
        </div>
      </div>

      {/* Footer Section */}
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
          <img src={DrinkMenuPDF} alt="Travel Wishlist Logo" className="h-20 w-20" />
        </div>
        <div className="bg-gray-800 text-center text-white py-2">
          <p>© Copyright 2024. Peony Gardens. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkMenu;
