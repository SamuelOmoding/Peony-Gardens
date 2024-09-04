// src/rooms/Rates.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Rates() {
  const navigate = useNavigate();

  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-5xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Accommodation Rates</h1>
      
      <div className="bg-white mt-8 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Accommodation Rates</h2>
        <table className="min-w-full table-auto border-collapse border bg-yellow-700 bg-opacity-25 mb-8">
          <thead>
            <tr className="bg-yellow-700 bg-opacity-55">
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Season</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Details</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Bed Only</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Bed & Breakfast</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Half Board</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Full Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">Season 1 (3rd Jan - June 30th)</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">10,500.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">11,500.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">14,000.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">17,000.00</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">Season 2 (1st July - 23rd Dec)</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">9,500.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">10,500.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">13,000.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">15,500.00</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">Festive Rates (24th - 26th/ 31st & 1st)</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">15,500.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">19,000.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">24,000.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">30,000.00</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-bold mb-2">Child Policy</h2>
        <table className="min-w-full table-auto border-collapse border bg-yellow-700 bg-opacity-25 mb-8">
          <thead>
            <tr className="bg-yellow-700 bg-opacity-55">
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Policy</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Child Sharing</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">4 - 11 years old, maximum 1 child with 2 adults: 50% of adult per person rate</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">0-3 Years Old</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Sharing (maximum 2 children): FREE</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">4-11 Years Old in Own Room</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Max. 2 children - 75% of adult double rate</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">12 Years and Above</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Full adult rate</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-bold mb-2">Easter Festive Rates</h2>
        <table className="min-w-full table-auto border-collapse border bg-yellow-700 bg-opacity-25 mb-8">
          <thead>
            <tr className="bg-yellow-700 bg-opacity-55">
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Dates</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Full Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">29.03.24 - 01.04.24</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">
                <p>Single: 23,000</p>
                <p>Double: 30,000</p>
                <p>Triple: 35,000</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-bold mb-2">Peony Fun, Adrenaline & Adventure</h2>
        <table className="min-w-full table-auto border-collapse border bg-yellow-700 bg-opacity-25 mb-8">
          <thead>
            <tr className="bg-yellow-700 bg-opacity-55">
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Activity</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Kids</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Adults</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Swimming</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">300.00</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">600.00</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Quadbikes</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">2,000.00</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Zipline</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">1,200.00 per person per zip</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Archery</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">500.00 per session (5 arrows)</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">High Ropes</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">2,000.00 for 7 obstacles</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Wall Climbing</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">1,000.00 per wall</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Cycling</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">400.00 per trip</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Hiking</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2" colSpan="2">1,200.00 (minimum 5 pax)</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-bold mb-2">Team Building & Conferencing</h2>
        <table className="min-w-full table-auto border-collapse border bg-yellow-700 bg-opacity-25 mb-8">
          <thead>
            <tr className="bg-yellow-700 bg-opacity-55">
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Type</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Half Day</th>
              <th className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Full Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Conference</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">3,000.00 per person</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">3,700.00 per person</td>
            </tr>
            <tr>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">Team Building</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">2,500.00 per person</td>
              <td className="border bg-yellow-700 bg-opacity-25 px-4 py-2">3,000.00 per person</td>
            </tr>
          </tbody>
        </table>

        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Rates;
