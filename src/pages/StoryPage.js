// StoryPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './StoryPage.css';

const StoryPage = () => {
  // Timeline Data
  const timelineEvents = [
    {
      year: "2015",
      title: "Humble Beginnings",
      description: "Founded by Dr. Ama Johnson with a vision to bridge healthcare gaps in rural Ghana, starting with maternal health programs in 3 communities.",
      milestone: "First project launched"
    },
    {
      year: "2017",
      title: "Expanding Impact",
      description: "Secured first major partnership with Ghana Health Service, expanding our reach to 15 districts across the Ashanti Region.",
      milestone: "Government partnership established"
    },
    {
      year: "2019",
      title: "Research Integration",
      description: "Launched our research division, focusing on evidence-based interventions and publishing our first white paper on healthcare access.",
      milestone: "Research division established"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Introduced digital health solutions and telemedicine platforms to enhance healthcare delivery in remote areas.",
      milestone: "Digital initiatives launched"
    },
    {
      year: "2023",
      title: "National Recognition",
      description: "Received the National Healthcare Excellence Award for outstanding contribution to public health system strengthening.",
      milestone: "National award received"
    },
    {
      year: "Present",
      title: "Continuing the Journey",
      description: "Currently implementing comprehensive health system strengthening programs across 8 regions, with plans for pan-African expansion.",
      milestone: "Ongoing expansion"
    }
  ];

  // Founder & Team Highlights
  const teamHighlights = [
    {
      name: "Dr. Ama Johnson",
      role: "Founder & CEO",
      bio: "Former WHO consultant with 15+ years in global health. PhD in Public Health from University of Ghana.",
      contribution: "Strategic vision and technical leadership"
    },
    {
      name: "Prof. Kwame Mensah",
      role: "Research Director",
      bio: "Epidemiologist with extensive publications in tropical medicine. Former head of research at Korle-Bu Teaching Hospital.",
      contribution: "Evidence-based program design"
    },
    {
      name: "Ms. Efia Osei",
      role: "Operations Director",
      bio: "Healthcare management specialist with expertise in supply chain optimization across West Africa.",
      contribution: "Program implementation excellence"
    }
  ];

  // Core Philosophy Points
  const philosophyPoints = [
    {
      icon: "🌱",
      title: "Sustainability First",
      description: "We design programs that continue to deliver value long after our direct involvement ends."
    },
    {
      icon: "🤝",
      title: "Community-Driven",
      description: "Local communities are partners, not beneficiaries. Their input shapes every intervention."
    },
    {
      icon: "📊",
      title: "Data-Informed",
      description: "Every decision is backed by rigorous research and real-time data analytics."
    },
    {
      icon: "🔄",
      title: "Adaptive Approach",
      description: "We continuously learn and adapt our methods based on outcomes and changing needs."
    }
  ];

  return (
    <div className="story-page">
      <Header />
      
      {/* Hero Section */}
      <section className="story-hero">
        <div className="story-hero-content">
          <h1 className="story-hero-title">Our Story</h1>
          <p className="story-hero-subtitle">
            From a single vision to transforming healthcare across Ghana
          </p>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-text">
              <h2>Founding Vision</h2>
              <blockquote className="founder-quote">
                Our founding vision is to build a trusted, Ghana-based public health research and consultancy firm that transforms evidence into action and strengthens health systems in ways that are practical, equitable, and sustainable. We envision a health sector where policies are informed by high-quality local evidence, where supply chains reliably deliver safe and effective health commodities, and where health services consistently produce better outcomes for patients and communities.
              </blockquote>
              <div className="founder-attribution">
                {/* <div className="founder-name">Dr. Ama Johnson</div>
                <div className="founder-position">Founder & CEO</div> */}
              </div>
              <p className="founder-mission">
           Rooted in multidisciplinary expertise and real-world implementation experience, our firm was established to bridge persistent gaps between research, policy, and frontline practice. We recognized that while data and policies are abundant, health systems often struggle with translating these into operational improvements. Our vision is therefore centered on context-specific solutions—solutions that reflect Ghana’s health realities, institutional structures, and resource constraints, while meeting international standards of rigor and accountability 
              </p>
              <p className="founder-mission">We aspire to be a leading partner to government agencies, development partners, private sector actors, and academic institutions by delivering integrated services across health systems assessment, commodity supply chain strengthening, quality improvement, health economics, and climate-smart health programming. By combining analytical excellence with hands-on field engagement, we aim to support resilient systems capable of responding to both long-standing health priorities and emerging challenges such as non-communicable diseases, climate risks, and evolving patient safety needs </p>
              <p className="founder-mission">At the heart of our vision is capacity building—not as a one-off activity, but as a sustained process of mentorship, professional development, and institutional strengthening. We believe lasting impact comes from empowering local professionals and institutions with the skills, tools, and confidence to lead change independently. Through collaborative partnerships, we seek to co-create knowledge, foster innovation, and nurture a new generation of public health leaders.

Ultimately, our vision is to contribute meaningfully to a more effective, efficient, and people-centered health system in Ghana—one where research informs decisions, resources are used wisely, and every intervention advances health equity and patient well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <div className="timeline-milestone">
                    <span className="milestone-icon">★</span>
                    {event.milestone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-grid">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="philosophy-card">
                <div className="philosophy-icon">{point.icon}</div>
                <h3 className="philosophy-title">{point.title}</h3>
                <p className="philosophy-description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      {/* <section className="team-highlights">
        <div className="container">
          <h2 className="section-title">The Leadership Behind Our Impact</h2>
          <div className="team-grid">
            {teamHighlights.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-header">
                  <div className="team-initials">{member.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                  </div>
                </div>
                <p className="team-bio">{member.bio}</p>
                <div className="team-contribution">
                  <strong>Key Contribution:</strong> {member.contribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact & Growth */}
      {/* <section className="growth-section">
        <div className="container">
          <div className="growth-content">
            <h2>Our Growth & Impact</h2>
            <div className="growth-stats">
              <div className="growth-stat">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years of Service</div>
              </div>
              <div className="growth-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="growth-stat">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="growth-stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Research Publications</div>
              </div>
            </div>
            <p className="growth-text">
              From our first project in a single community to our current work across multiple regions, 
              our growth reflects the trust placed in us by communities, partners, and the healthcare 
              ecosystem. But numbers only tell part of the story—the real impact is in the strengthened 
              systems, trained professionals, and healthier communities we leave behind.
            </p>
          </div>
        </div>
      </section> */}

      {/* Looking Forward */}
      {/* <section className="future-section">
        <div className="container">
          <div className="future-content">
            <h2>Looking Forward</h2>
            <p className="future-text">
              Our journey continues as we expand our reach and deepen our impact. We're currently 
              exploring partnerships for West African regional expansion, developing AI-powered 
              health analytics tools, and establishing a center for healthcare innovation in Accra.
            </p>
            <div className="future-initiatives">
              <div className="initiative">
                <span className="initiative-icon">🌍</span>
                <span>Regional expansion across West Africa</span>
              </div>
              <div className="initiative">
                <span className="initiative-icon">🤖</span>
                <span>AI-powered health analytics platform</span>
              </div>
              <div className="initiative">
                <span className="initiative-icon">🏛️</span>
                <span>Center for Healthcare Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="story-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of Our Story</h2>
            <p>
              Whether you're a healthcare professional, researcher, partner, or supporter, 
              there's a place for you in our journey toward health equity.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Partner With Us</a>
              <a href="/careers" className="cta-button secondary">Join Our Team</a>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default StoryPage;