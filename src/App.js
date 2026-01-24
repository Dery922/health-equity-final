import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CareerPage from './components/CareerPage';
import './App.css';
import Publications from './components/Publications';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
            <Route path="/careers" element={<CareerPage />} /> 
            <Route path='publications' element={<Publications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;