import React, { useState, useEffect } from 'react';
import './Hero.css';

import heroImg1 from "../assets/images/conf.jpeg";
import heroImg2 from "../assets/images/our.jpeg";
import heroImg3 from "../assets/images/pic1.jpeg";
import heroImg4 from "../assets/images/pic2.jpeg";
import ajlogo from "../assets/images/AJ LOGO Transaparent.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroImages = [
    { image: heroImg1, title: "AJ Health and Research Consultancy" },
    { image: heroImg1, title: "Bridging Evidence into Action for A Healthier Ghana", description: "Independent health consultancy strengthening Ghana's health sector" },
    { image: heroImg2, title: "Evidence-Based Solutions", description: "Research, data analytics, and health economics" },
    { image: heroImg3, title: "Workforce Enhancement", description: "Mentorship and development programs" },
    { image: heroImg4, title: "Global Health Partnerships", description: "Collaborating with international organizations" }
  ];

  // Auto-rotate slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, heroImages.length]);

  const goToPrevSlide = () => setCurrentSlide(prev => (prev - 1 + heroImages.length) % heroImages.length);
  const goToNextSlide = () => setCurrentSlide(prev => (prev + 1) % heroImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="hero" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="hero-slides">
        {heroImages.map((slide, idx) => (
          <div 
            key={idx} 
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`} 
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        {heroImages.map((slide, idx) => idx === currentSlide && (
          <div key={idx} className="slide-content active">
            <h2>{slide.title}</h2>
            {slide.description && <p>{slide.description}</p>}
          </div>
        ))}

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => handleScroll('contact')}>Request Consultation</button>
          <button className="secondary-btn" onClick={() => handleScroll('services')}>Our Services</button>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="slide-dots">
        {heroImages.map((_, idx) => (
          <button key={idx} className={`dot ${idx === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(idx)} />
        ))}
      </div>

      {/* Optional arrows for tablet/desktop */}
      <button className="slide-nav prev" onClick={goToPrevSlide}>‹</button>
      <button className="slide-nav next" onClick={goToNextSlide}>›</button>
    </section>
  );
}

export default Hero;