import React from 'react';
import { useNavigate } from 'react-router-dom';
import Family from '../assets/family5.jpeg';
import family1 from '../assets/family1.jpeg';
import family2 from '../assets/family2.jpeg';
import family3 from '../assets/family3.jpeg';

function FamilyRoom() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Family Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Family Room at Peony Gardens Hotel is perfect for families or groups looking for spacious accommodations. This room features multiple beds and all the amenities needed for a comfortable stay.
      </p>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Family}
            alt="Family Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={family2}
            alt="Family Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={family1}
            alt="Family Room"
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={family3}
            alt="Family Room"
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
        The Family Room is available starting at $250 per night, including breakfast for four.
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

export default FamilyRoom;
