import "./AboutPage.css";
import aboutImage from "../../assets/images/imagen3.jpg";

export default function AboutPage() {
  return (
    <main className="container about-page">
      {/* Intro section establishes brand identity and context */}
      <section className="about-hero--compact">
        <div className="about-hero-content">
          <div className="about-text">
            <h1>About Little Lemon</h1>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist.
            </p>
          </div>

          <div className="about-image">
            <img
              src={aboutImage}
              alt="Interior view of Little Lemon restaurant"
            />
          </div>
        </div>
      </section>

      {/* Story section reinforces authenticity and origin */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in Chicago, Little Lemon was created with one goal in mind:
          to bring authentic Mediterranean flavors to our community.
          Every dish we serve is crafted with fresh ingredients and inspired
          by recipes passed down through generations.
        </p>
      </section>

      {/* Values section highlights brand principles */}
      <section className="about-values">
        <div className="values-grid">
          <div className="value-card">
            <h3>Fresh Ingredients</h3>
            <p>
              We source fresh, high-quality ingredients to ensure every meal
              is flavorful and authentic.
            </p>
          </div>

          <div className="value-card">
            <h3>Family Tradition</h3>
            <p>
              Our recipes are rooted in family traditions and Mediterranean
              culture.
            </p>
          </div>

          <div className="value-card">
            <h3>Modern Experience</h3>
            <p>
              We blend tradition with a modern dining experience that feels
              welcoming and memorable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
