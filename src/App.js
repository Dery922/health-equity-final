import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CareerPage from './components/CareerPage';
import './App.css';
import Publications from './components/Publications';
import OurMission from './pages/OurMission';
import StoryPage from './pages/StoryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="/careers" element={<CareerPage />} /> 
            <Route path='/publications' element={<Publications />} />
               <Route path='/our-mission' element={<OurMission />} />
               <Route path='/our-story' element={<StoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;