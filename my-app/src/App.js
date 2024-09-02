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

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-20">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/meetings-events" element={<MeetingsEvents />} />
          <Route path="/dining-wining" element={<DiningWining />} />
          <Route path="/deals-offers" element={<DealsOffers />} />
          <Route path="/experience-activities" element={<ExperienceActivities />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
