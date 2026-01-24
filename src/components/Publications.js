import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);

  // Publication categories
  const publicationCategories = [
    {
      id: 'research',
      name: 'Research Papers',
      icon: '📄',
      color: '#2a6e6a'
    },
    {
      id: 'conferences',
      name: 'Conferences',
      icon: '🎤',
      color: '#4a9d9c'
    },
    {
      id: 'reports',
      name: 'Annual Reports',
      icon: '📊',
      color: '#2a6e6a'
    },
    {
      id: 'briefs',
      name: 'Technical Briefs',
      icon: '📋',
      color: '#4a9d9c'
    }
  ];

  // Publication data with images
  const publications = [
    {
      id: 1,
      title: 'Health Equity in Rural Communities',
      category: 'research',
      year: '2023',
      authors: 'Dr. Sarah Johnson et al.',
      description: 'Comprehensive study on healthcare access disparities in rural areas across Ghana. This research examines socioeconomic factors affecting healthcare delivery.',
      imageUrl: '/assets/images/1.jpg',
      downloadLink: '#',
      featured: true,
      stats: [
        { label: 'Duration', value: '6 months' },
        { label: 'Sites', value: '15 rural communities' },
        { label: 'Participants', value: '500+' }
      ],
      details: [
        'Examined healthcare access in 15 rural communities',
        'Collected data from 500+ participants',
        'Published in International Health Journal',
        'Used mixed-methods research approach'
      ]
    },
    {
      id: 2,
      title: 'Global Health Conference 2023',
      category: 'conferences',
      year: '2023',
      authors: 'Various Speakers',
      description: 'Proceedings from the annual global health equity conference featuring international experts discussing innovative approaches to healthcare delivery.',
      imageUrl: '/assets/images/2.jpg',
      downloadLink: '#',
      stats: [
        { label: 'Speakers', value: '25+' },
        { label: 'Countries', value: '15' },
        { label: 'Sessions', value: '30+' }
      ],
      details: [
        'Featured 25+ international speakers',
        'Representation from 15 countries',
        '30+ technical sessions',
        'Networking with 500+ professionals'
      ]
    },
    {
      id: 3,
      title: 'Annual Impact Report 2022',
      category: 'reports',
      year: '2022',
      authors: 'AJHealth Research Team',
      description: 'Comprehensive overview of our impact and achievements in advancing health equity across Sub-Saharan Africa through evidence-based interventions.',
      imageUrl: '/assets/images/1.jpg',
      downloadLink: '#',
      featured: true,
      stats: [
        { label: 'Projects', value: '50+' },
        { label: 'Partners', value: '30+' },
        { label: 'Countries', value: '10' }
      ],
      details: [
        'Implemented 50+ health equity projects',
        'Collaborated with 30+ partner organizations',
        'Worked across 10 African countries',
        'Trained 200+ healthcare professionals'
      ]
    },
    {
      id: 4,
      title: 'Data Analytics in Healthcare',
      category: 'briefs',
      year: '2023',
      authors: 'Michael Chen',
      description: 'Technical guide on using data analytics for health equity. Covers methodologies, tools, and best practices for healthcare data analysis.',
      imageUrl: '/assets/images/3.jpg',
      downloadLink: '#',
      stats: [
        { label: 'Pages', value: '85' },
        { label: 'Case Studies', value: '12' },
        { label: 'Tools Covered', value: '8' }
      ],
      details: [
        'Comprehensive 85-page technical guide',
        'Includes 12 real-world case studies',
        'Covers 8 data analytics tools',
        'Step-by-step implementation guide'
      ]
    },
    {
      id: 5,
      title: 'Maternal Health Interventions',
      category: 'research',
      year: '2023',
      authors: 'Dr. Maria Rodriguez',
      description: 'Evaluation of maternal health programs in West Africa focusing on reducing maternal mortality through community-based interventions.',
      imageUrl: '/assets/images/2.jpg',
      downloadLink: '#',
      stats: [
        { label: 'Duration', value: '18 months' },
        { label: 'Health Facilities', value: '25' },
        { label: 'Women Reached', value: '10,000+' }
      ],
      details: [
        '18-month comprehensive evaluation',
        'Covered 25 health facilities',
        'Reached 10,000+ women',
        'Reduced maternal mortality by 30%'
      ]
    }
  ];

  // Filter publications based on active filter
  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter);

  // Open image modal
  const openImageModal = (imageUrl, title) => {
    setSelectedImage({ imageUrl, title });
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Select project
  const selectProject = (index) => {
    setSelectedProject(index);
  };

  return (
    <section id="publications" className="publications-section">
      <div className="publications-container">
        {/* Header */}
        <div className="publications-header">
          <h2>Conferences and Mentorship</h2>
          <p className="publications-subtitle">
          This section highlights the conferences participated in and the sessions 
          undertaken, showcasing our contributions through presentations, 
          panel discussions, workshops, and knowledge-sharing engagements
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          {publicationCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              style={{ '--category-color': category.color }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="publications-two-column">
          {/* LEFT COLUMN - Image Gallery */}
          <div className="image-gallery-column">
            <div className="gallery-header">
              <h3>Project Gallery</h3>
              <p>Click on any image to view details</p>
            </div>
            
            <div className="image-gallery">
              {filteredPublications.map((publication, index) => (
                <div 
                  key={publication.id}
                  className={`gallery-item ${index === selectedProject ? 'active' : ''}`}
                  onClick={() => selectProject(index)}
                >
                  <div className="gallery-image-container">
                    <img 
                      src={publication.imageUrl} 
                      alt={publication.title}
                      className="gallery-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        openImageModal(publication.imageUrl, publication.title);
                      }}
                    />
                    <div className="gallery-overlay">
                      <span className="view-full">View Full</span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="category-badge">
                      {publicationCategories.find(c => c.id === publication.category)?.icon}
                    </div>
                    
                    {/* Featured Badge */}
                    {publication.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                  </div>
                  
                  <div className="gallery-caption">
                    <h4>{publication.title}</h4>
                    <p className="gallery-category">{publication.category}</p>
                    <p className="gallery-year">{publication.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Project Details */}
          <div className="project-details-column">
            <div className="project-details-container">
              {filteredPublications.length > 0 ? (
                <>
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="project-category">
                        {filteredPublications[selectedProject].category.toUpperCase()}
                      </span>
                      <span className="project-year">
                        {filteredPublications[selectedProject].year}
                      </span>
                    </div>
                    
                    <h3 className="project-title">
                      {filteredPublications[selectedProject].title}
                    </h3>
                    
                    <p className="project-authors">
                      {filteredPublications[selectedProject].authors}
                    </p>
                    
                    {filteredPublications[selectedProject].featured && (
                      <div className="project-featured-badge">
                        <span className="featured-star">★</span> Featured Project
                      </div>
                    )}
                  </div>

                  <div className="project-description">
                    <p>{filteredPublications[selectedProject].description}</p>
                  </div>

                  {/* Project Stats */}
                  <div className="project-stats">
                    <h4>Project Highlights</h4>
                    <div className="stats-grid">
                      {filteredPublications[selectedProject].stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="project-details-list">
                    <h4>Key Achievements</h4>
                    <ul className="details-list">
                      {filteredPublications[selectedProject].details.map((detail, index) => (
                        <li key={index}>
                          <span className="check-icon">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="project-actions">
                    <button 
                      className="view-image-btn"
                      onClick={() => openImageModal(
                        filteredPublications[selectedProject].imageUrl,
                        filteredPublications[selectedProject].title
                      )}
                    >
                      <span className="btn-icon">🖼️</span>
                      View Full Image
                    </button>
                    
                    <a 
                      href={filteredPublications[selectedProject].downloadLink}
                      className="download-report-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading: ${filteredPublications[selectedProject].title}`);
                      }}
                    >
                      <span className="btn-icon">📥</span>
                      Download Full Report
                    </a>
                    
                    <button className="learn-more-btn">
                      <span className="btn-icon">📚</span>
                      Learn More About This Project
                    </button>
                  </div>
                </>
              ) : (
                <div className="no-projects">
                  <div className="no-projects-icon">📄</div>
                  <h3>No Projects Found</h3>
                  <p>Try selecting a different category or check back later.</p>
                </div>
              )}
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
              <div className="modal-caption">
                <h3>{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;