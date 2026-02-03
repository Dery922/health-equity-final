import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CareerPage.css';
import Header from './Header';
import logoImage from "../assets/images/newLogo.png";
import Footer from './Footer';

const CareerPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="career-page">
      {/* Header/Navigation */}

      <header className="career-header">
        <div className="career-header-container">
          <Link to="/" className="career-logo">
          <img 
          src={logoImage}   
          alt="AJHealth Logo" 
          className="logo-image"
        /> 
            {/* <h1>AJHealth<span> and Research Consultancy</span></h1> */}
          </Link>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="career-main">
        <div className="career-container">
          {/* Icon */}
          <div className="career-icon">
            📋
          </div>

          {/* Title */}
          <h1 className="career-title">Career Opportunities</h1>

          {/* Message */}
          <div className="career-message">
            <h2>No Open Positions Available</h2>
            <p>
              We appreciate your interest in joining our team at AJ Health and Research Consultancy. 
              Currently, we do not have any open positions available.
            </p>
          </div>

          {/* Why Check Back */}
          <div className="check-back-section">
            <h3>Why Check Back Later?</h3>
            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">🚀</div>
                <h4>Growing Organization</h4>
                <p>We're expanding our team as we take on new projects and initiatives.</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🌟</div>
                <h4>Future Opportunities</h4>
                <p>New positions may open as we continue to grow and evolve our services.</p>
              </div>
              <div className="reason-card">
                <div className="reason-icon">🌍</div>
                <h4>Global Impact</h4>
                <p>Join us in making a difference in health worldwide.</p>
              </div>
            </div>
          </div>

          {/* What We Look For */}
          <div className="looking-for-section">
            <h3>What We Look For in Team Members</h3>
            <ul className="qualities-list">
              <li>Passion for health and social justice</li>
              <li>Expertise in healthcare, research, or data analytics</li>
              <li>Collaborative mindset and strong communication skills</li>
              <li>Commitment to evidence-based practice</li>
              <li>Adaptability in diverse healthcare settings</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="career-cta">
            <h3>Stay Connected</h3>
            <p>
              Follow us on social media or check back here regularly for updates on future opportunities.
            </p>
            <div className="cta-buttons">
              <button 
                className="subscribe-btn"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Subscribe for Updates
              </button>
              <Link to="/publications" className="explore-btn">
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Next Check Date */}
          <div className="next-check">
            <div className="calendar-icon">📅</div>
            <p>We recommend checking back in <strong>30 days</strong> for potential updates.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="career-footer">
        <div className="career-footer-container">
          <p>© {new Date().getFullYear()} Health Consultancy Services</p>
          <p>Advancing health  through evidence-based consultancy</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="/#contact">Contact</a>
            <a href="/#services">Services</a>
          </div>
        </div>
      </footer> */}

      <Footer />
    </div>
  );
};

export default CareerPage;