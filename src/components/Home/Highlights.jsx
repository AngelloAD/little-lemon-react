import "./Highlights.css";
import "../../styles/buttons.css";
import { menuItems } from "../../data/menuData";
import { useNavigate } from "react-router-dom";

export default function Highlights() {
  const navigate = useNavigate();

  // IDs of featured menu items displayed in the highlights section
  const featuredIds = [1, 2, 9];

  // Filter only the items marked as featured
  const featuredItems = menuItems.filter(item =>
    featuredIds.includes(item.id)
  );

  return (
    // Highlights section showcases weekly specials
    <section className="highlights">
      <div className="container">
        {/* Section header with CTA */}
        <div className="highlights-header">
          <h2>This week’s specials</h2>

          {/* Primary CTA redirects to the order page */}
          <button
            className="primary-button"
            onClick={() => navigate("/order")}
          >
            Online Menu
          </button>
        </div>

        {/* Featured items grid */}
        <div className="highlights-grid">
          {featuredItems.map(item => (
            <article key={item.id} className="card">
              <img src={item.image} alt={item.alt} />

              <div className="card-body">
                <div className="card-title">
                  <h3>{item.name}</h3>
                  <span>{item.price}</span>
                </div>

                <p>{item.description}</p>

                {/* Secondary action styled as a link */}
                <button
                  className="order-link"
                  onClick={() => navigate("/order")}
                >
                  Order a delivery
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}