import React, { useState } from 'react';
import './Mentorship.css';

import heroImg1 from "../assets/images/m1.jpeg";
import heroImg2 from "../assets/images/m2.jpeg";
import heroImg3 from "../assets/images/m3.jpeg";

import conf from "../assets/images/conf.jpeg";
import conf2 from "../assets/images/conf2.jpeg";

import menteeImg1 from "../assets/images/mentee1.jpeg";
import menteeImg2 from "../assets/images/mentee2.jpeg";
import menteeImg3 from "../assets/images/mentee3.jpeg";
import menteeImg4 from "../assets/images/mentee4.jpeg";


import menteeImg5 from "../assets/images/menteer15.jpeg";
import menteeImg6 from "../assets/images/menteer16.jpeg";
import menteeImg7 from "../assets/images/mentee10.jpeg";
import menteeImg8 from "../assets/images/mentee11.jpeg";

const Mentorship = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Mentorship categories
  const categories = [
    { id: 'all', name: 'All Activities' },
    { id: 'conferences', name: 'Conferences', icon: '👨‍🏫' },
    { id: 'mentorship', name: 'Mentees', icon: '🎤' },
 
  ];

  // Mentorship activities with images
  const mentorshipActivities = [

    
 
    {
      id: 5,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg1,
      attendees: '200+ Online Participants',
      featured: false
    },
                    {
      id: 12,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg6,
      attendees: '200+ Online Participants',
      featured: false
    },
       
        {
      id: 6,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg2,
      attendees: '200+ Online Participants',
      featured: false
    },
        {
      id: 7,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg3,
      attendees: '200+ Online Participants',
      featured: false
    },
    {
      id: 8,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg4,
      attendees: '200+ Online Participants',
      featured: false
    },
                    {
      id: 14,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg8,
      attendees: '200+ Online Participants',
      featured: false
    },
        {
      id: 9,
      title: 'Global Health Seminar Series',
      category: 'conferences',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: conf,
      attendees: '200+ Online Participants',
      featured: false
    },
        {
      id: 10,
      title: 'Global Health Seminar Series',
      category: 'conferences',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: conf2,
      attendees: '200+ Online Participants',
      featured: false
    },
            {
      id: 11,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg5,
      attendees: '200+ Online Participants',
      featured: false
    },
         {
      id: 13,
      title: 'Global Health Seminar Series',
      category: 'mentees',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: menteeImg7,
      attendees: '200+ Online Participants',
      featured: false
    },

    // Add more images here as needed
  ];

  // Filter activities based on active tab
  const filteredActivities = activeTab === 'all' 
    ? mentorshipActivities 
    : mentorshipActivities.filter(activity => activity.category === activeTab);

  // Open lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image
  const nextImage = () => {
    setLightboxIndex((prevIndex) => 
      (prevIndex + 1) % filteredActivities.length
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredActivities.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section id="mentorship" className="mentorship-section">
      <div className="mentorship-container">
        {/* Header */}
        <div className="mentorship-header">
          <h2>Gallery</h2>
          <p className="mentorship-subtitle">
            Browse through our mentorship activities, workshops, and training sessions. 
            Click on any image to view it in full size.
          </p>
        </div>


        {/* Filter Tabs */}
        <div className="mentorship-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.icon && <span className="tab-icon">{category.icon}</span>}
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Updated */}
        <div className="gallery-grid">
          {filteredActivities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`gallery-item ${activity.featured ? 'featured' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-container">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <span className="view-icon">🔍</span>
                    <span className="view-text">Click to View</span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  {categories.find(c => c.id === activity.category)?.icon}
                  <span>{activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}</span>
                </div>
                
                {/* Featured Badge */}
                {activity.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              {/* Gallery Item Info */}
      
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mentorship-cta">
          <div className="cta-content">
            <h3>Join Our Mentorship Program</h3>
            <p>
              Whether you're a healthcare professional, researcher, or student, 
              our mentorship programs offer valuable opportunities for growth and development.
            </p>
            <div className="cta-buttons">
              <button 
                className="primary-cta"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) {
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply Now
              </button>
              <button 
                className="secondary-cta"
                onClick={() => alert('Program brochure will be downloaded')}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && filteredActivities[lightboxIndex] && (
        <div className="lightbox" onClick={closeLightbox}>
          <button 
            className="lightbox-close" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          <button 
            className="lightbox-nav prev" 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <button 
            className="lightbox-nav next" 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={filteredActivities[lightboxIndex].imageUrl} 
                alt={filteredActivities[lightboxIndex].title}
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-info">
              <div className="lightbox-header">
                <span className="lightbox-category">
                  {filteredActivities[lightboxIndex].category.charAt(0).toUpperCase() + 
                   filteredActivities[lightboxIndex].category.slice(1)}
                </span>
                <span className="lightbox-counter">
                  {lightboxIndex + 1} / {filteredActivities.length}
                </span>
              </div>
              

              
              {filteredActivities[lightboxIndex].featured && (
                <span className="lightbox-featured">⭐ Featured Activity</span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentorship;