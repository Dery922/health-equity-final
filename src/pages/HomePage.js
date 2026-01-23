import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import './HomePage.css';
import Partners from '../components/Partners';
import Publications from '../components/Publications';

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const trustIndicators = [
    { icon: "🏥", text: "Hospitals & Health Systems" },
    { icon: "🏛️", text: "Government Agencies" },
    { icon: "🌍", text: "NGOs & Global Health" },
    { icon: "🔬", text: "Research Institutions" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Header />
      <Hero />
      
      <section className="trust-indicators">
        <h2 className="trust-title">Trusted by Leading Healthcare Organizations</h2>
        <div className="trust-logos">
          {trustIndicators.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
      
      <Services />
      
      <section className="mission-section" id="about">
        <div className="mission-container">
          <div className="mission-content">
            <h2>Our Mission: Transformative AJHealth and Research Consultancy</h2>
            <p>
           Our mission is to advance health equity and system resilience in 
           Ghana by
            providing expert, integrated consultancy 
           services that translate evidence into actionable strategies, .
            </p>
            <p>
          strengthen local capacity, and optimize resource utilization across 
          public health programs, supply chains, and clinical care—ensuring quality, 
          safety, and sustainability in every intervention.
            </p>
          </div>
          <div className="mission-image">
            <span>⚕️</span>
          </div>
        </div>
      </section>
      <Team />
      
      <ContactForm />
      <Publications />
      <Partners />
      <Footer />
      
      {showScrollTop && (
        <button 
          className="scroll-top" 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;