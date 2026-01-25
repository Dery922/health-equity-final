import React, { useState } from 'react';
import './Publications.css';
import Header from './Header';

// Import document type icons
import pdfIcon from "../assets/icons/pdf-icon.svg"
import docIcon from '../assets/icons/doc-icon.svg';
import pptIcon from '../assets/icons/ppt-icon.svg';
import xlsIcon from '../assets/icons/ppt-icon.svg';

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Document categories
  const documentCategories = [
    {
      id: 'all',
      name: 'All Documents',
      icon: '📚',
      color: '#02b94b'
    },
    {
      id: 'research',
      name: 'Research Papers',
      icon: '📄',
      color: '#2a6e6a'
    },
    {
      id: 'reports',
      name: 'Annual Reports',
      icon: '📊',
      color: '#4a9d9c'
    },
    {
      id: 'conferences',
      name: 'Conference Materials',
      icon: '🎤',
      color: '#1d3b55'
    },
    {
      id: 'guidelines',
      name: 'Guidelines',
      icon: '📋',
      color: '#02b94b'
    },
    {
      id: 'presentations',
      name: 'Presentations',
      icon: '📽️',
      color: '#2a6e6a'
    }
  ];

  // Document types with icons
  const fileTypes = {
    pdf: { icon: pdfIcon, color: '#FF6B6B', label: 'PDF' },
    doc: { icon: docIcon, color: '#4D96FF', label: 'DOC' },
    docx: { icon: docIcon, color: '#4D96FF', label: 'DOCX' },
    ppt: { icon: pptIcon, color: '#FFD166', label: 'PPT' },
    pptx: { icon: pptIcon, color: '#FFD166', label: 'PPTX' },
    xls: { icon: xlsIcon, color: '#06D6A0', label: 'XLS' },
    xlsx: { icon: xlsIcon, color: '#06D6A0', label: 'XLSX' }
  };

  // Document data (this would come from your backend)
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: 'Health Equity in Rural Communities - Research Paper',
      category: 'research',
      fileType: 'pdf',
      size: '2.5 MB',
      date: '2023-11-15',
      author: 'Dr. Sarah Johnson',
      downloads: 245,
      description: 'Comprehensive study on healthcare access disparities in rural areas across Ghana. This research examines socioeconomic factors affecting healthcare delivery.',
      tags: ['health equity', 'rural health', 'research', 'ghana'],
      featured: true
    },
    {
      id: 2,
      title: 'Annual Impact Report 2023',
      category: 'reports',
      fileType: 'pdf',
      size: '4.2 MB',
      date: '2023-12-01',
      author: 'AJHealth Research Team',
      downloads: 189,
      description: 'Comprehensive overview of our impact and achievements in advancing health equity across Sub-Saharan Africa through evidence-based interventions.',
      tags: ['annual report', 'impact', 'africa', 'statistics'],
      featured: true
    },
    {
      id: 3,
      title: 'Global Health Conference 2023 - Presentation',
      category: 'conferences',
      fileType: 'pptx',
      size: '15.8 MB',
      date: '2023-10-20',
      author: 'Dr. Michael Chen',
      downloads: 312,
      description: 'Presentation from the annual global health equity conference discussing innovative approaches to healthcare delivery.',
      tags: ['conference', 'presentation', 'global health'],
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics Toolkit for Healthcare',
      category: 'guidelines',
      fileType: 'docx',
      size: '1.8 MB',
      date: '2023-09-30',
      author: 'Analytics Team',
      downloads: 156,
      description: 'Step-by-step guide on using data analytics tools for health equity research and program evaluation.',
      tags: ['data analytics', 'toolkit', 'guide', 'healthcare'],
      featured: false
    },
    {
      id: 5,
      title: 'Maternal Health Program Evaluation',
      category: 'research',
      fileType: 'pdf',
      size: '3.1 MB',
      date: '2023-08-25',
      author: 'Dr. Maria Rodriguez',
      downloads: 178,
      description: 'Evaluation of maternal health programs in West Africa focusing on reducing maternal mortality.',
      tags: ['maternal health', 'evaluation', 'west africa'],
      featured: false
    },
    {
      id: 6,
      title: 'Budget and Expenditure Report 2023',
      category: 'reports',
      fileType: 'xlsx',
      size: '2.9 MB',
      date: '2023-12-15',
      author: 'Finance Department',
      downloads: 134,
      description: 'Detailed financial report covering organizational expenses and budget allocations.',
      tags: ['finance', 'budget', 'expenditure'],
      featured: false
    },
    {
      id: 7,
      title: 'Workshop on Health Economics',
      category: 'conferences',
      fileType: 'pdf',
      size: '5.3 MB',
      date: '2023-07-10',
      author: 'Dr. James Wilson',
      downloads: 267,
      description: 'Workshop materials covering health economics principles and applications in developing countries.',
      tags: ['workshop', 'health economics', 'training'],
      featured: true
    },
    {
      id: 8,
      title: 'Clinical Guidelines for Malaria Treatment',
      category: 'guidelines',
      fileType: 'pdf',
      size: '1.2 MB',
      date: '2023-06-18',
      author: 'Medical Advisory Board',
      downloads: 423,
      description: 'Updated clinical guidelines for malaria treatment and prevention in endemic regions.',
      tags: ['malaria', 'clinical guidelines', 'treatment'],
      featured: false
    }
  ]);

  // New document form state
  const [newDocument, setNewDocument] = useState({
    title: '',
    category: 'research',
    fileType: 'pdf',
    author: '',
    description: '',
    tags: ''
  });

  // Filter documents based on active category and search query
  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle document upload
  const handleUploadDocument = (e) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newDoc = {
        id: documents.length + 1,
        ...newDocument,
        fileType: newDocument.fileType,
        size: '0 MB', // This would come from the actual file
        date: new Date().toISOString().split('T')[0],
        downloads: 0,
        tags: newDocument.tags.split(',').map(tag => tag.trim()),
        featured: false
      };
      
      setDocuments([newDoc, ...documents]);
      setNewDocument({
        title: '',
        category: 'research',
        fileType: 'pdf',
        author: '',
        description: '',
        tags: ''
      });
      setShowUploadForm(false);
      setUploading(false);
      alert('Document uploaded successfully!');
    }, 1500);
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      setNewDocument(prev => ({
        ...prev,
        fileType: fileTypes[fileType] ? fileType : 'pdf'
      }));
    }
  };

  // Handle document download
  const handleDownload = (document) => {
    // In a real app, this would trigger the actual file download
    // For now, we'll just update the download count
    setDocuments(docs => 
      docs.map(doc => 
        doc.id === document.id 
          ? { ...doc, downloads: doc.downloads + 1 }
          : doc
      )
    );
    
    alert(`Downloading: ${document.title}`);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Header />
      <section id="publications" className="publications-section">
        <div className="publications-container">
          {/* Header with Search and Upload */}
          <div className="publications-header">
            <div className="header-content">
              <h2>Document Repository</h2>
              <p className="publications-subtitle">
                Access and download our research papers, reports, guidelines, and conference materials. 
                You can also contribute by uploading relevant documents.
              </p>
            </div>
            
            <div className="header-actions">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <span className="search-icon">🔍</span>
              </div>
              
              <button 
                className="upload-btn"
                onClick={() => setShowUploadForm(true)}
              >
                <span className="btn-icon">📤</span>
                Upload Document
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <div className="category-scroll">
              {documentCategories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ '--category-color': category.color }}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">
                    {category.id === 'all' 
                      ? documents.length 
                      : documents.filter(doc => doc.category === category.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Upload Form Modal */}
          {showUploadForm && (
            <div className="upload-modal-overlay">
              <div className="upload-modal">
                <div className="modal-header">
                  <h3>Upload New Document</h3>
                  <button 
                    className="close-modal"
                    onClick={() => setShowUploadForm(false)}
                  >
                    &times;
                  </button>
                </div>
                
                <form onSubmit={handleUploadDocument} className="upload-form">
                  <div className="form-group">
                    <label>Document Title *</label>
                    <input
                      type="text"
                      value={newDocument.title}
                      onChange={(e) => setNewDocument({...newDocument, title: e.target.value})}
                      placeholder="Enter document title"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Category *</label>
                      <select
                        value={newDocument.category}
                        onChange={(e) => setNewDocument({...newDocument, category: e.target.value})}
                        required
                      >
                        {documentCategories.slice(1).map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label>Author *</label>
                      <input
                        type="text"
                        value={newDocument.author}
                        onChange={(e) => setNewDocument({...newDocument, author: e.target.value})}
                        placeholder="Author name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>File *</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="document-file"
                        onChange={handleFileSelect}
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                        required
                      />
                      <label htmlFor="document-file" className="file-upload-label">
                        <span className="file-icon">📎</span>
                        Choose File
                      </label>
                      {newDocument.fileType && (
                        <span className="selected-file-type">
                          {fileTypes[newDocument.fileType]?.label || 'PDF'}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={newDocument.description}
                      onChange={(e) => setNewDocument({...newDocument, description: e.target.value})}
                      placeholder="Brief description of the document..."
                      rows="3"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={newDocument.tags}
                      onChange={(e) => setNewDocument({...newDocument, tags: e.target.value})}
                      placeholder="health, research, ghana, etc."
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={() => setShowUploadForm(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Document'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Documents Grid */}
          <div className="documents-grid">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc, index) => (
                <div 
                  key={doc.id}
                  className={`document-card ${doc.featured ? 'featured' : ''} ${index === selectedDocument ? 'selected' : ''}`}
                  onClick={() => setSelectedDocument(index)}
                >
                  <div className="document-header">
                    <div className="file-type-icon" style={{ backgroundColor: fileTypes[doc.fileType]?.color }}>
                      {doc.fileType === 'pdf' ? 'PDF' : 
                       doc.fileType === 'doc' || doc.fileType === 'docx' ? 'DOC' :
                       doc.fileType === 'ppt' || doc.fileType === 'pptx' ? 'PPT' :
                       'XLS'}
                    </div>
                    <div className="document-meta">
                      <span className="document-category">
                        {documentCategories.find(c => c.id === doc.category)?.name}
                      </span>
                      <span className="document-date">{formatDate(doc.date)}</span>
                    </div>
                    {doc.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                  </div>
                  
                  <div className="document-body">
                    <h3 className="document-title">{doc.title}</h3>
                    <p className="document-description">{doc.description}</p>
                    
                    <div className="document-author">
                      <span className="author-icon">👤</span>
                      {doc.author}
                    </div>
                    
                    <div className="document-tags">
                      {doc.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="document-footer">
                    <div className="document-stats">
                      <div className="stat">
                        <span className="stat-icon">💾</span>
                        <span className="stat-value">{doc.size}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-icon">📥</span>
                        <span className="stat-value">{doc.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <button 
                      className="download-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(doc);
                      }}
                    >
                      <span className="download-icon">⬇️</span>
                      Download
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-documents">
                <div className="no-documents-icon">📄</div>
                <h3>No Documents Found</h3>
                <p>Try a different search or category, or upload a new document.</p>
              </div>
            )}
          </div>

          {/* Selected Document Preview */}
          {filteredDocuments.length > 0 && (
            <div className="document-preview">
              <div className="preview-header">
                <h3>Document Preview</h3>
                <button 
                  className="close-preview"
                  onClick={() => setSelectedDocument(null)}
                >
                  &times;
                </button>
              </div>
              
              <div className="preview-content">
                <div className="preview-info">
                  <h4>{filteredDocuments[selectedDocument]?.title}</h4>
                  <div className="preview-meta">
                    <span className="meta-item">
                      <span className="meta-label">Author:</span>
                      {filteredDocuments[selectedDocument]?.author}
                    </span>
                    <span className="meta-item">
                      <span className="meta-label">Date:</span>
                      {formatDate(filteredDocuments[selectedDocument]?.date)}
                    </span>
                    <span className="meta-item">
                      <span className="meta-label">Size:</span>
                      {filteredDocuments[selectedDocument]?.size}
                    </span>
                    <span className="meta-item">
                      <span className="meta-label">Downloads:</span>
                      {filteredDocuments[selectedDocument]?.downloads}
                    </span>
                  </div>
                  
                  <p className="preview-description">
                    {filteredDocuments[selectedDocument]?.description}
                  </p>
                  
                  <div className="preview-actions">
                    <button 
                      className="preview-download-btn"
                      onClick={() => handleDownload(filteredDocuments[selectedDocument])}
                    >
                      <span className="btn-icon">📥</span>
                      Download Document ({filteredDocuments[selectedDocument]?.size})
                    </button>
                    <button className="preview-share-btn">
                      <span className="btn-icon">🔗</span>
                      Share
                    </button>
                  </div>
                </div>
                
                <div className="preview-thumbnail">
                  <div 
                    className="thumbnail-placeholder"
                    style={{ backgroundColor: fileTypes[filteredDocuments[selectedDocument]?.fileType]?.color }}
                  >
                    <div className="thumbnail-icon">
                      {filteredDocuments[selectedDocument]?.fileType === 'pdf' ? '📄' :
                       filteredDocuments[selectedDocument]?.fileType === 'doc' || 
                       filteredDocuments[selectedDocument]?.fileType === 'docx' ? '📝' :
                       filteredDocuments[selectedDocument]?.fileType === 'ppt' || 
                       filteredDocuments[selectedDocument]?.fileType === 'pptx' ? '📽️' : '📊'}
                    </div>
                    <div className="thumbnail-text">
                      {fileTypes[filteredDocuments[selectedDocument]?.fileType]?.label} Document
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Publications;