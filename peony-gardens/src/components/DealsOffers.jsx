import React from 'react';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';
import MyGraduation from '../assets/Grad.jpeg';
import Graduate from '../assets/graduation.jpeg'; 
import Birthday from '../assets/Bd.jpeg';
import birthday from '../assets/birthday.jpeg';
import Baby from '../assets/babyshower.jpeg';
import Babyshower from '../assets/bbshower.jpeg';
import Conference from '../assets/conference.jpeg';
import Travel from "../assets/travel.png";

function DealsOffers() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl text-yellow-500 font-bold mb-4 text-center">Deals and Offers</h1>
      <p className="text-lg mb-2 text-center opacity-0 animate-fade-in-up delay-100">
        Whether you are looking for a family break, a romantic getaway, or a corporate bonding deal, Peony Gardens has the best offers and package deals for you.
      </p>
      <p className="text-lg mb-2 text-center opacity-0 animate-fade-in-up delay-200">
        Look out for any special on this page.
      </p>
      <p className="text-lg mb-8 text-center opacity-0 animate-fade-in-up delay-300">
        For the blissful couples who look forward to getting married or expecting their bundle of joy, you are welcome to celebrate your special day with us.
      </p>

      <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-2 gap-8 justify-center items-center mx-auto">
        <div className="relative group flex justify-center items-center space-x-10 space-y-12">
          <img
            src={MyGraduation}
            alt="Graduation Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <img
            src={Graduate}
            alt="Graduation Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-yellow-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold">Graduation</h3>
          </div>
        </div>

        <div className="relative group flex justify-center items-center space-x-10 space-y-12">
          <img
            src={Baby}
            alt="BabyShower Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <img
            src={Babyshower}
            alt="BabyShower Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-yellow-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold">Baby Shower</h3>
          </div>
        </div>

        <div className="relative group flex justify-center items-center space-x-10 space-y-12">
          <img
            src={Birthday}
            alt="Birthday Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <img
            src={birthday}
            alt="Birthday Event"
            className="w-52 h-58 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-yellow-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold">Birthday</h3>
          </div>
        </div>

        <div className="relative group flex justify-center items-center">
          <img
            src={Conference}
            alt="Conference Event"
            className="w-52 h-58 object-cover mx-auto rounded-md"
          />
          <div className="absolute inset-0 bg-yellow-900 bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold">Conference</h3>
          </div>
        </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-6 mt-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className="text-3xl text-gray-800 hover:text-blue-600" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-gray-800 hover:text-black" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-gray-800 hover:text-pink-600" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-900" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare className="text-3xl text-gray-800 hover:text-green-600" />
        </a>
      </div>

      <div className="text-center mb-2">
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

export default DealsOffers;