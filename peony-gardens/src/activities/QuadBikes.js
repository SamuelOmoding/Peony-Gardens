import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import QuadBike1 from '../assets/QB.jpeg';
import QuadBike2 from '../assets/QB2.jpeg';
import QuadBike3 from '../assets/QB1.jpeg';
import QuadBike4 from '../assets/QB4.jpeg';
import QuadBike5 from '../assets/QB5.jpeg';
import QuadBike6 from '../assets/QB6.jpeg';
import QuadBike7 from '../assets/buggy.jpg';
import QuadBike8 from '../assets/Quds.jpg';
import QuadBike9 from '../assets/quads.jpg';

import Buggy from '../assets/BUGGY1.jpeg';
import Travel from "../assets/travel.png";

function QuadBikes() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative">
      <img
        src={Buggy}
        alt="Quad Bikes"
        className="w-full h-screen object-cover"
      />

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Quad Bikes</h1>
        <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          Experience the adrenaline-inducing thrill of a quad bike ride at The Last Village's expansive grounds. Your experience includes the use of a perfectly-sized 4x4 quad bike, with safety equipment provided. It’s ideal for both beginners and adventure seekers alike.
          <br /><br />
          For kids, we have mini quad bikes, with experienced instructors to guide them before they embark on the adventure. It’s a perfect way to create lasting memories.
        </p>
      </div>

      <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[QuadBike6, QuadBike2, QuadBike8, QuadBike4, QuadBike5, QuadBike1, QuadBike7, QuadBike3, QuadBike9].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Quad Bike ${index + 1}`} 
              className="rounded-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105" 
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Book Your Ride</h2>
        <p className="text-lg text-black mb-6 leading-relaxed tracking-wide px-4 py-2 bg-gray-100 rounded-lg">
          To book your Quad Bike experience, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
        </p>
        <button
          onClick={handleViewRates}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-orange-900 transition duration-300"
        >
          View Rates
        </button>
      </div>

      <div className="text-center mb-4">
        <p className="text-lg font-semibold">#PeonyGardensHotel</p>
      </div>
      <div className="flex justify-center">
        <img
          src={Travel}
          alt="Travel Wishlist Logo"
          className="h-20 w-20"
        />
      </div>
      <div className="bg-gray-800 text-center text-white py-2 w-full">
        <p>© Copyright 2024. Peony Gardens. All rights reserved.</p>
      </div>
    </div>
  );
}

export default QuadBikes;
