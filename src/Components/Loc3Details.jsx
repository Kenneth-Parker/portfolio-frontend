import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Loc1Details.css";
import loc3storefront from "../assets/loc3storefront.png";
import loc3 from "../assets/loc3.png"

const API = import.meta.env.VITE_APP_URL;

const Loc3Details = () => {
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
        fetch(`${API}/locations/3`)
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
      <img src={loc3storefront} alt="" />
      <h3>Located:</h3>
      <Link
        to={`https://www.google.com/maps/dir//New+York,+NY/@40.7310779,-74.0836321,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25993d079c753:0x2ed271f94121ee72!2m2!1d-74.0012312!2d40.7311072?entry=ttu`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>14 west 4th st <br />{locs.city}, {locs.state} {locs.zip_code}</h3>
        <br /><br />

        <h5>CLICK FOR DIRECTIONS</h5>
        <img src={loc3} alt="location 3" width="75%" />

      </Link>

      <div>
        <Link to={`/locations`}><button>Back</button></Link>
      </div>

    </div>
  );
};

export default Loc3Details;
