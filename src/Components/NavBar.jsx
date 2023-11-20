import { Link } from "react-router-dom";
// import './NavBar.css';
// import coatLogo from '../assets/coat.png';

export default function NavBar() {
  return (
    <nav className="grid-container">

      {/* <div className="logo-container">
        <Link to="/">
          <img className="element22" src={coatLogo} alt="Coats" style={{ width: '25%', height: 'auto' }} />
        </Link>
      </div> */}

      <div className="nav-container">
        <h1 className="element1">
          <Link to="/coats">- C O A T S -</Link>
        </h1>
        <button className="element2">
          <Link to="/coats/new">Add New Coat</Link>
        </button>
      </div>
    </nav>
  );
}