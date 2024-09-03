// src/components/Hero.jsx
import React from 'react';
import HeroImage from '../assets/hero-image.jpg'; 

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Peony Gardens</h1>
        <p className="text-xl mb-8">Experience the tranquility and beauty of our unique location.</p>
        <button className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
