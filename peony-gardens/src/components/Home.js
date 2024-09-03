import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../components/CustomArrows";
import Activityslider from "../components/Activityslider";

import Garden from "../assets/garden.jpeg";
import Garden1 from "../assets/garden1.jpeg";
import Garden2 from "../assets/garden2.jpeg";
import Garden3 from "../assets/garden3.jpeg";
import Garden4 from "../assets/garden4.jpeg";
import Video from "../assets/video.mp4";
import single from "../assets/single.jpeg";
import double from "../assets/double.jpeg";
import family from "../assets/family.jpeg";
import honeymoon from "../assets/honeymoon.jpeg";

function Home() {
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  const incrementRooms = () => setRooms(rooms + 1);
  const decrementRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="home" className="relative min-h-screen">
      {/* Container for Slider and Reservation */}
      <div className="relative w-full h-screen">
  <Slider {...settings} className="absolute inset-0 z-0">
    <div className="relative">
      <img
        src={Garden}
        alt="Garden"
        className="w-full h-screen object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-orange-700 text-4xl font-bold">
        Swimming Pool
      </p>
    </div>
    <div className="relative">
      <img
        src={Garden1}
        alt="Garden1"
        className="w-full h-screen object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-slate-300 text-4xl font-bold">
      Relaxing Area
      </p>
    </div>
    <div className="relative">
      <img
        src={Garden2}
        alt="Garden2"
        className="w-full h-screen object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-orange-700 text-4xl font-bold">
        Garden Area 2
      </p>
    </div>
    <div className="relative">
      <img
        src={Garden3}
        alt="Garden3"
        className="w-full h-screen object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-orange-100 text-4xl font-bold">
        Garden Area 3
      </p>
    </div>
    <div className="relative">
      <img
        src={Garden4}
        alt="Garden4"
        className="w-full h-screen object-cover"
      />
      <p className="absolute inset-0 flex items-center justify-center text-orange-500  text-4xl font-bold">
        Photo Area
      </p>
    </div>
  </Slider>

        {/* Reservation Form at the Bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 bg-white bg-opacity-45 p-5 rounded-t-lg shadow-md w-full max-w-4xl">
          <h2 className="text-2xl text-center font-bold mb-4">
            Reserve Your Stay
          </h2>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label className="font-bold mb-1">Check-In</label>
              <input type="date" className="border p-2 rounded" />
            </div>

            <div className="flex flex-col">
              <label className="font-bold mb-1">Check-Out</label>
              <input type="date" className="border p-2 rounded" />
            </div>

            {/* Rooms and Guests Selection */}
            <div className="flex flex-col">
              <label className="font-bold mb-1">Rooms</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementRooms}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="text"
                  value={rooms}
                  readOnly
                  className="w-16 text-center border p-2 rounded"
                />
                <button
                  onClick={incrementRooms}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="font-bold mb-1">Guests</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={decrementGuests}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="text"
                  value={guests}
                  readOnly
                  className="w-16 text-center border p-2 rounded"
                />
                <button
                  onClick={incrementGuests}
                  className="border p-2 rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Promo Code and Check Availability */}
            <div className="flex flex-col items-end">
              <label className="font-bold mb-1">Have a promotion code?</label>
              <input
                type="text"
                placeholder="Enter promo code"
                className="border p-2 rounded mb-2"
              />
              <button className="bg-orange-600 text-white py-2 px-4 rounded">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[600px] max-w-8xl mx-auto rounded-lg">
        <h2 className="text-black text-2xl font-bold py-2">
          Welcome to Peony Gardens.
        </h2>
        <div className="relative w-full h-[500px] overflow-hidden rounded">
          <video
            src={Video}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            controls
          />
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[1000px] max-w-8xl mx-auto rounded-lg text-center">
        <h2 className="text-2xl font-semibold">ACCOMMODATIONS</h2>
        <h3 className="text-3xl font-bold mb-2">
          Welcome to Peony Gardens Hotel
        </h3>
        <h1 className="text-md font-semi-bold text-gray-600 mb-8">
          Home of Elegance and Natural Designs!
        </h1>
        <p className="text-lg text-black">Beautiful Spaces!</p>

        {/* Accommodations Section */}
        <div className="relative z-20 mt-12 bg-gray-50 py-8">
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Explore our rooms offering a blend of elegance and modern
              amenities.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {/* Room Cards */}
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={single}
                alt="Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Double Room</h3>
              <div className="absolute bottom-0 left-0 w-full bg-yellow-800 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                <p>
                  This room offers a comfortable double bed, perfect for
                  couples. The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested.
                </p>
              </div>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={double}
                alt="Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Twin/Triple Room</h3>
              <div className="absolute bottom-0 left-0 w-full bg-yellow-800 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                <p>
                  This room is ideal for small groups or families, offering twin
                  or triple beds. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested.{" "}
                </p>
              </div>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={family}
                alt="Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Family Room</h3>
              <div className="absolute bottom-0 left-0 w-full bg-yellow-800 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                <p>
                  Spacious family room with multiple beds and amenities for a
                  comfortable stay. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested.{" "}
                </p>
              </div>
            </div>
            <div className="relative group bg-white p-4 shadow rounded-lg overflow-hidden">
              <img
                src={honeymoon}
                alt="Room"
                className="rounded mb-2 group-hover:opacity-50 transition-opacity duration-300"
              />
              <h3 className="font-bold">Honeymoon Room</h3>
              <div className="absolute bottom-0 left-0 w-full bg-yellow-800 bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                <p>
                  Spacious honeymoon room with multiple beds and amenities for a
                  comfortable stay. The standard chunk of Lorem Ipsum used since
                  the 1500s is reproduced below for those interested.
                </p>
              </div>
            </div>
          </div>
          {/* Amenities Section */}
          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold mb-4">
              ALL OF OUR ROOMS OFFER THE FOLLOWING AMENITIES
            </h3>
            <div className="flex justify-center flex-wrap space-x-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🏠</span>
                <span>Balcony / Terrace</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🎁</span>
                <span>In-Room Breakfast</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🧹</span>
                <span>Daily House Keeping</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🧼</span>
                <span>Soft Towels Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🍼</span>
                <span>Free Bottled Water</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🚭</span>
                <span>Non-Smoking Rooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">📶</span>
                <span>Wi-Fi Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="relative z-20 mt-12 bg-yellow-700 bg-opacity-55 py-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-10">ACTIVITIES</h2>
          <p className="text-1xl font-semibold text-gray-900">
            Discover exciting activities to enjoy during your stay.
          </p>
          <div className="w-4/5 p-4 mx-auto text-center">
  <p className="text-gray-900">
    Get away to get closer. Peony Gardens provides the perfect atmosphere for bonding and reflection, whether you are alone, a group, a couple or a family. We offer an incredible array of activities ranging from the swimming pool, quad bikes, archery, high ropes, cargo nets, bonfires, etc.
  </p>
</div>
<div className="w-4/5 p-4 mx-auto text-center">
  <p className="text-gray-900">
    For the Great Outdoors, get to explore the beautiful space via bike riding. For the sports enthusiasts, we offer on-site Football, Volleyball, and Basketball. You can also choose to enjoy the scenery, read a book, or wind down with the board games available.
  </p>
</div>

        </div>
        <div className="flex justify-between items-center px-4">
          <Activityslider />
          </div>
          </div>
          {/* Activities Slider */}
          {/* <button className="bg-gray-200 rounded-full p-2">{"<"}</button>
          <div className="w-full p-4">
            <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full p-4">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          </div>
          <button className="bg-gray-200 rounded-full p-2">{">"}</button>
        </div>
      </div> */}

      {/* Location Section */}
      <div className="relative z-20 mt-12 bg-yellow-700 bg-opacity-55 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">WHERE TO FIND US</h2>
          <p className="text-gray-600">
            Located in Mauko, Busia with mesmerizing views.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.0041656169783!2d34.12886790432812!3d0.4607691484282466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d96578011f5b1%3A0x122e58c84fb4a6e4!2sBusia%2C%20Kenya!5e0!3m2!1sen!2s!4v1693578336356!5m2!1sen!2s"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              title="Peony Gardens Location"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 text-left px-6">
            <p className="font-bold">ADDRESS:</p>
            <p>Peony Gardens Hotel, Hospital Road, Mauko, Busia.</p>
            <p className="font-bold mt-4">RESERVATION NO 1:</p>
            <p>+254 700 949 004</p>
            <p className="font-bold mt-4">EMAIL:</p>
            <p>reservations@peonygardens.co.ke</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
