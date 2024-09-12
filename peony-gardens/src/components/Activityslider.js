import React, { useState, useEffect } from 'react';
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

  // Automatically slide through activities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [activities.length]);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 shadow-lg rounded-md max-w-3xl mx-auto">
      {/* Activity Image */}
      <div className="w-full">
        <img
          src={activities[currentIndex].image}
          alt={activities[currentIndex].title}
          className="w-full h-56 md:h-80 object-cover rounded"
        />
      </div>

      {/* Activity Description */}
      <div className="w-full p-4 bg-yellow-700 bg-opacity-90 text-white text-center rounded-b-md">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{activities[currentIndex].title}</h2>
        <p className="text-sm md:text-base">
          {activities[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default ActivitySlider;
