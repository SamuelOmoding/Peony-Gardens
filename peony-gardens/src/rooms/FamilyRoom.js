import React from 'react';

function FamilyRoom() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Family Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Family Room at Peony Gardens Hotel is perfect for families or groups looking for spacious accommodations. This room features multiple beds and all the amenities needed for a comfortable stay.
      </p>
      <div className="mb-6">
        <img
          src="https://thelastvillage.co.ke/wp-content/uploads/2020/09/family-room.jpg"
          alt="Family Room"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Room Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Multiple beds</li>
        <li>Ensuite bathroom with hot shower</li>
        <li>Private balcony with garden view</li>
        <li>Free Wi-Fi</li>
        <li>Flat-screen TV with satellite channels</li>
        <li>Room service available</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Family Room is available starting at $250 per night, including breakfast for four.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
    </div>
  );
}

export default FamilyRoom;
