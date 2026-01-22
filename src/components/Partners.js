import React, { useState, useEffect, useRef } from 'react';
import './Partners.css';

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Partners data
  const partners = [
    { id: 1, name: "World Health Organization", logo: "🌍", type: "International Agency" },
    { id: 2, name: "UNICEF", logo: "👶", type: "UN Agency" },
    { id: 3, name: "Gates Foundation", logo: "🏛️", type: "Foundation" },
    { id: 4, name: "Harvard University", logo: "🎓", type: "Academic" },
    { id: 5, name: "USAID", logo: "🇺🇸", type: "Government" },
    { id: 6, name: "European Union", logo: "🇪🇺", type: "Regional" },
    { id: 7, name: "Global Fund", logo: "🌐", type: "NGO" },
    { id: 8, name: "Johns Hopkins", logo: "🎓", type: "Academic" },
    { id: 9, name: "African Union", logo: "🌍", type: "Regional" },
    { id: 10, name: "Rockefeller Foundation", logo: "🏛️", type: "Foundation" },
    { id: 11, name: "Pfizer Foundation", logo: "💊", type: "Corporate" },
    { id: 12, name: "Doctors Without Borders", logo: "⚕️", type: "NGO" }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % partners.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, partners.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? partners.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === partners.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Calculate visible partners based on screen size
  const getVisibleCount = () => {
    if (window.innerWidth >= 1200) return 5;
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 576) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visiblePartners = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % partners.length;
    visiblePartners.push(partners[index]);
  }

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        {/* Header */}
        <div className="partners-header">
          <h2>Our Partners & Donors</h2>
          <p className="partners-subtitle">
            Collaborating with leading global organizations committed to advancing health equity
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          {/* Navigation Buttons */}
          <button className="carousel-btn prev-btn" onClick={goToPrev}>
            ‹
          </button>
          
          {/* Carousel */}
          <div className="carousel">
            <div className="carousel-track">
              {visiblePartners.map((partner, index) => (
                <div key={partner.id} className="partner-card">
                  <div className="partner-logo">{partner.logo}</div>
                  <div className="partner-info">
                    <h4>{partner.name}</h4>
                    <p>{partner.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={goToNext}>
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {partners.slice(0, Math.ceil(partners.length / visibleCount)).map((_, index) => (
            <button
              key={index}
              className={`dot ${Math.floor(currentIndex / visibleCount) === index ? 'active' : ''}`}
              onClick={() => goToSlide(index * visibleCount)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="partners-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Partners Worldwide</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">$10M+</div>
            <div className="stat-label">Funding Mobilized</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Joint Projects</div>
          </div>
        </div>

        {/* CTA */}
        <div className="partners-cta">
          <button 
            className="cta-button"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) {
                contact.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Become Our Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;