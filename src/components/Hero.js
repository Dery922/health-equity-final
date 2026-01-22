import React from 'react';
import './Hero.css';

const Hero = () => {
  const stats = [
    { value: "50+", label: "Organizations Served" },
    { value: "100+", label: "Health Equity Projects" },
    { value: "15+", label: "Countries Reached" }
  ];

  const handleContactClick = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const services = document.getElementById('services');
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Bridging Healthcare Gaps for Equitable Outcomes</h2>
        <p>
          Expert consultancy services to help organizations implement sustainable 
          health equity strategies and create inclusive healthcare systems.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleContactClick}>
            Request Consultation
          </button>
          <button className="secondary-btn" onClick={handleServicesClick}>
            Our Services
          </button>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;