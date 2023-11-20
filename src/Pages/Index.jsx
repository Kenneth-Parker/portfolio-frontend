import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"

const API = import.meta.env.VITE_APP_URL;
// const API = import.meta.env.VITE_PORT;

function DisplayCoats({ coats }) {
  return (
    <div>
      {/* <h2>Coats</h2> */}
      <ul>
        {coats.map((coat) => (
          <li key={coat.id}>
            <Link to={`/coats/${coat.id}`}>
              <img
                src={coat.image_url}
                alt="coat Image"
                style={{ width: '75px', height: 'auto' }}
              />
              <br />  {coat.name}: {coat.is_available}
            </Link>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Index() {
  const [coats, setCoats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}/coats`);
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

  return (
    <div className="Index">
      <DisplayCoats coats={coats} />
    </div>
  );
}

export default Index;
