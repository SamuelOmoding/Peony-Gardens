    import React from 'react';
    import { useNavigate } from 'react-router-dom';
    import Pool1 from '../assets/Pool.jpeg';
    import Pool2 from '../assets/Pool2.jpeg';
    import Pool3 from '../assets/Pool1.jpeg';
    import Pool4 from '../assets/Pool4.jpeg';
    import Pool5 from '../assets/Pool5.jpeg';
    import Pool6 from '../assets/Pool6.jpeg';
    import Swim from '../assets/swimming.jpg';
    import Travel from "../assets/travel.png";
    
    const SwimmingPool = () => {
      const navigate = useNavigate();
    
      const handleViewRates = () => {
        navigate('/rates');
      };
    
      return (
        <div className="relative p-5">
          <div
            style={{ 
              backgroundImage: `url(${Swim})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat', 
              height: '100vh', 
              width: '100%' 
            }}
            className="p-6"
          >
            <h1 className="text-4xl font-bold text-orange-700 text-center mb-4">Swimming Pools</h1>
            <div className="bg-gray-900 bg-opacity-40 rounded p-8">
              <p className="text-lg text-white mb-8">
              Perfect for leisure, keeping fit and having a playful day with your kids friends and families. Everyone loves a dip on a hot day to cool off the mid day heat while getting entertained.              </p>
              <p className="text-lg text-white mb-6">
              If you are that person who prefers to relax on the poolside without getting wet, well, we have comfortable poolside beds for you to lounge around as you watch the beautiful scenery surrounding the gardens.</p>
            </div>
          </div>
    
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6 justify-center hover:">
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool6}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool2}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool3}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool4}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool5}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
              <div className="w-1/2 max-w-sm">
                <img
                  src={Pool1}
                  alt="Swimming Pool"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
          </div>
    <div>
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Book Your Ride</h2>
          <p className="text-lg text-black mb-6 text-center">
          Perfect for leisure, keeping fit and having a playful day with your kids friends and families. Everyone loves a dip on a hot day to cool off the mid day heat while getting entertained.          </p>
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
    
    
export default SwimmingPool