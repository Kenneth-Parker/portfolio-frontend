// import { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./CoatNewForm.css"

// const API = import.meta.env.VITE_APP_URL;

// function CoatNewForm() {
//   const navigate = useNavigate();
//   const [coat, setCoat] = useState({
//     name: "",
//     brand: "",
//     type: "",
//     size: "",
//     is_used: false,
//     is_available: true,
//     condition_rating: 5,
//     image_url: "",
//     location_id: "",
//   });

//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     // Fetch Locations Data
//     fetch(`${API}/coats`)
//       .then((res) => res.json())
//       .then((res) => setLocations(res));
//   }, []);

//   const addCoat = () => {
//     const coatData = {
//       name: coat.name,
//       brand: coat.brand,
//       type: coat.type,
//       size: coat.size,
//       is_used: coat.is_used,
//       is_available: coat.is_available,
//       condition_rating: coat.condition_rating,
//       image_url: coat.image_url,
//       location_id: coat.location_id,
//     };

//     try {
//       fetch(`${API}/coats`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(coatData),
//       })
//         .then((res) => res.json())
//         .then(() => navigate("/coats"));
//     } catch (error) {
//       return error;
//     }
//   };

//   const handleTextChange = (event) => {
//     setCoat({ ...coat, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = (event) => {
//     setCoat({ ...coat, [event.target.id]: event.target.checked });
//   };

//   // const handleLocationChange = (event) => {
//   //   setCoat({ ...coat, location_id: event.target.value });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addCoat();
//   };

//   return (
//     <div className="New">
//       <h1>COAT 2 COAT</h1>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={coat.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of Coat"
//           required
//         />

//         <label htmlFor="brand">Brand:</label>
//         <input
//           id="brand"
//           value={coat.brand}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Brand of Coat"
//           required
//         />

//         <label htmlFor="type">Type:</label>
//         <select
//           id="type"
//           value={coat.type}
//           onChange={handleTextChange}
//           placeholder="Type of Coat"
//           required
//         >
//           <option value="Winter Coat">Winter Coat</option>
//           <option value="Jacket">Jacket</option>
//           <option value="Trench Coat">Trench Coat</option>
//           <option value="Peacoat">Peacoat</option>
//           <option value="Parka">Parka</option>
//           <option value="Evening Coat">Evening Coat</option>
//           <option value="Denim Jacket">Denim Jacket</option>
//           <option value="Explorer Jacket">Explorer Jacket</option>
//           <option value="Leather Jacket">Leather Jacket</option>
//           <option value="Bubble">Bubble</option>
//         </select>

//         <label htmlFor="size">Size:</label>
//         <select
//           id="size"
//           value={coat.size}
//           onChange={handleTextChange}
//           required
//         >
//           <option value="Extra Small">Extra Small</option>
//           <option value="Small">Small</option>
//           <option value="Medium">Medium</option>
//           <option value="Large">Large</option>
//           <option value="X-Large">X-Large</option>
//           <option value="XX-Large">XX-Large</option>
//         </select>

//         <label htmlFor="is_used">Used:</label>
//         <input
//           id="is_used"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={coat.is_used}
//         />

//         <label htmlFor="is_available">Available:</label>
//         <input
//           id="is_available"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={coat.is_available}
//         />

//         <label htmlFor="condition_rating">Condition Rating:</label>
//         <input
//           id="condition_rating"
//           value={coat.condition_rating}
//           type="number"
//           min="1"
//           max="5"
//           step="1"
//           onChange={handleTextChange}
//           placeholder="Condition Rating"
//           required
//         />

//         <label htmlFor="location_id">Location Code:</label>
//         <select
//           id="location_id"
//           value={coat.location_id}
//           onChange={handleTextChange}
//           required
//         >
//           <option value="1">New York, NY</option>
//           <option value="2">Bronx, NY</option>
//           <option value="3">Brooklyn, NY</option>
//         </select>

//         <label htmlFor="image_url">Image URL:</label>
//         <input
//           id="image_url"
//           value={coat.image_url}
//           type="url"
//           onChange={handleTextChange}
//           placeholder="Image URL of Coat"
//           required
//         />

//         <br />
//         <br />
//         <button className="button" type="submit">Submit</button>
//       </form>
//       <br />
//       <Link to={`/coats`}>
//         <button className="button">Nevermind!</button>
//       </Link>
//     </div>
//   );
// }

// export default CoatNewForm;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./CoatNewForm.css"

// const API = import.meta.env.VITE_APP_URL;

// function CoatNewForm() {
//     const navigate = useNavigate();
//     const [coat, setCoat] = useState({
//         name: "",
//         brand: "",
//         type: "",
//         size: "",
//         is_used: false,
//         is_available: true,
//         condition_rating: 5,
//         image_url: "",
//         location_id: "",
//     });

//     // Add a coat. Redirect to the index view.
//     const addCoat = () => {
//         const coatData = {
//             name: coat.name,
//             brand: coat.brand,
//             type: coat.type,
//             size: coat.size,
//             is_used: coat.is_used,
//             is_available: coat.is_available,
//             condition_rating: coat.condition_rating,
//             image_url: coat.image_url,
//             location_id: coat.location_id,
//         };

//         try {
//             fetch(`${API}/coats`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(coatData),
//             })
//                 .then((res) => res.json())
//                 .then(() => navigate("/coats"));
//         } catch (error) {
//             return error;
//         }
//     };

//     const handleTextChange = (event) => {
//         setCoat({ ...coat, [event.target.id]: event.target.value });
//     };

//     const handleCheckboxChange = (event) => {
//         setCoat({ ...coat, [event.target.id]: event.target.checked });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         addCoat();
//     };

//     return (
//         <div className="New">
//             <h1>COAT 2 COAT</h1>
//             <br />
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     id="name"
//                     value={coat.name}
//                     type="text"
//                     onChange={handleTextChange}
//                     placeholder="Name of Coat"
//                     required
//                 />

//                 <label htmlFor="brand">Brand:</label>
//                 <input
//                     id="brand"
//                     value={coat.brand}
//                     type="text"
//                     onChange={handleTextChange}
//                     placeholder="Brand of Coat"
//                     required
//                 />

//                 <label htmlFor="type">Type:</label>
//                 <select
//                     id="type"
//                     value={coat.type}
//                     type="text"
//                     onChange={handleTextChange}
//                     placeholder="Type of Coat"
//                     required
//                 >
//                     <option value="Winter Coat">Winter Coat</option>
//                     <option value="Jacket">Jacket</option>
//                     <option value="Trench Coat">Trench Coat</option>
//                     <option value="Peacoat">Peacoat</option>
//                     <option value="Parka">Parka</option>
//                     <option value="Evening Coat">Evening Coat</option>
//                     <option value="Denim Jacket">Denim Jacket</option>
//                     <option value="Explorer Jacket">Explorer Jacket</option>
//                     <option value="Leather Jacket">Leather Jacket</option>
//                     <option value="Bubble">Bubble</option>
//                 </select>

//                 <label htmlFor="size">Size:</label>
//                 <select
//                     id="size"
//                     value={coat.size}
//                     type="text"
//                     onChange={handleTextChange}
//                     placeholder="Size of Coat"
//                     required
//                 >
//                     <option value="Extra Small">Extra Small</option>
//                     <option value="Small">Small</option>
//                     <option value="Medium">Medium</option>
//                     <option value="Large">Large</option>
//                     <option value="X-Large">X-Large</option>
//                     <option value="XX-Large">XX-Large</option>
//                 </select>

//                 <label htmlFor="is_used">Used:</label>
//                 <input
//                     id="is_used"
//                     type="checkbox"
//                     onChange={handleCheckboxChange}
//                     checked={coat.is_used}
//                 />

//                 <label htmlFor="is_available">Available:</label>
//                 <input
//                     id="is_available"
//                     type="checkbox"
//                     onChange={handleCheckboxChange}
//                     checked={coat.is_available}
//                 />

//                 <label htmlFor="condition_rating">Condition Rating:</label>
//                 <input
//                     id="condition_rating"
//                     value={coat.condition_rating}
//                     type="number"
//                     min="1"
//                     max="5"
//                     step="1"
//                     onChange={handleTextChange}
//                     placeholder="Condition Rating"
//                     required
//                 />

//                 <label htmlFor="location_id">Location Code:</label>
//                 <select
//                     id="location_id"
//                     value={coat.location_id}
//                     onChange={handleTextChange}
//                     required
//                 >
//                     <option value="1">New York, NY</option>
//                     <option value="2">Bronx, NY</option>
//                     <option value="3">Brooklyn, NY</option>
//                 </select>



//                 <label htmlFor="image_url">Image URL:</label>
//                 <input
//                     id="image_url"
//                     value={coat.image_url}
//                     type="url"
//                     onChange={handleTextChange}
//                     placeholder="Image URL of Coat"
//                     required
//                 />

//                 <br />
//                 <br />
//                 <button className="button" type="submit">Submit</button>
//             </form>
//             <br />
//             <Link to={`/coats`}>
//                 <button className="button">Nevermind!</button>
//             </Link>
//         </div>
//     );
// }

// export default CoatNewForm;

