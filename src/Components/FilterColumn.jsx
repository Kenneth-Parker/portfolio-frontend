// FilterColumn.js
import React, { useState } from 'react';
import './FilterColumn.css';

const FilterColumn = ({ applyFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    applyFilter(value, selectedLocation);
  };

  const handleLocationChange = (locationId) => {
    setSelectedLocation(locationId);
    applyFilter(selectedFilter, locationId);
  };

  const handleClearFilter = () => {
    setSelectedFilter('');
    setSelectedLocation('');
    applyFilter('', '');
  };

  return (
    <div className="filter-column">
      <h2>FILTER</h2>
      
      <label>
        New / Used:
        <select
          value={selectedFilter}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="">All Coats</option>
          <option value="used">Used Coats</option>
          <option value="new">New Coats</option>
        </select>
      </label>

      <label>
        Location:
        <select
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="1">New York, NY</option>
          <option value="2">Bronx, NY</option>
          <option value="3">Brooklyn, NY</option>
    
        </select>
      </label>

      <button className="filter-button" onClick={handleClearFilter}>Clear Filter</button>
    </div>
  );
}

export default FilterColumn;
