import React from "react";
import { Link } from 'react-router-dom';
import "./Locations.css";
import loc1storefront from "../assets/loc1storefront.png";
import loc2 from "../assets/loc2.png";
import loc3 from "../assets/loc3.png";

const LocationList = () => {

  return (
    <div className="loc-list">
      <br />
      <Link to={`/locations/1`}><h3>New York, NY</h3><img src={loc1storefront} alt="location 1" /></Link>
      <Link to={`/locations/2`}><h3>Bronx, NY</h3><img src={loc2} alt="location 2" /></Link>
      <Link to={`/locations/3`}><h3>Brooklyn, NY</h3><img src={loc3} alt="location 3" /></Link>
      <p>View Coats Headers</p>


    </div>
  );
};

export default LocationList;

