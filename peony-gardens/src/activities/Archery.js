import React from 'react';
import { useNavigate } from 'react-router-dom';
import archery from '../assets/archery.jpg';
import archery1 from '../assets/archery1.jpg';
import ARCHERY2 from '../assets/ARCHERY2.jpg';
import ARCHERY3 from '../assets/ARCHERY3.JPG';
import Archer from '../assets/archery1.jpg';
import Travel from "../assets/travel.png";

function Archery() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative p-5">
      <div
        style={{ 
          backgroundImage: `url(${Archer})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          height: '100vh', 
          width: '100%' 
        }}
        className="p-6"
      >
        <div className="bg-gray-900 bg-opacity-40 rounded p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-4">Archery</h1>
          <p className="text-lg text-white mb-8">

          Nothing clears your mind better than shooting an arrow. Whether you are a beginner or an advanced archer the last village gives you an experience that’s almost impossible to find elsewhere.          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-6 justify-center hover:">
          <div className="w-1/2 max-w-sm">
            <img
              src={archery}
              alt="Archery"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={archery1}
              alt="Archery"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={ARCHERY3}
              alt="Archery"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={ARCHERY2}
              alt="Archery"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        
        </div>
      </div>
<div>
      <h2 className="text-2xl font-bold text-black mb-4 text-center">Book Your Ride</h2>
      <p className="text-lg text-black mb-6 text-center">
        To book your Archery experience, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleViewRates}
          className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-900 transition duration-300"
        >
          View / Download Rates
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


export default Archery