import React, { useState } from 'react';
import './Mentorship.css';

import heroImg1 from "../assets/images/m1.jpeg";
import heroImg2 from "../assets/images/m2.jpeg";
import heroImg3 from "../assets/images/m3.jpeg";


const Mentorship = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Mentorship categories
  const categories = [
    { id: 'all', name: 'All Activities' },
    { id: 'workshops', name: 'Workshops', icon: '👨‍🏫' },
    { id: 'seminars', name: 'Seminars', icon: '🎤' },
    { id: 'training', name: 'Training Sessions', icon: '👥' },
    { id: 'field', name: 'Field Work', icon: '🌍' }
  ];

  // Mentorship activities with images
  const mentorshipActivities = [
    {
      id: 1,
      title: 'Health Research Methodology Workshop',
      category: 'workshops',
      date: 'March 2024',
      location: 'Accra, Ghana',
      description: 'Training early-career researchers in advanced health research methodologies.',
      imageUrl: heroImg1,
      attendees: '50+ Participants',
      featured: true
    },
    {
      id: 2,
      title: 'Data Analytics Training',
      category: 'training',
      date: 'February 2024',
      location: 'Kumasi, Ghana',
      description: 'Hands-on training in healthcare data analysis using modern tools.',
      imageUrl: heroImg2,
      attendees: '35 Health Professionals',
      featured: true
    },
    {
      id: 3,
      title: 'Global Health Seminar Series',
      category: 'seminars',
      date: 'January 2024',
      location: 'Virtual',
      description: 'Monthly seminars featuring global health experts and practitioners.',
      imageUrl: heroImg3,
      attendees: '200+ Online Participants',
      featured: false
    },



  ];

  // Filter activities based on active tab
  const filteredActivities = activeTab === 'all' 
    ? mentorshipActivities 
    : mentorshipActivities.filter(activity => activity.category === activeTab);

  // Open image modal
  const openImageModal = (activity) => {
    setSelectedImage(activity);
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && selectedImage) {
      closeImageModal();
    }
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="mentorship" className="mentorship-section">
      <div className="mentorship-container">
        {/* Header */}
        <div className="mentorship-header">
          <h2>Mentorship & Capacity Building</h2>
          <p className="mentorship-subtitle">
            Empowering healthcare professionals through hands-on training, workshops, 
            and field experiences to advance health equity expertise.
          </p>
        </div>

        {/* Stats */}
        <div className="mentorship-stats">
          <div className="stat-card">
            <div className="stat-icon">👨‍🎓</div>
            <div className="stat-content">
              <h3>500+</h3>
              <p>Professionals Trained</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏛️</div>
            <div className="stat-content">
              <h3>50+</h3>
              <p>Workshops Conducted</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌍</div>
            <div className="stat-content">
              <h3>15</h3>
              <p>Countries Reached</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🤝</div>
            <div className="stat-content">
              <h3>100+</h3>
              <p>Partner Institutions</p>
            </div>
          </div>
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

        {/* Gallery Grid */}
        <div className="mentorship-gallery">
          {filteredActivities.map(activity => (
            <div 
              key={activity.id} 
              className={`gallery-item ${activity.featured ? 'featured' : ''}`}
              onClick={() => openImageModal(activity)}
            >
              {/* Image */}
              <div 
                className="activity-image"
                style={{ backgroundImage: `url(${activity.imageUrl})` }}
              >
                <div className="image-overlay">
                  <span className="view-text">View Details</span>
                </div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  {categories.find(c => c.id === activity.category)?.icon}
                  {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                </div>
                
                {/* Featured Badge */}
                {activity.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              {/* Activity Info */}
              <div className="activity-info">
                <div className="activity-meta">
                  <span className="activity-date">{activity.date}</span>
                  <span className="activity-location">{activity.location}</span>
                </div>
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.description}</p>
                <div className="activity-footer">
                  <span className="attendees">{activity.attendees}</span>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              &times;
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="modal-image"
              />
            </div>
            
            <div className="modal-info">
              <div className="modal-header">
                <span className="modal-category">
                  {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                </span>
                <span className="modal-date">{selectedImage.date}</span>
              </div>
              
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-location">{selectedImage.location}</p>
              <p className="modal-description">{selectedImage.description}</p>
              <p className="modal-attendees">
                <strong>Participants:</strong> {selectedImage.attendees}
              </p>
              
              <div className="modal-actions">
                <button 
                  className="modal-button"
                  onClick={() => {
                    const contact = document.getElementById('contact');
                    if (contact) {
                      closeImageModal();
                      contact.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Join Similar Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentorship;