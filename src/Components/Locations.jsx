import React from "react";
import { Link } from 'react-router-dom';
import "./Locations.css";
import loc1storefront from "../assets/loc1storefront.png";
import loc2storefront from "../assets/loc2storefront.png";
import loc3storefront from "../assets/loc3storefront.png";

const LocationList = () => {

  return (
    <div className="loc-list">
      <br />
      <div className="locnyc">
        <Link to={`/locations/1`}><h3>New York, NY</h3><img src={loc1storefront} alt="location 1" /></Link>
      </div>
      <div className="locbx">
        <Link to={`/locations/2`}><h3>Bronx, NY</h3><img src={loc2storefront} alt="location 2" /></Link>
      </div>
      <div className="locbk">
        <Link to={`/locations/3`}><h3>Brooklyn, NY</h3><img src={loc3storefront} alt="location 3" /></Link>
      </div>

    </div>
  );
};

export default LocationList;

