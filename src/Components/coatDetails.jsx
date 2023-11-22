import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CoatDetails.css"

const API = import.meta.env.VITE_APP_URL;


const CoatDetails = () => {
  const [coats, setCoats] = useState({
    name: "",
    brand: "",
    type: "",
    size: "",
    is_used: false,
    is_available: true,
    condition_rating: 5,
    image_url: "",
    location_name: "",
    city: "",
    state: "",
    zip_code: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoat = async () => {
      try {
        fetch(`${API}/coats/all/${id}`)
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
      "Are you positive you want to remove this Coat"
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
      console.log("Deletion canceled by user");
    }
  };


  return (
    <div className="coat-details">
      <>
        <h3>{coats.is_available ? "✅" : "❌"} {coats.name}</h3>
        <img
          src={coats.image_url}
          alt="coats Image"
          style={{ width: '475px', height: 'auto' }}
        />
        <p>Brand: {coats.brand}</p>
        <p>Type: {coats.type}</p>
        <p>Size: {coats.size}</p>
        <p>Condition: {coats.condition_rating}</p>
        <br />
        <p>Located: {coats.city}, {coats.state} {coats.zip_code}</p>
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

