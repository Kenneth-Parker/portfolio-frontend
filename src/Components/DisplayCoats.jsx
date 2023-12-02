// DisplayCoats.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import coatDefault from "../assets/image-coming-soon-placeholder.png";
import './DisplayCoats.css'; // Add your styling as needed

const DisplayCoats = ({ coats }) => {
  return (
    <div className="coats-grid">
      {coats.map((coat) => (
        <div key={coat.id} className="coat-item">
          <Link to={`/coats/${coat.id}`}>
            {coat.name}: {coat.is_available ? '✅' : 'Unavailable'}
            <br />
            <br />
            {coat.image_url ? (
              <img src={coat.image_url} alt="Coat" className="coat-image" />
            ) : (
              <img src={coatDefault} alt="Default Coat" className="coat-image" />
            )}
            <br />
          </Link>
          <br />
          Location: <br />
          {coat.city}, {coat.state}
          <br />
          <br />
          <Link to={`/coats/${coat.id}`}>
            <button className="view-coat">View Coat</button>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

export default DisplayCoats;
