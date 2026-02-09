import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import your hero images
import heroImg1 from "../assets/images/conf.jpeg";
import heroImg2 from "../assets/images/our.jpeg";
import heroImg3 from "../assets/images/pic1.jpeg";
import heroImg4 from "../assets/images/pic2.jpeg";
import ajlogo from "../assets/images/AJ LOGO Transaparent.png";

 const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Array of hero images
  const heroImages = [
    {
      image: heroImg1,
      icon : ajlogo,
      title: "AJ Health and Research Consultancy",
      description: "We are an independent health and research consultancy dedicated to strengthening Ghana's health sector"
    },
    {
      image: heroImg1,
      title: "Bridging Evidence into Action for A Healthier Ghana",
      description: "We are an independent health and research consultancy dedicated to strengthening Ghana's health sector"
    },
    {
      image: heroImg2,
      title: "Evidence-Based Solutions",
      description: "Specializing in research, data analytics, and health economics to drive"
    },
    {
      image: heroImg3,
      title: " Workforce Enhancement",
      description: "Mentorship and development programs for healthcare professionals."
    },
    {
      image: heroImg4,
      title: "Global Health Partnerships",
      description: "Collaborating with international organizations to advance health and sustainable development."
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
    { value: "100+", label: "Health Projects" },
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
                   linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)),
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
                    {" "}
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