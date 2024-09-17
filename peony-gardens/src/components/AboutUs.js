import React from "react";
import Travel from "../assets/travel.png";
import {
  FaWhatsappSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import single from "../assets/single.jpeg";
import double from "../assets/double.jpeg";
import family from "../assets/family.jpeg";
import honeymoon from "../assets/honeymoon.jpeg";
import Team1 from "../assets/Team1.jpeg";
import Team2 from "../assets/Team2.jpeg";
import Team3 from "../assets/Team3.jpeg";

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>

      <p className="text-lg text-gray-700 text-center max-w-3xl mb-4">
        Peony Gardens is more than just a hotel, it's a sanctuary of peace and
        elegance nestled in the serene landscapes of Mauko, Busia. Since our
        inception, our mission has been to offer guests an unparalleled
        experience that blends comfort with nature's beauty. Our services range
        from luxurious accommodations to world-class conference facilities,
        making us the ideal destination for both relaxation and business.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-4">
        We pride ourselves on providing personalized services that cater to the
        unique needs of every guest. Whether you’re visiting for a family
        vacation, a romantic getaway, or a business retreat, Peony Gardens
        promises a stay filled with unforgettable moments.
      </p>
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        Our team of dedicated professionals is committed to ensuring your
        comfort and satisfaction from the moment you arrive. Welcome to Peony
        Gardens, where elegance meets nature.
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

        <div className="mt-12 text-center">
          <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[600px] max-w-6xl mx-auto rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-yellow-700">VISION</h2>
            <p className="text-lg text-gray-700 mb-8">
              To be the premier destination for those seeking peace, luxury, and
              rejuvenation in nature's embrace. We aspire to offer unforgettable
              experiences where guests can relax in harmony with the
              environment, enjoying the beauty of our gardens and the serenity
              of our spaces, while creating cherished memories of comfort,
              elegance, and unparalleled hospitality.
            </p>
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
          </div>
          <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[600px] max-w-6xl mx-auto rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-yellow-700">
              OUR JOURNEY
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Inspired by the desire to offer an out-of-town sanctuary, we
              embarked on a journey to create a modern haven that merges
              nature’s tranquility with contemporary elegance. Our unique
              design, complemented by thoughtfully curated plants, expansive
              spaces, and modern furnishings, is crafted to provide a
              rejuvenating escape from the ordinary. At [Hotel Name], we invite
              our guests to reconnect with nature while enjoying the comforts of
              sophisticated, stylish living—where every detail, from the gardens
              to the architecture, is designed to inspire relaxation and awe.
            </p>
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
          </div>
          <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[800px] max-w-6xl mx-auto rounded-lg">
            <h2 className="text-4xl font-bold mb-4 text-yellow-700">
              PEONY GARDENS
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              <strong>Peony Gardens</strong> is inspired by the harmonious
              balance of modern design and nature’s tranquility. Our philosophy
              centers around serenity, comfort, and luxury, woven seamlessly
              into every aspect of your experience.
              <br />
              <br />
              The design of Peony Gardens reflects a unique blend of
              contemporary aesthetics and natural beauty. The elegant
              architecture, lush landscapes, and thoughtfully curated outdoor
              spaces evoke a feeling of peaceful escape. Situated just outside
              the bustling city,
              <strong> Peony Gardens</strong> offers guests a retreat into the
              calming embrace of nature, with every detail carefully considered
              to foster relaxation and rejuvenation.
              <br />
              <br />
              Located in the serene outskirts of Mauko, Busia, our gardens
              feature an exquisite array of native and modern plant life,
              alongside meticulously designed outdoor spaces, creating the
              perfect harmony between comfort and natural beauty. Whether you
              seek a romantic getaway, a family retreat, or a destination for
              your next corporate event, Peony Gardens provides the ideal
              environment for every occasion.
              <br />
              <br />
              Peony Gardens invites you to experience luxury amidst nature,
              where modern elegance meets green serenity. Join us as we create
              moments of relaxation, inspiration, and lasting memories in the
              embrace of our beautiful surroundings.
            </p>

            <h2 className="text-4xl font-bold mb-4 text-yellow-700">
              CORE VALUES
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-4">
              INTEGRITY | CUSTOMER FOCUS | INNOVATION AND DYNAMISM |
              PROFESSIONALISM | TEAMWORK
            </p>

            <h2 className="text-4xl font-bold mb-4 text-yellow-700">SUMMARY</h2>
            <p className="text-lg text-gray-700 mb-8">
              160 standard rooms · 1 swimming pool · Ground for camping/team
              building · Conference halls · Bars, restaurant, and Alfresco
              dining · Wedding/video/photography
              <br />
              <br />
              Reservations: +254 700 949 004 | reservations@peonygardens.co.ke
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-12 bg-gray-50 py-8">
          <div className="flex justify-center items-center space-x-4 mb-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-3xl text-gray-800 hover:text-blue-600" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-gray-800 hover:text-black" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-gray-800 hover:text-pink-700" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-500" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare className="text-3xl text-gray-800 hover:text-green-600" />
            </a>
          </div>
          <div className="text-center p-2">
            <p className="text-lg font-semibold">#PeonyGardensHotel</p>
          </div>
          <div className="flex justify-center">
            <img
              src={Travel}
              alt="Travel Wishlist Logo"
              className="h-20 w-20"
            />
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
