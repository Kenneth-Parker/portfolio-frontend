import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CoatDetails.css"

const API = import.meta.env.VITE_APP_URL;
// const API = import.meta.env.VITE_PORT;

const CoatDetails = () => {
  const [coats, setCoats] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    isFavorite: false,
    rating: 5,
    image_url: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoat = async () => {
      try {
        fetch(`${API}/coats/${id}`)
          .then((r) => r.json())
          .then((res) => {
            setCoats(res);
          });
      } catch (err) {
        return err;
      }
    };
    fetchCoat();
  }, [id]);

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "👀 Are u sure u want to delete this jawn?"
    );
    if (isConfirmed) {
      try {
        fetch(`${API}/coats/${id}`, {
          method: "DELETE",
        }).then(() => navigate(`/coats`));
      } catch (err) {
        return err;
      }
    } else {
      // User clicked NeverMind, do nothing or show a message
      console.log("Deletion canceled by user");
    }
  };


  return (
    <div className="coat-details">
        <>
          <h3>{coats.is_favorite ? "⭐️" : null} {coats.name}</h3>
          <img
            src={coats.image_url}
            alt="coats Image"
            style={{ width: '475px', height: 'auto' }}
          />
          <p>Brand: {coats.brand}</p>
          <p>Type: {coats.type}</p>
          <p>Price: ${coats.price}</p>
          <p>Rating: {coats.rating}</p>
          <div>
            <Link to={`/coats`}><button>Back</button></Link>
            <Link to={`/coats/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
    </div>
  );
}

export default CoatDetails;

