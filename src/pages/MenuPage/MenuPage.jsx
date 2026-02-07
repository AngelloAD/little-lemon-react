// src/pages/MenuPage.jsx
import "./MenuPage.css";
import { menuItems } from "../../data/menuData";

export default function MenuPage() {
  // Group items by category to avoid duplicated filtering logic
  const categories = {
    Dishes: menuItems.filter(item => item.category === "dishes"),
    Desserts: menuItems.filter(item => item.category === "desserts"),
    Drinks: menuItems.filter(item => item.category === "drinks"),
  };

  const renderSection = (title, items) => (
    <section className="menu-category" aria-labelledby={title}>
      <h2 id={title}>{title}</h2>

      <div className="menu-grid">
        {items.map(item => (
          <article key={item.id} className="menu-card">
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy" // Improves performance on large menus
            />

            <div className="menu-card-body">
              <div className="menu-card-title">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <main className="menu-page">
      <div className="container">
        {/* Page header */}
        <header className="menu-header">
          <h1>Our Menu</h1>
          <p>
            Discover our selection of Mediterranean dishes, made with fresh
            ingredients and traditional recipes.
          </p>
        </header>

        {/* Menu sections */}
        {Object.entries(categories).map(([title, items]) =>
          renderSection(title, items)
        )}
      </div>
    </main>
  );
}
