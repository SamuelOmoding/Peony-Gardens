import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuadBike1 from '../assets/QB.jpeg';
import QuadBike2 from '../assets/QB2.jpeg';
import QuadBike3 from '../assets/QB1.jpeg';
import QuadBike4 from '../assets/QB4.jpeg';
import QuadBike5 from '../assets/QB5.jpeg';
import QuadBike6 from '../assets/QB6.jpeg';
import Buggy from '../assets/BUGGY1.jpeg';
import Travel from "../assets/travel.png";

function QuadBikes() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative p-5">
      <div
        style={{ 
          backgroundImage: `url(${Buggy})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          height: '100vh', 
          width: '100%' 
        }}
        className="p-6"
      >
        <h1 className="text-4xl font-bold text-orange-700 text-center mb-4">Quad Bikes</h1>
        <div className="bg-gray-900 bg-opacity-40 rounded p-8">
          <p className="text-lg text-white mb-8">
            Experience the adrenaline-inducing thrill-ride of a quad bike ride at The Last Village's expansive grounds. Your experience includes the use of a perfectly-sized 4x4 quad bike with a helmet for safety and goggles, a rugged course, and will be perfect for anyone from first-time bikers to the most audacious of adventure seekers.
          </p>
          <p className="text-lg text-white mb-6">
            For kids who love adventure and a bit of challenge, we have child-friendly mini quad bikes that will get your kids’ adrenaline racing. Our patient and well-experienced instructors will train them before they embark on experiencing the joy of riding off-road. One more thing, don't forget to take a picture of them riding and taking up the challenge. This is a perfect memory of them when they grow up.
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-6 justify-center hover:">
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike6}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike2}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike3}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike4}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike5}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-1/2 max-w-sm">
            <img
              src={QuadBike1}
              alt="Quad Bike"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>
<div>
      <h2 className="text-2xl font-bold text-black mb-4 text-center">Book Your Ride</h2>
      <p className="text-lg text-black mb-6 text-center">
        To book your Quad Bike experience, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
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

export default QuadBikes;
