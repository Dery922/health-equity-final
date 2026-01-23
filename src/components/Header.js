import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from "../assets/images/AJ LOGO Transaparent.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Home', path: '#home' },
    { label: 'About Us', path: '#about' },
    { label: 'Services', path: '#services' },
    { label: 'Mission', path: '/mission' },
    { label: 'Publications', path: '#publications' },
    { label: 'Partners', path: '#partners' },
  
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (path, e) => {
    e.preventDefault();
    const id = path.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

<div className="logo">
  <img 
    src={logoImage} 
    style={{width: 89, height: 89}}  
    alt="AJHealth Logo" 
    className="logo-image"
  />
</div>
        
        {/* Hamburger Menu Button - ALWAYS VISIBLE */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="nav-link"
              onClick={(e) => handleNavClick(item.path, e)}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="desktop-cta-button"
            onClick={(e) => handleNavClick('#contact', e)}
          >
            Get Started
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(item.path, e)}
            >
              {item.label}
            </a>
          ))}
          <button 
            className="mobile-cta-button"
            onClick={(e) => handleNavClick('#contact', e)}
          >
           Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;