import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from "../assets/images/newLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);

  // Navigation items with dropdowns
  const navItems = [
    { label: 'Home', path: '#home' },
    { 
      label: 'About Us', 
      path: '#about',
      dropdown: [
        { label: 'Our Story', path: '#story' },
        { label: 'Our Team', path: '#team' },
        { label: 'Our Mission', path: '#mission' },
      ]
    },
    { 
      label: 'Services', 
      path: '#services',
      dropdown: [
        { label: 'Research & Analytics', path: '#research' },
        { label: 'Health Economics', path: '#economics' },
        { label: 'Project Management', path: '#projects' },
        { label: 'Training & Capacity Building', path: '#training' },
      ]
    },
    { 
      label: 'Our Work', 
      path: '#work',
      dropdown: [
        { label: 'Publications', path: '#publications' },
        { label: 'Case Studies', path: '#cases' },
        { label: 'Success Stories', path: '#success' },
      ]
    },
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
    setMobileDropdownOpen(null);
    setDesktopDropdownOpen(null);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (index, e) => {
    e.preventDefault();
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  // Toggle desktop dropdown
  const toggleDesktopDropdown = (index, isHover = false) => {
    if (isHover) {
      setDesktopDropdownOpen(index);
    } else {
      setDesktopDropdownOpen(desktopDropdownOpen === index ? null : index);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
    setMobileDropdownOpen(null);
    setDesktopDropdownOpen(null);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img 
            src={logoImage} 
            style={{width: 450, height: 120}}  
            alt="AJHealth Logo" 
            className="logo-image"
          />
          {/* <div className="logo-text">
            <h1><Link to="/">AJHealth</Link></h1>
            <p>Evidence to Action, Healthier Ghana</p>
          </div> */}
        </div>
        
        {/* Hamburger Menu Button */}
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
            <div 
              key={index}
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.dropdown && toggleDesktopDropdown(index, true)}
              onMouseLeave={() => item.dropdown && setDesktopDropdownOpen(null)}
            >
              <a
                href={item.path}
                className="nav-link"
                onClick={(e) => handleNavClick(item.path, e)}
              >
                {item.label}
                {item.dropdown && (
                  <span className="dropdown-arrow">▾</span>
                )}
              </a>
              
              {item.dropdown && desktopDropdownOpen === index && (
                <div className="dropdown">
                  <div className="dropdown-content">
                    {item.dropdown.map((dropdownItem, dIndex) => (
                      <a
                        key={dIndex}
                        href={dropdownItem.path}
                        className="dropdown-item"
                        onClick={(e) => handleNavClick(dropdownItem.path, e)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button 
            className="desktop-cta-button"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item.dropdown ? (
                <>
                  <button 
                    className={`mobile-dropdown-toggle ${mobileDropdownOpen === index ? 'active' : ''}`}
                    onClick={(e) => toggleMobileDropdown(index, e)}
                  >
                    {item.label}
                    <span className="dropdown-arrow">▸</span>
                  </button>
                  <div className={`mobile-dropdown ${mobileDropdownOpen === index ? 'open' : ''}`}>
                    {item.dropdown.map((dropdownItem, dIndex) => (
                      <a
                        key={dIndex}
                        href={dropdownItem.path}
                        className="dropdown-item"
                        onClick={(e) => handleNavClick(dropdownItem.path, e)}
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.path}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(item.path, e)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <button 
            className="mobile-cta-button"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;