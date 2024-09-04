import React from 'react';
import Camp from '../assets/camp.jpeg';
import Camp1 from '../assets/camp1.jpeg';
import Camp2 from '../assets/camp2.jpeg';

function CampingExperience() {
  return (
    <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-w-7xl mx-auto rounded-lg text-center">
      <h1 className="text-3xl font-bold text-center mb-4">Camping Experience</h1>
      <p className="text-lg text-gray-700 mb-6">
        Experience the great outdoors with our Camping Experience at Peony Gardens. Surrounded by nature, our camping sites offer a unique and adventurous way to enjoy your stay.
      </p>
      
      <div className="flex flex-row gap-4 mb-6 justify-center">
        <div className="w-full md:w-1/2">
          <img
            src={Camp}
            alt="Camping Experience"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={Camp2}
            alt="Camping Experience"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="mb-6">
        <img
          src={Camp1}
          alt="Camping Experience"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Spacious camping grounds</li>
        <li>Fire pits for bonfires</li>
        <li>Access to clean water and restrooms</li>
        <li>Guided nature walks</li>
        <li>Outdoor cooking facilities</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our Camping Experience starts at $100 per night per tent. Bring your own camping gear or rent from us for an additional fee.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
    </div>
  );
}

export default CampingExperience;


// import React from 'react';
// import Camp from '../assets/camp.jpeg';
// import Camp1 from '../assets/camp1.jpeg';
// import Camp2 from '../assets/camp2.jpeg';

// function CampingExperience() {
//   return (
//     <div className="relative p-5 z-20 mt-9 bg-yellow-700 bg-opacity-55 max-h-[1000px] max-w-8xl mx-auto rounded-lg text-center">
//       <h1 className="text-3xl font-bold text-center mb-4">Camping Experience</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Experience the great outdoors with our Camping Experience at Peony Gardens. Surrounded by nature, our camping sites offer a unique and adventurous way to enjoy your stay.
//       </p>
      
//       <div className="flex flex-row gap-4 mb-6">
//         <div className="w-1/2">
//           <img
//             src={Camp}
//             alt="Camping Experience"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>
//         <div className="w-1/2">
//           <img
//             src={Camp2}
//             alt="Camping Experience"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>

//       <div className="mb-6">
//         <img
//           src={Camp1}
//           alt="Camping Experience"
//           className="w-full h-auto rounded shadow-lg"
//         />
//       </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-10">Features</h2>
//       <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
//         <li>Spacious camping grounds</li>
//         <li>Fire pits for bonfires</li>
//         <li>Access to clean water and restrooms</li>
//         <li>Guided nature walks</li>
//         <li>Outdoor cooking facilities</li>
//       </ul>
//       <h2 className="text-2xl font-bold mb-4">Pricing</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         Our Camping Experience starts at $100 per night per tent. Bring your own camping gear or rent from us for an additional fee.
//       </p>
//       <h2 className="text-2xl font-bold mb-4">Book Now</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
//       </p>
//     </div>
//   );
// }

// export default CampingExperience;



