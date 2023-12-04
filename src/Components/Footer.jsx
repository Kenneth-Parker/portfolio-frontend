import { Link } from "react-router-dom";
import './Footer.css';
import coatLogo from '../assets/fullLogo.png';

export default function Footer() {
  return (
    <nav className="Footer">

      <Link to="/">
        <img src={coatLogo} alt="Coat Logo" className="logo" />
      </Link>



      <div className="">
        <Link to="/coats">ABOUT</Link>
      </div>

      <div className="">
        <Link to="/locations">CONTACT</Link>
      </div>
      <p>© 2023 COAT 2 COAT, Inc.</p>
      {/* <button className="element2">
        <Link to="/coats/new">DONATE A COAT</Link>
      </button> */}
    </nav>
  );
}