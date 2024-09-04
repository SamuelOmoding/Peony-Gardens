import React from 'react';

function HoneymoonRoom() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Honeymoon Room</h1>
      <p className="text-lg text-gray-700 mb-6">
        The Honeymoon Room at Peony Gardens Hotel offers a romantic getaway with luxurious amenities. Ideal for couples, this room provides a serene atmosphere and beautiful views.
      </p>
      <div className="mb-6">
        <img
          src="https://thelastvillage.co.ke/wp-content/uploads/2020/09/honeymoon-room.jpg"
          alt="Honeymoon Room"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Room Features</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>Luxurious king-size bed</li>
        <li>Ensuite bathroom with hot shower and bathtub</li>
        <li>Private balcony with panoramic view</li>
        <li>Free Wi-Fi</li>
        <li>Flat-screen TV with satellite channels</li>
        <li>Complimentary champagne on arrival</li>
        <li>Room service available</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <p className="text-lg text-gray-700 mb-6">
        The Honeymoon Room is available starting at $300 per night, including breakfast for two.
      </p>
      <h2 className="text-2xl font-bold mb-4">Book Now</h2>
      <p className="text-lg text-gray-700 mb-6">
        To make a reservation, please contact us at reservations@peonygardens.co.ke or call us at +254 700 949 004.
      </p>
    </div>
  );
}

export default HoneymoonRoom;
