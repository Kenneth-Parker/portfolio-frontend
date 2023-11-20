
import { Link } from "react-router-dom";
import './Coat.css';
import './Coats.css';

function Coat({ coat }) {
  const backgroundColor = {
    backgroundColor: coat.is_favorite ? "gold" : "transparent",
  };

  return (
    <div className="coat-card">
      <div className="coat-image">
        {coat.is_favorite ? <span>⭐️</span> : null}
      </div>
      <div className="coat-details">
        <h2><Link to={`/coats/${coat.id}`}>{coat.name}</Link></h2>
        <p><strong>Brand:</strong> {coat.brand}</p>
        <p><strong>Type:</strong> {coat.type}</p>
        <p><strong>Price:</strong> ${coat.price}</p>
        <p><strong>Rating:</strong> {coat.rating}</p>
      </div>
      <div className="coat-rating" style={backgroundColor}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Coat;
