import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import "./Hero.css";
import "../../styles/buttons.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    // Hero section introduces brand identity and primary action
    <section className="hero">
      {/* Global container ensures consistent max-width */}
      <div className="container hero-content">
        {/* Textual hierarchy for brand and location */}
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>

          {/* Primary CTA drives users to the booking flow */}
          <button
            className="primary-button"
            onClick={() => navigate("/booking")}
          >
            Reserve a Table
          </button>
        </div>

        {/* Hero image reinforces brand atmosphere */}
        <div className="hero-image">
          <img
            src={heroImage}
            alt="Mediterranean dishes served at Little Lemon restaurant"
          />
        </div>
      </div>
    </section>
  );
}
