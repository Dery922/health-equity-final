import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import your hero images
import heroImg1 from "../assets/images/1.jpg";
import heroImg2 from "../assets/images/2.jpg";
import heroImg3 from "../assets/images/3.jpg";
import heroImg4 from "../assets/images/4.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Array of hero images
  const heroImages = [
    {
      image: heroImg1,
      title: "Transforming Ideas into Lasting Impact",
      description: "At AJHealth.Research we empower change-makers to create sustainable solutions that improve lives across sub-Saharan Africa."
    },
    {
      image: heroImg2,
      title: "Evidence-Based Solutions",
      description: "Specializing in research, data analytics, and health economics to drive meaningful change in healthcare systems."
    },
    {
      image: heroImg3,
      title: "Capacity Building & Mentorship",
      description: "Empowering healthcare professionals through hands-on training and mentorship programs across Africa."
    },
    {
      image: heroImg4,
      title: "Global Health Partnerships",
      description: "Collaborating with international organizations to advance health equity and sustainable development."
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, heroImages.length]);

  // Manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

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
    <section 
      className="hero" 
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - All loaded but only current visible */}
      <div className="hero-slides">
        {heroImages.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `
                linear-gradient(rgba(29, 80, 77, 0.7), rgba(42, 110, 106, 0.8)),
                url(${slide.image})
              `
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slide-nav prev"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button 
        className="slide-nav next"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Slide Dots/Indicators */}
      <div className="slide-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="slide-content-wrapper">
          {heroImages.map((slide, index) => (
            <div
              key={index}
              className={`slide-content ${index === currentSlide ? 'active' : ''}`}
            >
              <h2>{slide.title}</h2>
              <p>
                {slide.description}
                {index === 0 && (
                  <>
                    {" "}As a not-for-profit firm, we specialize in supporting 
                    businesses and nonprofits in navigating challenges and 
                    unlocking opportunities in the areas of research, data analytics, 
                    health economics evaluation, and project management.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleContactClick}>
            Request Consultation
          </button>
          <button className="secondary-btn" onClick={handleServicesClick}>
            Our Services
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="hero-stats">
        {/* {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default Hero;