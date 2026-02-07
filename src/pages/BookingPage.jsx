// src/pages/BookingPage.jsx
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/Booking/BookingForm";
import { submitAPI } from "../api";

export default function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  /*
    Handles form submission and controls navigation flow.
    The API response determines whether the user is redirected
    to the confirmation page.
  */
  const handleSubmit = (formData) => {
    const isSuccessful = submitAPI(formData);

    if (isSuccessful) {
      navigate("/booking-confirmed");
    }
  };

  return (
    <main className="container">
      <section aria-labelledby="booking-title">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={handleSubmit}
        />
      </section>
    </main>
  );
}