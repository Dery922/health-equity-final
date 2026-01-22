import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState({});
  const navRef = useRef(null);

  // Navigation data
  const navItems = [
    { id: 'home', label: 'Home', path: '#home' },
    {
      id: 'about',
      label: 'About Us',
      children: [
        { id: 'story', label: 'Our Story', path: '#about-story' },
        { id: 'vision', label: 'Vision', path: '#about-vision' },
        { id: 'mission', label: 'Mission', path: '#about-mission' },
        { id: 'values', label: 'Core Values', path: '#about-values' },
        { id: 'team', label: 'Core Team', path: '#about-team' }
      ]
    },
    {
      id: 'services',
      label: 'What We Do',
      children: [
        { id: 'research', label: 'Research', path: '#services-research' },
        { id: 'analytics', label: 'Data Analytics', path: '#services-analytics' },
        { id: 'project', label: 'Project Management', path: '#services-project' },
        { id: 'economics', label: 'Health Economics Evaluation', path: '#services-economics' },
        { id: 'logistics', label: 'Logistics & Supply Chain', path: '#services-logistics' }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      children: [
        { id: 'reports', label: 'Annual Reports', path: '#resources-reports' },
        { id: 'briefs', label: 'Technical Briefs', path: '#resources-briefs' }
      ]
    },
    {
      id: 'publications',
      label: 'Publications',
      children: [
        { id: 'papers', label: 'Research Papers', path: '#publications-papers' },
        { id: 'conferences', label: 'Conferences', path: '#publications-conferences' }
      ]
    },
    { id: 'partners', label: 'Donors / Partners', path: '#partners' },
    { id: 'contact', label: 'Contact', path: '#contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setActiveDropdown({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setActiveDropdown(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle navigation click
  const handleNavClick = (item, e) => {
    if (item.children) {
      return; // Let dropdown handle it
    }
    
    if (item.path) {
      e.preventDefault();
      const id = item.path.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
      setActiveDropdown({});
    }
  };

  // Handle link click
  const handleLinkClick = (path, e) => {
    e.preventDefault();
    const id = path.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
    setActiveDropdown({});
  };

  // Render desktop navigation
  const renderDesktopNav = () => (
    <nav className="nav desktop-nav">
      {navItems.map(item => (
        <div key={item.id} className={`nav-item ${item.children ? 'has-dropdown' : ''}`}>
          {item.children ? (
            <>
              <button
                className="nav-link dropdown-toggle"
                onClick={(e) => toggleDropdown(item.id, e)}
                onMouseEnter={() => setActiveDropdown(prev => ({ ...prev, [item.id]: true }))}
              >
                {item.label}
                <span className="dropdown-arrow">⌄</span>
              </button>
              {activeDropdown[item.id] && (
                <div 
                  className="dropdown"
                  onMouseLeave={() => setActiveDropdown(prev => ({ ...prev, [item.id]: false }))}
                >
                  <div className="dropdown-content">
                    {item.children.map(child => (
                      <a
                        key={child.id}
                        href={child.path}
                        className="dropdown-item"
                        onClick={(e) => handleLinkClick(child.path, e)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <a
              href={item.path}
              className="nav-link"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
      <button 
        className="desktop-cta-button"
        onClick={() => handleLinkClick('#contact')}
      >
        Get Started
      </button>
    </nav>
  );

  // Render mobile navigation
  const renderMobileNav = () => (
    <nav className={`nav mobile-nav ${menuOpen ? 'open' : ''}`}>
      {navItems.map(item => (
        <div key={item.id} className="mobile-nav-item">
          {item.children ? (
            <>
              <button
                className={`mobile-dropdown-toggle ${activeDropdown[item.id] ? 'active' : ''}`}
                onClick={(e) => toggleDropdown(item.id, e)}
              >
                {item.label}
                <span className="dropdown-arrow">›</span>
              </button>
              <div className={`mobile-dropdown ${activeDropdown[item.id] ? 'open' : ''}`}>
                <div className="dropdown-content">
                  {item.children.map(child => (
                    <a
                      key={child.id}
                      href={child.path}
                      className="dropdown-item"
                      onClick={(e) => handleLinkClick(child.path, e)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <a
              href={item.path}
              className="nav-link"
              onClick={(e) => handleNavClick(item, e)}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
      <button 
        className="mobile-cta-button"
        onClick={() => handleLinkClick('#contact')}
      >
        Get Started
      </button>
    </nav>
  );

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="header-container">
        <div className="logo">
          <h1>HealthEquity<span>Consult</span></h1>
          <p>Advancing Health Equity Worldwide</p>
        </div>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav-wrapper">
          {renderDesktopNav()}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Mobile Navigation */}
        <div className="mobile-nav-wrapper">
          {renderMobileNav()}
        </div>
      </div>
    </header>
  );
};

export default Header;