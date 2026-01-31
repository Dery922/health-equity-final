import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const socialLinks = [
    { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/company/aj-health-consult/' },
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/ajhealth.research/' },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AJ Health & Research Consultancy</h3>
          <p>
            Driving health impact through research,
            innovation & Systens Strenghtening 
            
          </p>
          <div className="social-links">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url} 
                className="social-icon" 
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#resources">Resources</a>
          <a href="#publications">Publications</a>
          <a href="#partners">Partners</a>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <a href="#services">Research</a>
          <a href="#services">Data Analytics</a>
          <a href="#services">Project Management</a>
          <a href="#services">Health Economics</a>
          <a href="#services">Logistics & Supply Chain</a>
        </div>
        
        <div className="footer-section">
          <h4>Stay Updated</h4>
          <p>
            Subscribe to our newsletter for the latest in AJhealth 
            research consultancy and insights.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AJ Health and Research Consultancy. 
          All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;