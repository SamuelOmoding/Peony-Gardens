import React from 'react';
import { useNavigate } from 'react-router-dom';
import Twin from '../assets/twin.jpeg';
import Twin1 from '../assets/twin1.jpeg';
import Twin2 from '../assets/twin2.jpeg';
import Tripple from '../assets/tripple.jpeg';

function TwinTripleRoom() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };
  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Twin/Triple Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Twin/Triple Room at Peony Gardens Hotel is designed for flexibility and comfort, accommodating up to three guests with twin or triple beds. It’s perfect for families, friends, or small groups traveling together.
      </p>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin}
            alt="Twin Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin2}
            alt="Twin Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin1}
            alt="Triple Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Tripple}
            alt="Triple Room"
            className="w-full h-auto rounded shadow-lg"
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
        The Twin/Triple Room is available starting at $200 per night, including breakfast for up to three guests.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
      <button
        onClick={handleViewRates}
        className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-900 transition duration-300"
      >
        View / Download Rates
      </button>
    </div>
  );
}

export default TwinTripleRoom;



