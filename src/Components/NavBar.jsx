import { Link } from "react-router-dom";
import './NavBar.css';
import coatLogo from '../assets/fullLogo.png';

export default function NavBar() {
  return (
    <nav className="NavBar">

      <Link to="/">
        <img src={coatLogo} alt="Coat Logo" className="logo" />
      </Link>

      <button className="element1">
        <Link to="/coats">ALL COATS</Link>
      </button>

      <button className="element3">
        <Link to="/locations">LOCATIONS</Link>
      </button>

      <button className="element2">
        <Link to="/coats/new">DONATE A COAT</Link>
      </button>
    </nav>
  );
}
