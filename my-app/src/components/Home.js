import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../components/CustomArrows"; 

import Garden from "../assets/garden.jpeg";
import Garden1 from "../assets/garden1.jpeg";
import Garden2 from "../assets/garden2.jpeg";
import Garden3 from "../assets/garden3.jpeg";
import Garden4 from "../assets/garden4.jpeg";

// const CustomArrow = ({ className, style, onClick, icon }) => (
//   <div
//     className={`${className} bg-blue-500 p-2 rounded-full cursor-pointer`}
//     style={{ ...style, display: "block" }}
//     onClick={onClick}
//   >
//     {icon}
//   </div>
// );

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // fade: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };
  
  return (
    <div id="home" className="relative min-h-screen">
      {/* Slider for background images */}
      <Slider {...settings} className="absolute inset-0 z-0">
        <div>
          <img src={Garden} alt="Garden" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={Garden1} alt="Garden1" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={Garden2} alt="Garden2" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={Garden3} alt="Garden3" className="w-full h-screen object-cover" />
        </div>
        <div>
          <img src={Garden4} alt="Garden4" className="w-full h-screen object-cover" />
        </div>
      </Slider>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <header className="bg-yellow-900 bg-opacity-55 p-10 rounded-lg text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">
            Welcome to Peony Gardens Hotel. Home of Elegance and Natural Designs!
          </h1>
          <p className="text-lg text-black">
            Beautiful Spaces!
          </p>
        </header>
      </div>
    </div>
  );
}

export default Home;



