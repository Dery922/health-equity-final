import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Research",
      description: "Comprehensive health research and evidence-based solutions for healthcare disparities.",
      icon: "📊"
    },
    {
      id: 2,
      title: "Data Analytics",
      description: "Advanced data analysis to identify gaps and measure real world impact.",
      icon: "📈"
    },
    {
      id: 3,
      title: "Project Management",
      description: "End-to-end management of health  projects from planning to implementation.",
      icon: "👥"
    },
    {
      id: 4,
      title: "Health Economics Evaluation",
      description: "Cost-effectiveness analysis and economic evaluation of health programs.",
      icon: "💰"
    },
    {
      id: 5,
      title: "Health Logistics & Supply Chain",
      description: "Optimizing healthcare supply chains for equitable resource allocation.",
      icon: "🚚"
    },
    {
      id: 6,
      title: "Workforce Enhancement",
      description: "Training and development programs for healthcare professionals.",
      icon: "🏋️"
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        Comprehensive solutions to advance health in healthcare systems
      </p>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-link">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;