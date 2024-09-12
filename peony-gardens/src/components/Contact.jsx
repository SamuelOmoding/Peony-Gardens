import React, { useState } from 'react';
import { FaInstagram, FaFacebookSquare, FaLinkedin, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';

function Contact() {
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Email:', clientEmail);
    console.log('Message:', message);
    alert('Message sent successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
      <h2 className="font-bold text-4xl text-yellow-500 mb-6">Contact Us</h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8 max-w-5xl w-full bg-white shadow-md rounded-md p-6">

        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="font-semibold text-xl mb-4">Peony Gardens </h3>
          <p>Peony Gardens Hotel, Hospital Road, Mauko, Busia</p>
          <p>P.O. Box 1021 50400 Busia.</p>
          <p>Email: <a href="mailto:info@peonygardens.co.ke" className="text-yellow-600">info@thelastvillage.co.ke</a></p>
          <p className="mt-4">
            <strong>Reservation Number :</strong> +254 700 949 004<br />
            <strong>Sales Manager:</strong> +254 700 949 000
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="clientName">
                Name *
              </label>
              <input
                type="text"
                id="clientName"
                placeholder="Please enter your Full Names"
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="clientEmail">
                Email Address *
              </label>
              <input
                type="email"
                id="clientEmail"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="Please enter your Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                Telephone / Mobile Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Please enter your Telephone / Mobile Number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                Subject / Title *
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Please enter your Subject / Title"
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                Message or Enquiry *
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please enter your Enquiry"
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 w-full">
        <iframe
          title="Peony Gardens Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.0041656169783!2d34.12886790432812!3d0.4607691484282466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d96578011f5b1%3A0x122e58c84fb4a6e4!2sBusia%2C%20Kenya!5e0!3m2!1sen!2s!4v1693578336356!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex justify-center items-center space-x-4 mb-6 mt-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className="text-3xl text-gray-800 hover:text-blue-600" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-gray-800 hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-gray-800 hover:text-pink-600" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-500" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare className="text-3xl text-gray-800 hover:text-green-600" />
        </a>
      </div>

      <div className="text-center mb-4">
        <p className="text-lg font-semibold">#PeonyGardensHotel</p>
      </div>

      <div className="bg-gray-800 text-center text-white py-2 w-full">
        <p>© Copyright 2024. Peony Gardens. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;


