import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
import teamImg1 from "../assets/images/jose2.jpeg";
import teamImg2 from "../assets/images/healthpolicy.jpeg";
import teamImg3 from "../assets/images/bonne.jpeg";
import teamImg4 from "../assets/images/joss.jpeg";
import teamImg5 from "../assets/images/bonne.jpeg"
import teamImg6 from "../assets/images/glory.jpeg"

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Josephine Tweneboa Osei (Pharmacist)",
      position: "Supply Chain and Quality Improvement Lead",
      expertise: "Public Health Policy & Health Disparities Research",
      image: teamImg1,
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Leslie N.O Vanderpuije",
      position: "Public Health Policy Lead (Pharmacist)",
      expertise: "Global Health & Infectious Disease Research",
      image: teamImg2,
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "Gloria Agyekum",
      position: "Monitoring, Evaluation and Communications Lead",
      expertise: "Cost-Effectiveness Analysis & Policy Evaluation",
      image: teamImg6,
      linkedin: "#",
      twitter: "#"
    },
        {
      id: 4,
      name: "Emmanuel Nii Obodai Mensah (Pharmacist)",
      position: "Monitoring, Evaluation and Communications Lead",
      expertise: "Cost-Effectiveness Analysis & Policy Evaluation",
      image: teamImg4,
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Richard Abeiku Bonney",
      position: "Health System Strenghtening Lead",
      expertise: "Healthcare Program Implementation & Evaluation",
      image: teamImg5,
      linkedin: "#",
      twitter: "#"
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Core Team</h2>
          <p className="team-subtitle">
            A multidisciplinary team of experts dedicated to advancing health  
            through research, data analysis, and strategic consultancy.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <div className="image-placeholder">
                     <img 
                      style={{width:355,height:255}}
                      src={member.image} 
                      alt={member.name} />
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
          <Link to="/careers" className="team-cta-button">
            View Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;