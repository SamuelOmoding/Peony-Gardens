import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  // State to store client email and message
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Email:', clientEmail);
    console.log('Message:', message);
    // You can handle sending the email/message here
    alert('Message sent successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h2 className="font-bold text-4xl text-yellow-500 mb-6">Contact Us</h2>
      <div className="bg-white shadow-md rounded-md p-6 max-w-lg w-full text-center">
        <p className="text-lg mb-4">We'd love to hear from you! Reach us at:</p>
        <p className="text-md mb-2">
          <strong>Telephone:</strong> +254 123 456 789
        </p>
        <p className="text-md mb-6">
          <strong>Email:</strong> peonygardens@example.com
        </p>

        {/* Client Email and Message Block */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black-500 font-bold mb-2" htmlFor="clientEmail">
              Your Email:
            </label>
            <input
              type="email"
              id="clientEmail"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-yellow-500"
              rows="7"
              required
            ></textarea>
          </div>

          <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700">
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
