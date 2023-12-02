import React from "react";
import { Link } from 'react-router-dom';
import "./Locations.css";
import loc1 from "../assets/loc1.png";
import loc2 from "../assets/loc2.png";
import loc3 from "../assets/loc3.png";

const LocationList = () => {
  
  return (
    <div className="loc-list">
     <Link to={`/locations/1`}><img src={loc1} alt="" width="40%" /></Link> 
     <Link to={`/locations/2`}><img src={loc2} alt="" width="40%" /></Link> 
     <Link to={`/locations/3`}><img src={loc3} alt="" width="40%" /></Link> 
      <p>View Coats Headers</p>

      
    </div>
  );
};

export default LocationList;

