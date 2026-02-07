import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import logo from "../../assets/logos/logo.svg";

export default function Nav() {
  // Local state controls the visibility of the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Ensures the menu closes after navigation for better UX on mobile
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        {/* Logo also acts as a home navigation link */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>

        {/* Hamburger button toggles navigation visibility on mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Navigation links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>ABOUT</Link></li>
            <li><Link to="/menu" onClick={handleLinkClick}>MENU</Link></li>
            <li><Link to="/booking" onClick={handleLinkClick}>RESERVATIONS</Link></li>
            <li><Link to="/order" onClick={handleLinkClick}>ORDER ONLINE</Link></li>
            <li><Link to="/login" onClick={handleLinkClick}>LOGIN</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
