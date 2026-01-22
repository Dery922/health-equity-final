import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Chief Health Equity Officer",
      qualification: "MD, MPH, PhD",
      expertise: "Public Health Policy & Health Disparities Research",
      image: "👩‍⚕️", // Placeholder emoji - replace with actual image URL
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Data Analytics",
      qualification: "MSc, Data Science",
      expertise: "Healthcare Data Analysis & Machine Learning",
      image: "👨‍💻", // Placeholder emoji
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Dr. Amina Diallo",
      position: "Senior Research Fellow",
      qualification: "PhD, Epidemiology",
      expertise: "Global Health & Infectious Disease Research",
      image: "👩‍🔬", // Placeholder emoji
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Robert Williams",
      position: "Health Economics Lead",
      qualification: "MSc, Health Economics",
      expertise: "Cost-Effectiveness Analysis & Policy Evaluation",
      image: "👨‍💼", // Placeholder emoji
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      position: "Program Director",
      qualification: "MPH, Project Management",
      expertise: "Healthcare Program Implementation & Evaluation",
      image: "👩‍💼", // Placeholder emoji
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 6,
      name: "David Okoro",
      position: "Logistics & Supply Chain Manager",
      qualification: "MBA, Supply Chain Management",
      expertise: "Healthcare Supply Chain Optimization",
      image: "👨‍🏭", // Placeholder emoji
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Core Team</h2>
          <p className="team-subtitle">
            A multidisciplinary team of experts dedicated to advancing health equity 
            through research, data analysis, and strategic consultancy.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <div className="image-placeholder">
                  {member.image}
                </div>
                <div className="team-social">
                  <a href={member.linkedin} className="social-icon" aria-label={`${member.name} LinkedIn`}>
                    in
                  </a>
                  <a href={member.twitter} className="social-icon" aria-label={`${member.name} Twitter`}>
                    𝕏
                  </a>
                </div>
              </div>
              
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-qualification">{member.qualification}</p>
                <p className="team-expertise">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <p className="team-join">
            Interested in joining our team? We're always looking for passionate professionals.
          </p>
          <a href="#contact" className="team-cta-button">
            View Career Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;