import "./Testimonials.css";
import avatar1 from "../../assets/icons/hombrea.png";
import avatar2 from "../../assets/icons/mujer1.png";
import avatar3 from "../../assets/icons/hombreb.png";
import avatar4 from "../../assets/icons/mujer2.png";

export default function Testimonials() {
  // Static testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John",
      avatar: avatar1,
      rating: "⭐⭐⭐⭐⭐",
      review: "Amazing food and great service!"
    },
    {
      id: 2,
      name: "Maria",
      avatar: avatar2,
      rating: "⭐⭐⭐⭐",
      review: "Loved the atmosphere and the food."
    },
    {
      id: 3,
      name: "Alex",
      avatar: avatar3,
      rating: "⭐⭐⭐⭐⭐",
      review: "One of the best restaurants in town!"
    },
    {
      id: 4,
      name: "Sophia",
      avatar: avatar4,
      rating: "⭐⭐⭐⭐",
      review: "Great experience, I will come back."
    }
  ];

  return (
    // Testimonials section displays customer feedback
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map(({ id, name, avatar, rating, review }) => (
            <article key={id} className="testimonial-card">
              <p className="rating">{rating}</p>

              <div className="user">
                <img src={avatar} alt={`User ${name}`} />
                <span>{name}</span>
              </div>

              <p className="review">{review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
