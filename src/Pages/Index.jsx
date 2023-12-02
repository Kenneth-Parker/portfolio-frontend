import React, { useState, useEffect } from 'react';
import DisplayCoats from '../Components/DisplayCoats';
import Pagination from '../Components/Pagination';
import FilterColumn from '../Components/FilterColumn'; 
import './Index.css';
import coatDefault from "../assets/image-coming-soon-placeholder.png";

const API = import.meta.env.VITE_APP_URL;
const ITEMS_PER_PAGE = 6;

function Index() {
  const [coats, setCoats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}/coats/all`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoats(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Filter the coats based on the selected filters
  const filteredCoats = coats.filter((coat) => {
    const isAvailableFilter = filter === '' || (filter === 'available' && coat.is_available) || (filter === 'unavailable' && !coat.is_available);
    const isLocationFilter = locationFilter === '' || coat.location_id.toString() === locationFilter;

    return isAvailableFilter && isLocationFilter;
  });

  // Calculate the range of coats to display based on the current page
  const indexOfLastCoat = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCoat = indexOfLastCoat - ITEMS_PER_PAGE;
  const currentCoats = filteredCoats.slice(indexOfFirstCoat, indexOfLastCoat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const applyFilter = (availabilityFilter, locationFilter) => {
    setFilter(availabilityFilter);
    setLocationFilter(locationFilter);
    setCurrentPage(1); // Reset the current page when changing the filter
  };

  return (
    <div className="Index">
      <div className="filter-column">
        <FilterColumn applyFilter={applyFilter} />
      </div>

      <div className="coats-container">
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredCoats.length}
          paginate={paginate}
        />

        <DisplayCoats coats={currentCoats} />

        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredCoats.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Index;
