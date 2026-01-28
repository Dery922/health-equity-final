import React, { useState, useEffect, useRef } from 'react';
import './Partners.css';

// Import your partner logo images
import partnerImg1 from "../assets/images/ghanacollege.jpeg";
import partnerImg2 from "../assets/images/ghanahealth.jpeg";
import partnerImg3 from "../assets/images/ghanahealth.jpeg";
import partnerPlaceholder1 from "../assets/images/m1.jpeg";
import partnerPlaceholder2 from "../assets/images/m2.jpeg";
import partnerPlaceholder3 from "../assets/images/m3.jpeg";

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Partners data
  const partners = [
    { 
      id: 1, 
      name: "Ghana Health Service", 
      logo: partnerImg2, 
      type: "Government Agency" 
    },
    { 
      id: 2, 
      name: "Health Access Network", 
      logo: partnerPlaceholder1,
      type: "Health NGO" 
    },
    { 
      id: 3, 
      name: "Ghana College of Pharmacists", 
      logo: partnerImg1, 
      type: "Professional Body" 
    },
    { 
      id: 4, 
      name: "National AIDS/STI Control Program", 
      logo: partnerPlaceholder2,
      type: "Government Program" 
    },
    { 
      id: 5, 
      name: "Health Keepers Network", 
      logo: partnerPlaceholder3,
      type: "Community Organization" 
    },
    { 
      id: 6, 
      name: "Buni Banda Initiative", 
      logo: partnerImg3, 
      type: "Regional Partner" 
    },
    { 
      id: 7, 
      name: "Global Health Initiative", 
      logo: partnerPlaceholder1, 
      type: "International Agency" 
    },
    { 
      id: 8, 
      name: "Africa CDC", 
      logo: partnerPlaceholder2, 
      type: "Regional Health Body" 
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= partners.length - visibleSlides) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, partners.length, visibleSlides]);

  // Handle visible slides based on screen size
  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleSlides(5);
      else if (width >= 992) setVisibleSlides(4);
      else if (width >= 768) setVisibleSlides(3);
      else if (width >= 576) setVisibleSlides(2);
      else setVisibleSlides(1);
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  // Manual navigation
  const goToPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return partners.length - visibleSlides;
      }
      return prev - 1;
    });
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= partners.length - visibleSlides) {
        return 0;
      }
      return prev + 1;
    });
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Get visible partners for current view
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < visibleSlides; i++) {
      const index = (currentIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  const visiblePartners = getVisiblePartners();

  // Calculate total pages for dots
  const totalPages = Math.ceil(partners.length / visibleSlides);

  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        {/* Header */}
        <div className="partners-header">
          <h2>Our Trusted Partners</h2>
          <p className="partners-subtitle">
            Collaborating with leading organizations to advance health across Africa
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button 
            className="carousel-nav prev"
            onClick={goToPrev}
            aria-label="Previous partners"
          >
            ‹
          </button>

          {/* Carousel */}
          <div className="carousel-container">
            <div 
              className="carousel-track"
              ref={carouselRef}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`
              }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="partner-slide"
                >
                  <div className="partner-card">
                    <div className="partner-logo-container">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="partner-logo"
                        loading="lazy"
                      />
                      <div className="logo-overlay">
                        <span className="view-text">View Details</span>
                      </div>
                    </div>
                    
                    <div className="partner-info">
                      <h4 className="partner-name">{partner.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav next"
            onClick={goToNext}
            aria-label="Next partners"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${currentIndex === index * visibleSlides ? 'active' : ''}`}
              onClick={() => goToSlide(index * visibleSlides)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        {/* <div className="partners-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Trusted Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Joint Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years of Partnership</div>
          </div>
        </div> */}

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
          <p className="cta-subtext">
            Join our network of organizations dedicated to improving global health outcomes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;