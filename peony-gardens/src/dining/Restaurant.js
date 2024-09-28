import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Travel from "../assets/travel.jpeg";
import Team from "../assets/MAIN.JPG";
import Team1 from '../assets/RESTO.JPG';
import Team2 from '../assets/RESTO2.JPG';
import Team3 from '../assets/RESTO1.JPG';

function Restaurant() {
  return (
    <div className="relative">
      <img
        src={Team}
        alt="Restaurant"
        className="w-full h-screen object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-semibold text-center px-6 ">
        <h1 className="text-4xl font-bold mb-4">Restaurant</h1>
        <p className="text-lg mb-2 bg-gray-600 bg-opacity-55">
        The swahili themed restaurant comes complete with true makuti & swahili wall finishing. We start your day on a good note from either the buffet setup or an ala carte service. Breakfast will definitely impress you; it ranges from eggs, yoghurt, meat, cereals, fresh fruits and much more.
        <br />
        <br />
        Our well skilled chefs prepare delightful culinary that will match your taste buds and is flexible to transform dishes to suit your preferences.
        <br />
        <br />
        <p className="text-lg">
        With the beautiful gardens and birds chirping just outside the restaurant, we are never suprised when you’ll prefer to dine from the garden restaurant while enjoying the soothing breeze of fresh air and breathtaking sights as you get served with mouth-watering meals.        </p>
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

export default Restaurant;
