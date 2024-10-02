  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
  import Kids from '../assets/Playground.jpeg';
  import Kids1 from '../assets/Kids.jpeg';
  import Kids2 from '../assets/Kids1.jpeg';
  import Kid from '../assets/Kids4.jpeg';
  import Kid1 from '../assets/kidspark.jpg';
  
  import Kidsgrounds from '../assets/Playground.jpeg';
  import Travel from "../assets/travel.png";
  
  function KidsPlayground() {
    const navigate = useNavigate();
  
    const handleViewRates = () => {
      navigate('/rates');
    };
  
    return (
      <div className="relative">
        <img
          src={Kidsgrounds}
          alt="Kids Playgrounds"
          className="w-full h-85 object-cover"
        />
  
        <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Kids Playground</h1>
          <p className="text-lg text-gray-700 text-center bg-yellow-600 bg-opacity-55 p-4 rounded-lg">
          What makes the Last Village a favorite for most people other than the adventure of getting to the lodge is the fact that it is a family paradise. Parents don’t have to worry about their kids and the kids have lots of activities ranging from swings, trampolines, bouncing castles, quad bikes and swimming.
          <br /><br />     
          The gardens are also ideal for kids to run around and just be kids. We’ve made every effort to make sure parents can relax as the kids have a good time.  
   </p>
        </div>
  
        <div className="bg-white p-4 mt-8 mx-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[ Kids1,  Kids, Kid, Kids, Kid1, Kids2, ].map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt={`Kids Playgrounds ${index + 1}`} 
                className="rounded-lg w-full h-80 object-cover transition-transform duration-300 hover:scale-105" 
              />
            ))}
          </div>
        </div>
  
        <div className="bg-white p-6 mt-8 mx-4 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Book Now</h2>
          <p className="text-lg text-black mb-6 leading-relaxed tracking-wide px-4 py-2 bg-gray-100 rounded-lg">
            To book your Kids Playgrounds experience, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
          </p>
          <button
            onClick={handleViewRates}
            className="mt-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-oKidsgrounds-900 transition duration-300"
          >
            View Rates
          </button>
        </div>
  
        <div className="relative z-20 mt-12 bg-gray-800 py-8">
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
  

export default KidsPlayground