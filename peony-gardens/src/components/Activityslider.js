import React, { useState } from 'react';
import Bikes from '../assets/biking.jpg';
import Ropes from '../assets/highropes.jpeg';
import Quadbike from '../assets/quadbike.jpg';
import Swimming from '../assets/swimming.jpg';
import Hiking from '../assets/cycling.jpg'; 
import Walls from '../assets/woodwall.jpg';

const ActivitySlider = () => {
  const activities = [
    {
      image: Swimming,
      title: 'Swimming',
      description: 'Enjoy a refreshing swim in our outdoor pool, perfect for relaxation and fun activities. Our pool area is equipped with all the amenities you need for a great time.',
    },
    {
      image: Bikes,
      title: 'Biking',
      description: 'Explore scenic trails with our biking activities. Whether you are a beginner or an experienced rider, our biking paths offer something for everyone.',
    },
    {
      image: Ropes,
      title: 'High Ropes',
      description: 'Challenge yourself with our high ropes course, designed to test your balance and courage. A thrilling experience for all adventure enthusiasts!',
    },
    {
      image: Quadbike,
      title: 'Quad Biking',
      description: 'Experience the thrill of quad biking on rough terrains. Our guided tours ensure safety and fun, making it a perfect adventure activity.',
    },
    {
      image: Hiking,
      title: 'Hiking',
      description: 'Hike through beautiful landscapes and enjoy the natural beauty around you. Our trails offer a mix of challenges and scenic views.',
    },
    {
      image: Walls,
      title: 'Wood Wall Climbing',
      description: 'Test your strength and agility on our wood wall climbing activity. Suitable for all ages, this activity promises excitement and a great workout.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50">
      {/* Activity Image */}
      <div className="w-full md:w-1/2">
        <img
          src={activities[currentIndex].image}
          alt={activities[currentIndex].title}
          className="w-full h-64 md:h-96 object-cover rounded"
        />
      </div>

      {/* Activity Description */}
      <div className="w-full md:w-1/2 p-6 bg-yellow-700 bg-opacity-55">
        <h2 className="text-2xl font-bold mb-4">{activities[currentIndex].title}</h2>
        <p className="text-gray-700 mb-6">
          {activities[currentIndex].description}
        </p>

        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={handlePrevious}
          >
            {"<"}
          </button>
          <button
            className="bg-gray-200 rounded-full p-2"
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySlider;
