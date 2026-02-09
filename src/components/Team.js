import React from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
import teamImg1 from "../assets/images/jso.jpeg";
import teamImg2 from "../assets/images/healthpolicy.jpeg";
import teamImg3 from "../assets/images/bonne.jpeg";
import teamImg4 from "../assets/images/joss.jpeg";
import teamImg5 from "../assets/images/bonne.jpeg";
import teamImg6 from "../assets/images/lifc.jpeg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Josephine Tweneboa Osei ",
      position: "Supply Chain and Quality Improvement Lead",

      image: teamImg1,
      linkedin: "https://www.linkedin.com/in/josephine-osarfo-20114863?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

    },
        {
      id: 20,
      name: "Archibold Nii Boye ",
      position: "Project Management and Health Economics Lead ",
      linkedin: "#",

    },
    {
      id: 3,
      name: "Leslie N.O Vanderpuije",
      position: "Public Health Policy Lead",
      image: teamImg2,
      linkedin: "https://www.linkedin.com/in/leslie-van-der-puije-2b2b5b5b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

    },
    {
      id: 4,
      name: "Gloria Agyekum",
      position: "Monitoring, Evaluation and Communications Lead",
      image: teamImg6,
      linkedin: "https://www.linkedin.com/in/gloria-agyekum-2b803a74/",

    },
        {
      id: 9,
      name: "Emmanuel Nii Obodai ",
      position: "GHS/ER Research Coodinator",
      image: teamImg4,
      linkedin: "https://www.linkedin.com/in/nii-obodai-mensah-9862a095",

    },
    {
      id: 5,
      name: "Richard Abeiku Bonney",
      position: "Health System Strenghtening Lead",
      image: teamImg5,
      linkedin: "https://www.linkedin.com/in/richard-abeiku-bonney?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

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

  <img
    src={member.image}
    alt={member.name}
    className="team-photo"
  />

  {/* Social Icon */}
  {member.linkedin && (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="team-social-icon"
      aria-label={`${member.name} LinkedIn`}
    >
      in
    </a>
  )}

  {/* Text Overlay */}
  <div className="team-overlay">
    <h3 className="team-name">{member.name}</h3>
    <p className="team-position">{member.position}</p>
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