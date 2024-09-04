import React from 'react';
import { useNavigate } from 'react-router-dom';
import Honeymoon from '../assets/Honeymoon.jpeg';
import Honeymoon3 from '../assets/HONEYMOON6.jpeg';
import Honeymoon2 from '../assets/HONEYMOON2.jpeg';
import Honeymoon1 from '../assets/HONEYMOON1.jpeg';
import Honeymoon5 from '../assets/HONEYMOON5.jpeg';



function HoneymoonRoom() {
  const navigate = useNavigate();

  const handleViewRates = () => {
    navigate('/rates');
  };

  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Honeymoon Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Honeymoon Room at Peony Gardens Hotel offers a romantic getaway with luxurious amenities. Ideal for couples, this room provides a serene atmosphere and beautiful views.
      </p>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <div className="w-1/2 max-w-sm">
        <img
          src={ Honeymoon5 }
          alt="Honeymoon Room"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
        
        <div className="w-1/2 max-w-sm">
          <img
            src={Honeymoon2}
            alt="Honeymoon Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Honeymoon1}
            alt="Honeymoon Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Honeymoon3}
            alt="Honeymoon Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Honeymoon}
            alt="Honeymoon Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Room Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Luxurious king-size bed</li>
        <li>Ensuite bathroom with hot shower and bathtub</li>
        <li>Private balcony with panoramic view</li>
        <li>Free Wi-Fi</li>
        <li>Flat-screen TV with satellite channels</li>
        <li>Complimentary champagne on arrival</li>
        <li>Room service available</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Honeymoon Room is available starting at $300 per night, including breakfast for two.
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

export default HoneymoonRoom;
