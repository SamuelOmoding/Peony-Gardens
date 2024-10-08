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
import ActivitiesExperience from './components/ActivitiesExperience';
import DoubleRoom from './rooms/DoubleRoom';
import TwinTripleRoom from './rooms/TwinTripleRoom';
import FamilyRoom from './rooms/FamilyRoom'; 
import HoneymoonRoom from './rooms/HoneymoonRoom'; 
import CampingExperience from './rooms/CampingExperience'; 
import Rates from './rooms/Rates'; 
import MeetingsConferences from './meetings/MeetingsConferences';
import WeddingsEvents from './meetings/WeddingsEvents';
import TeamBuilding from './meetings/TeamBuilding';
import Restaurant from './dining/Restaurant';
import PeonyBar from './dining/PeonyBar';
import QuadBikes from './activities/QuadBikes';
import SwimmingPool from './activities/SwimmingPool'; 
import Archery from './activities/Archery';
import ZipLining from './activities/ZipLining'; 
import KidsPlayground from './activities/KidsPlayground';

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
          <Route path="/meetings-events/meetings-conferences" element={<MeetingsConferences />} />
          <Route path="/meetings-events/weddings-events" element={<WeddingsEvents />} />
          <Route path="/meetings-events/team-building" element={<TeamBuilding />} />
          <Route path="/dining-wining" element={<DiningWining />} />
          <Route path="/dining-wining/restaurant" element={<Restaurant />} />
          <Route path="/dining-wining/peony-bar" element={<PeonyBar />} />
          <Route path="/deals-offers" element={<DealsOffers />} />
          <Route path="/activities-experience" element={<ActivitiesExperience />} />
          <Route path="/activities-experience/quad-bikes" element={<QuadBikes />} />
          <Route path="/activities-experience/swimming-pool" element={<SwimmingPool />} /> 
          <Route path="/activities-experience/archery" element={<Archery />} /> 
          <Route path="/activities-experience/zip-lining-high-ropes" element={<ZipLining />} /> 
          <Route path="/activities-experience/kids-playground" element={<KidsPlayground />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rates" element={<Rates />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
