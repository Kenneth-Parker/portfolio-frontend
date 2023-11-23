import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./coatEditForm.css"

const API = import.meta.env.VITE_APP_URL;


function CoatEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coat, setCoat] = useState({
    name: "",
    brand: "",
    type: "",
    size: "",
    is_used: false,
    is_available: false,
    condition_rating: 5,
    image_url: "",
    location_id: "",
  });

  const [locations, setLocations] = useState([]);

  const handleTextChange = (event) => {
    setCoat({ ...coat, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCoat({ ...coat, is_used: !coat.is_used });
  };
  const handleCheckbox = () => {
    setCoat({ ...coat, is_available: !coat.is_available });
  };


  const handleLocationChange = (event) => {
    setCoat({ ...coat, location_id: event.target.value });
  };

  // Update a coat. Redirect to show view
  const updateCoat = () => {
    fetch(`${API}/coats/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coat)
    })
      .then((res) => res.json())
      .then(() => {
        navigate(`/coats/${id}`);
      });
  };

  useEffect(() => {
    // Fetch Coat Data
    fetch(`${API}/coats/${id}`)
      .then((res) => res.json())
      .then((res) => setCoat(res));

    // Fetch Locations Data
    fetch(`${API}/locations`)
      .then((res) => res.json())
      .then((res) => setLocations(res));
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Make PUT request to update the coat
    updateCoat();
  };

  return (
    <div className="Edit">
      <h1>COAT 2 COAT</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={coat.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Coat"
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          value={coat.brand}
          type="text"
          onChange={handleTextChange}
          placeholder="Brand of Coat"
          required
        />

        <label htmlFor="type">Type:</label>
        <select
          id="type"
          value={coat.type}
          onChange={handleTextChange}
          placeholder="Type of Coat"
          required
        >
          <option value="Winter Coat">Winter Coat</option>
          <option value="Jacket">Jacket</option>
          <option value="Trench Coat">Trench Coat</option>
          <option value="Peacoat">Peacoat</option>
          <option value="Parka">Parka</option>
          <option value="Evening Coat">Evening Coat</option>
          <option value="Denim Jacket">Denim Jacket</option>
          <option value="Explorer Jacket">Explorer Jacket</option>
          <option value="Leather Jacket">Leather Jacket</option>
          <option value="Bubble">Bubble</option>
        </select>



        <label htmlFor="size">Size:</label>
        <select
          id="size"
          value={coat.size}
          onChange={handleTextChange}
          required
        >
          <option value="Extra Small">Extra Small</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="X-Large">X-Large</option>
          <option value="XX-Large">XX-Large</option>
        </select>


        <label htmlFor="is_used">Used:</label>
        <input
          id="is_used"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={coat.is_used}
        />

        <label htmlFor="is_available">Available:</label>
        <input
          id="is_available"
          type="checkbox"
          onChange={handleCheckbox}
          checked={coat.is_available}
        />

        <label htmlFor="condition_rating">Condition Rating:</label>
        <input
          id="condition_rating"
          value={coat.condition_rating}
          type="number"
          min="0"
          max="5"
          step="1"
          onChange={handleTextChange}
          placeholder="Condition Rating"
          required
        />

        <label htmlFor="location_id">Location:</label>
        <select
          id="location_id"
          value={coat.location_id}
          onChange={handleTextChange}
          required
        >
          <option value="1">New York, NY</option>
          <option value="2">Bronx, NY</option>
          <option value="3">Brooklyn, NY</option>
        </select>
        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          value={coat.image_url}
          type="text"
          onChange={handleTextChange}
          placeholder="Image URL of Coat"
          required
        />

        <br />
        <br />
        <button className="button" type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/coats/${id}`}>
        <button className="button">Nevermind!</button>
      </Link>
    </div>
  );
}

export default CoatEditForm;
