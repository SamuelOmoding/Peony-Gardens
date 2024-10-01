import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import Travel from "../assets/travel.png";
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

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Restaurant</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          The Swahili-themed restaurant comes complete with authentic makuti and Swahili wall finishes. We start your day with a delicious breakfast, whether from the buffet setup or an à la carte service. You’ll be impressed by the variety, from eggs, yogurt, meat, cereals, fresh fruits, and much more.
          <br /><br />
          Our skilled chefs prepare delightful dishes that cater to your taste buds and can adjust dishes to suit your preferences.
          <br /><br />
          Enjoy your meal in our garden restaurant, surrounded by nature’s beauty, fresh air, and the sound of birds chirping as you indulge in mouth-watering meals.
        </p>
      </div>

      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Restaurant Image ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover transition-transform duration-300 hover:scale-105" 
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-12 bg-black py-8">
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

export default Restaurant;
