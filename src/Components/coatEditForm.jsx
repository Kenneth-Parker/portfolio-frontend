import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_APP_URL;
// const API = import.meta.env.VITE_PORT;

function CoatEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coat, setCoat] = useState({
    name: "",
    brand: "",
    type: "",
    price: 0,
    is_favorite: false,
    rating: 5,
    image_url: "",
  });

  const handleTextChange = (event) => {
    setCoat({ ...coat, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCoat({ ...coat, is_favorite: !coat.is_favorite });
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
      .then((res) => {
        console.log(res);
        navigate(`/coats/${id}`);
      });
  };

  // On page load, fill in the form with the coat data.
  useEffect(() => {
    fetch(`${API}/coats/${id}`)
      .then((res) => res.json())
      .then((res) => setCoat(res));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCoat();
  };

  return (
    <div className="Edit">
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
        <input
          id="type"
          value={coat.type}
          type="text"
          onChange={handleTextChange}
          placeholder="Type of Coat"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={coat.price}
          type="number"
          step="0.01"
          onChange={handleTextChange}
          placeholder="Price of Coat"
          required
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={coat.is_favorite}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={coat.rating}
          type="number"
          min="0"
          max="5"
          step="1"
          onChange={handleTextChange}
          placeholder="Rating"
          required
        />

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
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/coats/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CoatEditForm;
