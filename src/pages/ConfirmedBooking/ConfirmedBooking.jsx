import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState([]);

  /*
    Reads booking data from localStorage on initial render.
    This allows the confirmation page to persist data
    even after a page refresh.
  */
  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("bookingData")) || [];
    setBookingData(storedBookings);
  }, []);

  const lastBookingIndex = bookingData.length - 1;

  return (
    <main className="container confirmed-booking">
      <section className="confirmation-card" aria-labelledby="confirmation-title">
        <h2 id="confirmation-title">🎉 Reservation Confirmed!</h2>
        <p>Thank you for booking a table at Little Lemon.</p>
        <p>We look forward to seeing you soon!</p>

        {bookingData.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                  <th>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => (
                  <tr
                    key={index}
                    className={index === lastBookingIndex ? "highlighted" : ""}
                  >
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.occasion || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="confirmation-actions">
          <Link to="/booking" className="action-button">
            Make Another Reservation
          </Link>
          <Link to="/" className="action-button">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}