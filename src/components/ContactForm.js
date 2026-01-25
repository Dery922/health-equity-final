import React, { useState } from 'react';
import './ContactForm.css';
import Linkedin from "../assets/images/linkedin.svg"

import LinkedIns from "../assets/images/linkedin-svgrepo-com (1).svg"
import insta from "../assets/images/instagram-svgrepo-com.svg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // In real app, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        service: 'general',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-form-section">
      <div className="form-container">
        <div className="form-intro">
          <h2>Start Your Health Journey</h2>
          <p>
            Contact us for a free 30-minute consultation to discuss your 
            organization's needs and challenges.
          </p>
        </div>
        
        {submitted ? (
          <div className="form-success">
            <h3>Thank you for your inquiry!</h3>
            <p>We've received your consultation request and will contact you within 24 hours.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="organization">Organization *</label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Organization Name"
                value={formData.organization}
                onChange={handleChange}
                className={errors.organization ? 'error' : ''}
              />
              {errors.organization && <span className="error-text">{errors.organization}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interest</label>
              <select 
                id="service"
                name="service" 
                value={formData.service}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="research">Research</option>
                <option value="analytics">Data Analytics</option>
                <option value="project">Project Management</option>
                <option value="economics">Health Economics Evaluation</option>
                <option value="logistics">Logistics & Supply Chain</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your health equity challenges, goals, and timeline..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            
            <button type="submit" className="submit-btn">
              Request Free Consultation
            </button>
          </form>
        )}
        
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">📧</div>
            <h4>Email Us</h4>
            <p>AJHealth.Research@gmail.com</p>
          </div>
          <div className="info-item">
            <div className="info-icon">📞</div>
            <h4>Call Us</h4>
            <p> +233 244 288 266 /+233 244 297 950</p>
          
          </div>
             <div className="info-item">
            <div className="info-icon">🗺️
            </div>
            <h4>Location</h4>
            <p>No. 23 Asafoatse Baakunkor Street, Camara, Dansoman </p>
          </div>
            <div className="info-item">
            <div className="info-icon">
              <img style={{width:50, height: 50,}} src={LinkedIns } alt={LinkedIns } />
            </div>
            <h4>LinkedIn</h4>
            {/* <p>No.23 Asafoastse Baakonko Street, Camara, Dansoma</p> */}
          </div>
                  <div className="info-item">
            <div className="info-icon">
               <img style={{width:50, height: 50,}} src={insta } alt={insta } />
            </div>
            <h4>Instagram</h4>
            
          </div>
          <div className="info-item">
            <div className="info-icon">⏰</div>
            <h4>Business Hours</h4>
            <p>Mon-Fri 8am-5pm GMT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;