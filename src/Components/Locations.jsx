import React from "react";
import "./Locations.css";
import loc1 from "../assets/loc1.png";
import loc2 from "../assets/loc2.png";
import loc3 from "../assets/loc3.png";

const LocationList = () => {
  
  return (
    <div className="loc-list">
      <img src={loc1} alt="" width="40%" />
      <img src={loc2} alt="" width="40%" />
      <img src={loc3} alt="" width="40%" />
      <p>View Coats Headers</p>

      
    </div>
  );
};

export default LocationList;
