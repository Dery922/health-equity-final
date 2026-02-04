import React, { useState } from 'react';
import './Publications.css';
import Header from './Header';

// Import document type icons
import pdfIcon from "../assets/icons/pdf-icon.svg"
import docIcon from '../assets/icons/doc-icon.svg';
import pptIcon from '../assets/icons/ppt-icon.svg';
import xlsIcon from '../assets/icons/ppt-icon.svg';
import Footer from './Footer';

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
  //     {
  //   id: 1,
  //   title: 'Membership Summary',
  //   category: 'Membership',
  //   fileType: 'docx',
  //   fileUrl: '/documents/membership.docx',
  //   
  //   date: 'N/A',
  //   author: '',
  //   downloads: 245,
  //   description:
  //     'We don’t just consult; we cultivate. Our greatest legacy is the leaders we mentor. This program is designed to give you the tools, confidence, and connections to not only enter the field of public health but to shape its future..',
  //   tags: ['health', 'research', 'ghana'],
  //   featured: true
  // },
        {
    id: 2,
    title: '3RD NATIONAL PATIENT SAFETY CONFERENCE',
    category: 'Membership',
    fileType: 'pptx',
    fileUrl: '/documents/3RD NATIONAL PATIENT SAFETY CONFERENCE.pptx',

    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'COST OF MEDICATION ERRORS IN PUBLIC HEALTH FACILITIES OF EASTERN REGION, GHANA Van der Puije et. al, 2019'
,
    tags: ['health', 'research', 'ghana'],
    featured: true
  },
//           {
//     id: 3,
//     title: 'AJ Health and Research Consultancy_Mentorship  Summary',
//     category: 'Membership',
//     fileType: 'pdf',
//     fileUrl: '/documents/AJ Health and Research Consultancy_Mentorship  Summary.pdf',
//     size: '2.5 MB',
//     date: 'N/A',
//     author: '',
//     downloads: 245,
//     description:
//       'Our mentorship program is a strategic initiative aimed at empowering early-career researchers and graduate professionals who are passionate about making a tangible, systems-level public health impact in Ghana.'
// ,
//     tags: ['health', 'research', 'ghana'],
//     featured: true
//   },
            {
    id: 4,
    title: 'AJ_HEALTH PUBLICATIONS CITATIONS',
    category: 'Membership',
    fileType: 'docx',
    fileUrl: '/documents/AJ_HEALTH PUBLICATIONS CITATIONS.docx',
    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'OKOTAH, A.N., Vanderpuije, L., Osarfo, J., Obiri-Yeboa, I., Ofosu, W., MENSAH, N.O. and Buabin, D., 2025. HSD117 '
,
    tags: ['health', 'research', 'ghana'],
    featured: true
  },
              {
    id: 5,
    title: 'ERHK_ME_PRESENTATION',
    category: 'Membership',
    fileType: 'pptx',
    fileUrl: '/documents/ERHK_ME_PRESENTATION.pptx',
    
    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'Healthcare Providers Strategies and Challenges in Managing Medication Errors in Eastern Region, Ghana A Qualitative Study on Interventions, Communication, and Safety Improvements'
,
    tags: ['health', 'research', 'ghana'],
    featured: true
  },

    {
    id: 6,
    title: 'Medication Error Interventions in Health Facilities',
    category: 'Membership',
    fileType: 'pdf',
    fileUrl: '/documents/FIP POSTER_20.08.2025 (4).pdf',
    
    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'Medication Error Interventions in Health Facilities: A qualitative Study of healthcare providers’ Experiences, Strategies and Challenges in Eastern region of Ghana'
,
    tags: ['health', 'research', 'ghana'],
    featured: true
  },

      {
    id: 7,
    title: 'ISPOR EUROPE 2025 POSTER_02.11.2025_FINAL Versions_03.11.2025',
    category: 'Membership',
    fileType: 'pdf',
    fileUrl: '/documents/ISPOR EUROPE 2025 POSTER_02.11.2025_FINAL Versions_03.11.2025.pdf',
    
    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'Trends and Economic Impact of Medication Errors in Public Hospitals of Eastern Region, Ghana: A Retrospective Analysis from 2018 to 2024'
,
    tags: ['health', 'research', 'ghana'],
    featured: true
  },
        {
    id: 8,
    title: '  Project Report -Medicaion Error Qualitative Research , ER',
    category: 'Membership',
    fileType: 'docx',
    fileUrl: '/documents/  Project Report -Medicaion Error Qualitative Research , ER.docx',
    
    date: 'N/A',
    author: '',
    downloads: 245,
    description:
      'Trends and Economic Impact of Medication Errors in Public Hospitals of Eastern Region, Ghana: A Retrospective Analysis from 2018 to 2024'
,
    tags: ['health', 'research', 'ghana'],
    featured: true
    },
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
const handleDownload = (doc) => {
  // Update download count
  setDocuments(prev =>
    prev.map(d =>
      d.id === doc.id
        ? { ...d, downloads: d.downloads + 1 }
        : d
    )
  );

  // Trigger real browser download
  const link = document.createElement('a');
  link.href = doc.fileUrl;
  link.download = doc.fileUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
              {/* <div className="search-box">
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
              </button> */}
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
                    
                    </div>
                    {doc.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                  </div>
                  
                  <div className="document-body">
                    <h3 className="document-title">{doc.title}</h3>
                    <p className="document-description">{doc.description}</p>
                    
                    <div className="document-author">
                   
                      {doc.author}
                    </div>
                    
                    <div className="document-tags">
            
                    </div>
                  </div>
                  
                  <div className="document-footer">
           
                    
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
                {/* <p>Try a different search or category, or upload a new document.</p> */}
              </div>
            )}
          </div>

          {/* Selected Document Preview */}
      
        </div>

      </section>
              <Footer />
    </>
  );
};

export default Publications;