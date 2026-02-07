import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logos/logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Global container keeps layout consistent across the app */}
      <div className="container">
        <div className="footer-container">
          {/* Brand logo */}
          <div className="footer-logo">
            <img src={logo} alt="Little Lemon logo" />
          </div>

          {/* Navigation links */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>Chicago, Illinois</li>
              <li>+1 312 555 7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          {/* Social media links */}
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="#" aria-label="Instagram">Instagram</a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">Facebook</a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
