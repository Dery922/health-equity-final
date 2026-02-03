// MissionPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Mission.css';
import missionImage from "../assets/images/ourmis.jpeg";

const MissionPage = () => {
  // Mission, Vision, Values Data
  const coreValues = [
    {
      icon: "🎯",
      title: "Evidence-Based Excellence",
      description: "We ground all our recommendations in rigorous research and proven methodologies, ensuring effective and measurable outcomes."
    },
    {
      icon: "🤝",
      title: "Collaborative Partnership",
      description: "We work alongside local health systems, building sustainable capacity and fostering long-term relationships based on trust."
    },
    {
      icon: "⚖️",
      title: "Health ",
      description: "Every solution we design prioritizes accessibility and fairness, reaching the most vulnerable populations across Ghana."
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "We combine global best practices with local insights to create tailored, cutting-edge approaches to healthcare challenges."
    }
  ];

  const strategicPillars = [
    {
      title: "Health System Strengthening",
      items: [
        "Policy development & implementation",
        "Workforce capacity building",
        "Infrastructure optimization",
        "Quality assurance systems"
      ]
    },
    {
      title: "Public Health Excellence",
      items: [
        "Epidemic preparedness & response",
        "Disease prevention programs",
        "Health promotion initiatives",
        "Community engagement strategies"
      ]
    },
    {
      title: "Supply Chain Optimization",
      items: [
        "Pharmaceutical management",
        "Medical equipment logistics",
        "Cold chain solutions",
        "Inventory control systems"
      ]
    }
  ];

  const impactMetrics = [
    { number: "50+", label: "Health Facilities Supported" },
    { number: "1000+", label: "Healthcare Professionals Trained" },
    { number: "15+", label: "Regions in Ghana Reached" },
    { number: "25+", label: "Successful Projects Completed" }
  ];

  return (
    <div className="mission-page">
      <Header />
      
      {/* Mission Hero Section */}
      <section style={{
              background: `
                linear-gradient(135deg, #02b94b 0%, #1d3b55 100%),
                
              `
            }} className="mission-hero">
        <div className="mission-hero-content">
          <h1 className="mission-hero-title">Our Mission & Vision</h1>
          <p className="mission-hero-subtitle">
            Advancing Health and Strengthening Systems Across Ghana
          </p>
        </div>
      </section>

      {/* Core Mission Statement */}
      <section className="core-mission">
        <div className="container">
          <div className="mission-statement">
            <h2>Our Mission</h2>
            <p className="mission-text">
              At AJ Health and Research Consultancy, our mission is to advance health and strengthen 
              system resilience across Ghana. We provide expert, integrated consultancy services that translate 
              evidence into action, build local capacity, and optimize resources across public health programs, 
              supply chains, and clinical care—ensuring quality, safety, and sustainability in every intervention.
            </p>
            
            <div className="mission-image-section">
              <img src={missionImage} alt="Our mission in action" className="mission-main-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p className="vision-text">
              To see a Ghana where every community has access to resilient, equitable, 
              and high-quality healthcare systems that respond effectively to current 
              challenges and anticipate future needs—creating a healthier nation for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="pillars-section">
        <div className="container">
          <h2 className="section-title">Our Strategic Pillars</h2>
          <div className="pillars-grid">
            {strategicPillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <h3 className="pillar-title">{pillar.title}</h3>
                <ul className="pillar-list">
                  {pillar.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pillar-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      {/* <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-grid">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="impact-card">
                <div className="impact-number">{metric.number}</div>
                <div className="impact-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <p className="commitment-text">
              We are committed to ethical practices, transparent operations, and measurable results. 
              Every project we undertake is approached with cultural sensitivity, scientific rigor, 
              and a deep understanding of Ghana's unique healthcare landscape.
            </p>
            <div className="commitment-points">
              <div className="commitment-point">
                <span className="point-icon">✓</span>
                <span>Data-driven decision making</span>
              </div>
              <div className="commitment-point">
                <span className="point-icon">✓</span>
                <span>Sustainable capacity building</span>
              </div>
              <div className="commitment-point">
                <span className="point-icon">✓</span>
                <span>Community-centered design</span>
              </div>
              <div className="commitment-point">
                <span className="point-icon">✓</span>
                <span>Continuous quality improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionPage;