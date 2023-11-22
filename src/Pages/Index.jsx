import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const API = import.meta.env.VITE_APP_URL;
const ITEMS_PER_PAGE = 6;

function DisplayCoats({ coats }) {
  return (
    <div className="coats-grid">
      {coats.map((coat) => (
        <div key={coat.id} className="coat-item">
          <Link to={`/coats/${coat.id}`}>
            {coat.name}: {coat.is_available ? '✅' : 'Unavailable'}
            <br />
            <br />
            <img src={coat.image_url} alt="coat Image" className="coat-image" />
            <br />
          </Link>
          <br />
          Location: <br />
          {coat.city}, {coat.state}
          <br />
          <br />
          <Link to={`/coats/${coat.id}`}>
            <button className="view-coat">View Coat</button>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}

function Index() {
  const [coats, setCoats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate the range of coats to display based on the current page
  const indexOfLastCoat = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCoat = indexOfLastCoat - ITEMS_PER_PAGE;
  const currentCoats = coats.slice(indexOfFirstCoat, indexOfLastCoat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Index">
       <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={coats.length}
        paginate={paginate}
      />

      <DisplayCoats coats={currentCoats} />

      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={coats.length}
        paginate={paginate}
      />
    </div>
  );
}

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Index;
