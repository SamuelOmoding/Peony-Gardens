import React from 'react';
import Twin from '../assets/twin.jpeg';
import Twin1 from '../assets/twin1.jpeg';
import Twin2 from '../assets/twin2.jpeg';
import Tripple from '../assets/tripple.jpeg';

function TwinTripleRoom() {
  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Twin/Triple Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Twin/Triple Room at Peony Gardens Hotel is designed for flexibility and comfort, accommodating up to three guests with twin or triple beds. It’s perfect for families, friends, or small groups traveling together.
      </p>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin}
            alt="Twin Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin2}
            alt="Twin Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="w-1/2 max-w-sm">
          <img
            src={Twin1}
            alt="Triple Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-1/2 max-w-sm">
          <img
            src={Tripple}
            alt="Triple Room"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Room Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Choice of twin or triple beds</li>
        <li>Ensuite bathroom with hot shower</li>
        <li>Private balcony with scenic views</li>
        <li>Free Wi-Fi</li>
        <li>Flat-screen TV with satellite channels</li>
        <li>Room service available</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Twin/Triple Room is available starting at $200 per night, including breakfast for up to three guests.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
    </div>
  );
}

export default TwinTripleRoom;



// import React from 'react';
// import Twin from '../assets/twin.jpeg';
// import Twin1 from '../assets/twin1.jpeg';
// import Twin2 from '../assets/twin2.jpeg';
// import Tripple from '../assets/tripple.jpeg';


// function TwinTripleRoom() {
//   return (
//     <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[1000px] max-w-8xl mx-auto rounded-lg text-center">
//       <h1 className="text-3xl font-bold text-center mb-4">Twin/Triple Room</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         The Twin/Triple Room at Peony Gardens Hotel is designed for flexibility and comfort, accommodating up to three guests with twin or triple beds. It’s perfect for families, friends, or small groups traveling together.
//       </p>
//       <div className="flex flex-row gap-4 mb-6">
//         <div className="w-1/2">
//           <img
//             src={Twin}
//             alt="Twin/Triple Room"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>
//         <div className="w-1/2">
//           <img
//             src={Twin2}
//             alt="Twin/Triple Room"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>

//       <div className="mb-6">
//         <img
//           src={Twin1}
//           alt="Twin/Triple Room"
//           className="w-full h-auto rounded shadow-lg"
//         />
//       </div>
//       <div className="mb-6">
//         <img
//           src={Tripple}
//           alt="Twin/Triple Room"
//           className="w-full h-auto rounded shadow-lg"
//         />
//       </div>
//       </div>
//       <h2 className="text-2xl font-bold mb-4">Room Features</h2>
//       <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
//         <li>Choice of twin or triple beds</li>
//         <li>Ensuite bathroom with hot shower</li>
//         <li>Private balcony with scenic views</li>
//         <li>Free Wi-Fi</li>
//         <li>Flat-screen TV with satellite channels</li>
//         <li>Room service available</li>
//       </ul>
//       <h2 className="text-2xl font-bold mb-4">Pricing</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         The Twin/Triple Room is available starting at $200 per night, including breakfast for up to three guests.
//       </p>
//       <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
//       </p>
//     </div>
//   );
// }

// export default TwinTripleRoom;
