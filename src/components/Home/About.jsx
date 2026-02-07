import "./About.css";
import chef1 from "../../assets/images/image1.jpg";
import chef2 from "../../assets/images/image2.jpg";

function About() {
  return (
    // Semantic section improves accessibility and structure
    <section className="about">
      {/* Global container ensures consistent max-width */}
      <div className="container">
        {/* Internal layout handles content alignment */}
        <div className="about-container">
          {/* Textual brand storytelling */}
          <div className="about-text">
            <h2>About Little Lemon</h2>
            <h3>Chicago</h3>

            <p>
              Little Lemon is a family-owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>

            <p>
              Our chefs bring passion and creativity to every dish,
              using fresh and local ingredients.
            </p>
          </div>

          {/* Visual storytelling to reinforce brand identity */}
          <div className="about-images">
            <img
              src={chef1}
              alt="Chef preparing food in the kitchen"
              className="img-1"
            />
            <img
              src={chef2}
              alt="Interior of the Little Lemon restaurant"
              className="img-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
