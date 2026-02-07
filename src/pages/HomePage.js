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
import Mentorship from '../components/Mentorship';
import image1 from "../assets/images/ourmis.jpeg"
import { 
 FaHospital,
 
} from 'react-icons/fa'; // Feather icons (clean, professional)
// Alternatively use: egChartBar, FaRegChartPie, etc from 'react-icons/fa
const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const trustIndicators = [
    { icon: FaHospital, text: "Hospitals & Health Systems" },
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
          <div className="mission-content" style={{textAlign:"left"}}>
            <h2>Our Mission</h2>
            <p>At AJ Health and Research Consultancy, 
              our mission is to advance health and strengthen 
              system resilience across Ghana. We provide expert, 
              integrated consultancy services that translate evidence into action, build local capacity, and optimize resources across public health programs, supply chains, and clinical care ensuring quality,
               safety, and sustainability in every intervention.</p>
 
          </div>
          <div className="mission-image">
            <span><img style={{width:700,height:400}} src={image1} /></span>
          </div>
        </div>
      </section>
      <Team />
      
      <ContactForm />
 
      <Mentorship />
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