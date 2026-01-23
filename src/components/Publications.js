import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

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
      ]
    }
  ];

  // Filter publications based on active filter
  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter);

  // Open image modal
  const openImageModal = (publication) => {
    setSelectedImage(publication);
    document.body.style.overflow = 'hidden';
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="publications" className="publications-section">
      <div className="publications-container">
        {/* Header */}
        <div className="publications-header">
          <h2>Publications & Resources</h2>
          <p className="publications-subtitle">
            Explore our research papers, conference proceedings, annual reports, 
            and technical briefs that advance health equity knowledge and practice.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Publications
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

        {/* Publications List - New Layout */}
        <div className="publications-list">
          {filteredPublications.map(publication => (
            <div 
              key={publication.id} 
              className={`publication-item ${publication.featured ? 'featured' : ''}`}
            >
              {/* Left Side - Image */}
              <div className="publication-image-side">
                <div 
                  className="publication-image-container"
                  onClick={() => openImageModal(publication)}
                >
                  <img 
                    src={publication.imageUrl} 
                    alt={publication.title}
                    className="publication-image"
                  />
                  <div className="image-overlay">
                    <span className="view-text">Click to Enlarge</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="category-badge">
                    {publicationCategories.find(c => c.id === publication.category)?.icon}
                    {publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
                  </div>
                  
                  {/* Featured Badge */}
                  {publication.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="publication-content-side">
                <div className="publication-header">
                  <div className="publication-meta">
                    <span className="year">{publication.year}</span>
                    <span className="category-tag">
                      {publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="publication-title">{publication.title}</h3>
                  <p className="publication-authors">{publication.authors}</p>
                </div>

                <div className="publication-description">
                  <p>{publication.description}</p>
                </div>

                {/* Stats */}
                <div className="publication-stats">
                  {publication.stats && publication.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="publication-actions">
                  <button 
                    className="view-btn"
                    onClick={() => openImageModal(publication)}
                  >
                    <span className="btn-icon">👁️</span>
                    View Full Details
                  </button>
                  <a 
                    href={publication.downloadLink} 
                    className="download-btn"
                    download
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading: ' + publication.title);
                    }}
                  >
                    <span className="btn-icon">📥</span>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="view-more-container">
          <button className="view-more-btn">
            View All Publications →
          </button>
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
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-meta">
                <span className="modal-year">{selectedImage.year}</span> • 
                <span className="modal-authors"> {selectedImage.authors}</span>
              </p>
              <p className="modal-description">{selectedImage.description}</p>
              
              <div className="modal-actions">
                <a 
                  href={selectedImage.downloadLink} 
                  className="modal-download-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Downloading: ' + selectedImage.title);
                  }}
                >
                  Download Full Document
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;