import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./coatDetails.css";
import coatDefault from "../assets/image-coming-soon-placeholder.png";

const API = import.meta.env.VITE_APP_URL;

const Loc1Details = () => {
  const [locs, setLocs] = useState({
    location_name: "",
    city: "",
    state: "",
    zip_code: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoc = async () => {
      try {
        fetch(`${API}/locations/1`)
          .then((r) => r.json())
          .then((res) => {
            setLocs(res);
          });
      } catch (err) {
        return err;
      }
    };
    fetchLoc();
  }, [id]);

  return (
    <div className="loc-details">
      <>
        <p>Located: {locs.city}, {locs.state} {locs.zip_code}</p>
        <div>
          <Link to={`/locations`}><button>Back</button></Link>
        </div>
      </>
    </div>
  );
};

export default Loc1Details;
