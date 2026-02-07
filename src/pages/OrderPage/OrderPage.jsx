// src/pages/OrderPage.jsx
import { useState } from "react";
import "./OrderPage.css";
import { menuItems } from "../../data/menuData";

export default function OrderPage() {
  // Stores selected items; index-based removal is acceptable
  // because this is a client-side demo cart
  const [cart, setCart] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Adds items without merging quantities to keep logic simple
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Removes a single item by its position in the cart
  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Parses prices once and keeps UI formatting separate
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("$", ""));
  }, 0);

  // Explicit category order improves UX consistency
  const categories = ["dishes", "desserts", "drinks"];

  return (
    <main className="order-page">
      <div className="container">
        <header className="order-header">
          <h1>Order Online</h1>
          <p>Choose your favorite dishes and place your order easily from home.</p>
        </header>

        {categories.map((category) => {
          const items = menuItems.filter(
            (item) => item.category === category
          );

          return (
            <section key={category}>
              <h2 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>

              <div className="order-grid">
                {items.map((item) => (
                  <article key={item.id} className="order-card">
                    <img src={item.image} alt={item.alt} />

                    <div className="order-card-body">
                      <div className="order-card-title">
                        <h3>{item.name}</h3>
                        <span>{item.price}</span>
                      </div>

                      {item.description && <p>{item.description}</p>}

                      <button
                        className="order-button"
                        onClick={() => addToCart(item)}
                      >
                        Add to order
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="cart-summary">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">No items added yet.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <span>
                      {item.name} – {item.price}
                    </span>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <p>
                <strong>Total:</strong> ${total.toFixed(2)}
              </p>

              <button
                className="order-button"
                onClick={() => setShowSummary(true)}
              >
                Place Order
              </button>
            </>
          )}
        </section>
      </div>

      {showSummary && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <h2>Order Summary</h2>

            <ul className="modal-list">
              {cart.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>

            <p className="modal-total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </p>

            <div className="modal-actions">
              <button
                className="order-button"
                onClick={() => {
                  setCart([]);
                  setShowSummary(false);
                  alert("Order placed successfully!");
                }}
              >
                Confirm Order
              </button>

              <button
                className="secondary-button"
                onClick={() => setShowSummary(false)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}