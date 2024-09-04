import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import DiningWining from './components/DiningWining';
import Accommodation from './components/Accommodation';
import MeetingsEvents from './components/MeetingsEvents';
import DealsOffers from './components/DealsOffers';
import ExperienceActivities from './components/ExperienceActivities';
import DoubleRoom from './rooms/DoubleRoom';
import TwinTripleRoom from './rooms/TwinTripleRoom';
import FamilyRoom from './rooms/FamilyRoom'; 
import HoneymoonRoom from './rooms/HoneymoonRoom'; 
import CampingExperience from './rooms/CampingExperience'; 
import Rates from './rooms/Rates'; 

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/accommodation/double-room" element={<DoubleRoom />} />
          <Route path="/accommodation/twin-triple-room" element={<TwinTripleRoom />} />
          <Route path="/accommodation/family-room" element={<FamilyRoom />} /> 
          <Route path="/accommodation/honeymoon-room" element={<HoneymoonRoom />} /> 
          <Route path="/accommodation/camping-experience" element={<CampingExperience />} /> 
          <Route path="/meetings-events" element={<MeetingsEvents />} />
          <Route path="/dining-wining" element={<DiningWining />} />
          <Route path="/deals-offers" element={<DealsOffers />} />
          <Route path="/experience-activities" element={<ExperienceActivities />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rates" element={<Rates />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;


