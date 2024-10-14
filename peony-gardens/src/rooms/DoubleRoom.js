import React from 'react';
import { useNavigate } from 'react-router-dom';
import Double from '../assets/DBL.jpeg';
import Double1 from '../assets/double1.jpeg';
import Double2 from '../assets/double7.jpeg';
import Double3 from '../assets/double3.jpeg';
import Double4 from '../assets/double4.jpeg';
import Double5 from '../assets/double5.jpeg';

function DoubleRoom() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Double Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Double Room at Peony Gardens Hotel is designed to offer a comfortable and relaxing stay. This room features a double bed, perfect for couples or single travelers looking for extra space.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 justify-center">
        <div className="max-w-full">
          <img
            src={Double3}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-full">
          <img
            src={Double2}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-full">
          <img
            src={Double1}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-full">
          <img
            src={Double4}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-full">
          <img
            src={Double5}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="max-w-full">
          <img
            src={Double}
            alt="Double Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Room Features</h2>
      <ul className="grid grid-cols-3 gap-4 text-lg text-gray-700 mb-6">        <li>Comfortable double bed</li>
        <li>Ensuite bathroom with hot shower</li>
        <li>Private balcony with garden view</li>
        <li>Free Wi-Fi</li>
        <li>Daily Housekeeping</li>
        <li>Flat-screen TV with satellite channels</li>
        <li>Room service (Upon Request)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Double Room is available starting at $150 per night, including breakfast for two.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>

      <button
        onClick={handleViewRates}
        className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-900 transition duration-300"
      >
        View Rates
      </button>
    </div>
  );
}

export default DoubleRoom;



