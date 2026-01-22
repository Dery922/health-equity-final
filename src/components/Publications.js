import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Publication categories with images
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

  // Mock publication data with images (Replace with your actual images)
  const publications = [
    {
      id: 1,
      title: 'Health Equity in Rural Communities',
      category: 'research',
      year: '2023',
      authors: 'Dr. Sarah Johnson et al.',
      description: 'Comprehensive study on healthcare access disparities in rural areas.',
      imageUrl: '/assets/images/1.jpg',
      downloadLink: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Global Health Conference 2023',
      category: 'conferences',
      year: '2023',
      authors: 'Various Speakers',
      description: 'Proceedings from the annual global health equity conference.',
      imageUrl: '/assets/images/2.jpg',
      downloadLink: '#'
    },
    {
      id: 3,
      title: 'Annual Impact Report 2022',
      category: 'reports',
      year: '2022',
      authors: 'HealthEquity Team',
      description: 'Comprehensive overview of our impact and achievements.',
      imageUrl: '/assets/images/1.jpg',
      downloadLink: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Data Analytics in Healthcare',
      category: 'briefs',
      year: '2023',
      authors: 'Michael Chen',
      description: 'Technical guide on using data analytics for health equity.',
      imageUrl: '/assets/images/3.jpg',
      downloadLink: '#'
    },
    {
      id: 5,
      title: 'Maternal Health Interventions',
      category: 'research',
      year: '2023',
      authors: 'Dr. Maria Rodriguez',
      description: 'Evaluation of maternal health programs in West Africa.',
      imageUrl: '/assets/images/2.jpg',
      downloadLink: '#'
    },
    {
      id: 6,
      title: 'Health Policy Symposium',
      category: 'conferences',
      year: '2023',
      authors: 'Policy Experts',
      description: 'Key insights from health policy discussions.',
      imageUrl: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&auto=format&fit=crop',
      downloadLink: '#'
    },
    {
      id: 7,
      title: 'Supply Chain Optimization',
      category: 'briefs',
      year: '2023',
      authors: 'Logistics Team',
      description: 'Improving healthcare supply chains for better access.',
      imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop',
      downloadLink: '#'
    },
    {
      id: 8,
      title: 'Community Health Workers Study',
      category: 'research',
      year: '2022',
      authors: 'Dr. James Wilson',
      description: 'Impact assessment of community health worker programs.',
      imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop',
      downloadLink: '#'
    },
    {
      id: 9,
      title: 'Digital Health Innovations',
      category: 'conferences',
      year: '2023',
      authors: 'Tech Experts',
      description: 'Emerging technologies in healthcare delivery.',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
      downloadLink: '#'
    }
  ];

  // Filter publications based on active filter
  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter);

  // Open lightbox with selected image
  const openLightbox = (publication) => {
    setSelectedImage(publication);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  React.useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

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

        {/* Publications Grid */}
        <div className="publications-grid">
          {filteredPublications.map(publication => (
            <div 
              key={publication.id} 
              className={`publication-card ${publication.featured ? 'featured' : ''}`}
            >
              {/* Publication Image */}
              <div 
                className="publication-image"
                onClick={() => openLightbox(publication)}
                style={{ 
                  backgroundImage: `url(${publication.imageUrl})`,
                  cursor: 'pointer'
                }}
                aria-label={`View ${publication.title}`}
              >
                <div className="image-overlay">
                  <span className="view-text">Click to View</span>
                </div>
                <div className="category-badge" style={{ backgroundColor: publicationCategories.find(c => c.id === publication.category)?.color }}>
                  {publicationCategories.find(c => c.id === publication.category)?.icon}
                  {publication.category.charAt(0).toUpperCase() + publication.category.slice(1)}
                </div>
                {publication.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>

              {/* Publication Info */}
              <div className="publication-info">
                <div className="publication-meta">
                  <span className="year">{publication.year}</span>
                  <span className="authors">{publication.authors}</span>
                </div>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-description">{publication.description}</p>
                
                <div className="publication-actions">
                  <button 
                    className="view-btn"
                    onClick={() => openLightbox(publication)}
                  >
                    View Details
                  </button>
                  <a 
                    href={publication.downloadLink} 
                    className="download-btn"
                    download
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Downloading publication: ' + publication.title);
                    }}
                  >
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
            View All Publications
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="lightbox-image"
              />
            </div>
            
            <div className="lightbox-info">
              <div className="lightbox-header">
                <span className="lightbox-category">
                  {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                </span>
                <span className="lightbox-year">{selectedImage.year}</span>
              </div>
              
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-authors">{selectedImage.authors}</p>
              <p className="lightbox-description">{selectedImage.description}</p>
              
              <div className="lightbox-actions">
                <a 
                  href={selectedImage.downloadLink} 
                  className="lightbox-download-btn"
                  download
                  onClick={(e) => {
                    e.stopPropagation();
                    alert('Downloading publication: ' + selectedImage.title);
                  }}
                >
                  Download Full PDF
                </a>
                <button className="lightbox-close-btn" onClick={closeLightbox}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;