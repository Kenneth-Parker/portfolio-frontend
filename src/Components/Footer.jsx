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
        <Link to="/about">ABOUT</Link>
      </div>

      <div className="">
        <Link to="/contact">CONTACT</Link>
      </div>
      <p>© 2023 COAT 2 COAT, Inc.</p>

    </nav>
  );
}
