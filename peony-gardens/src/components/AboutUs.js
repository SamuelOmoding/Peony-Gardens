import React from 'react';
import Travel from "../assets/travel.png";
import { FaWhatsappSquare, FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import single from "../assets/single.jpeg";
import double from "../assets/double.jpeg";
import family from "../assets/family.jpeg";
import honeymoon from "../assets/honeymoon.jpeg";
import Team1 from '../assets/Team1.jpeg';
import Team2 from '../assets/Team2.jpeg';
import Team3 from '../assets/Team3.jpeg';

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>

      <p className="text-lg text-gray-700 text-center max-w-3xl mb-4">
        Peony Gardens is more than just a hotel, it's a sanctuary of peace and elegance nestled in the serene landscapes of Mauko, Busia. Since our inception, our mission has been to offer guests an unparalleled experience that blends comfort with nature's beauty. Our services range from luxurious accommodations to world-class conference facilities, making us the ideal destination for both relaxation and business.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-4">
        We pride ourselves on providing personalized services that cater to the unique needs of every guest. Whether you’re visiting for a family vacation, a romantic getaway, or a business retreat, Peony Gardens promises a stay filled with unforgettable moments.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        Our team of dedicated professionals is committed to ensuring your comfort and satisfaction from the moment you arrive. Welcome to Peony Gardens, where elegance meets nature.
      </p>
      <div className="mt-4">

      <div className="flex justify-center space-x-6">
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={single}
                alt="Single Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Single Room</h3>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={double}
                alt="Double Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Double Room</h3>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={family}
                alt="Family Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Family Room</h3>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={honeymoon}
                alt="Honeymoon Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Honeymoon Room</h3>
            </div>
          </div>

      {/* Additional sections from the uploaded images */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-700">VISION</h2>
        <p className="text-lg text-gray-700 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book        </p>
        <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
            </div>
        <h2 className="text-4xl font-bold mb-4 text-yellow-700">OUR JOURNEY</h2>
        <p className="text-lg text-gray-700 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-4 text-yellow-700">ABOUT US</h2>
        <p className="text-lg text-gray-700 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-4 text-yellow-700">CORE VALUES</h2>
        <p className="text-lg text-gray-700 mb-4">
          INTEGRITY · CUSTOMER FOCUS · INNOVATION AND DYNAMISM · PROFESSIONALISM · TEAMWORK
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-4 text-yellow-700">SUMMARY</h2>
        <p className="text-lg text-gray-700 mb-8">
          16 standard rooms · 1 swimming pool · Ground for camping/team building · Conference halls · Bars, restaurant, and Alfresco dining · Wedding/video/photography
          <br /><br />
          Reservations: +254 700 949 004 | reservations@peonygardens.co.ke
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[Team1, Team2, Team3].map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Conference ${index + 1}`} 
              className="rounded-lg w-full h-56 object-cover" 
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-12 bg-gray-50 py-8">
        <div className="flex justify-center items-center space-x-4 mb-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="text-3xl text-gray-800 hover:text-blue-600" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-gray-800 hover:text-black" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-gray-800 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-500" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className="text-3xl text-gray-800 hover:text-green-600" />
          </a>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold">#PeonyGardensHotel</p>
        </div>
        <div className="flex justify-center my-4">
          <img src={Travel} alt="Travel Wishlist Logo" className="h-20 w-20" />
        </div>
        <div className="bg-gray-800 text-center text-white py-2">
          <p>© Copyright 2024. Peony Gardens. All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
