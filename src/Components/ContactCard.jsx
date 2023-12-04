import React from 'react';
import './ContactCard.css';


function ContactCard({ name, imageUrl, linkedInLink, githubLink, info }) {
  return (
    <div className="contact-card">
       
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image"  />
      <h3>{name}</h3>
      <p>{info}</p>
      <div className="social-links">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br /><br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <br /><br />
       
      </div>
    </div>
  );
}

export default ContactCard;
