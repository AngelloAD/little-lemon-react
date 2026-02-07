// src/components/Booking/BookingForm.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
import { submitAPI } from "../../api";

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  // Centralized form state for predictable updates
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  // Tracks validation errors per field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  // Used to avoid showing errors before user interaction
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    date: false,
    time: false,
    guests: false,
  });

  const [isValid, setIsValid] = useState(false);

  // Field-level validation improves UX by giving immediate feedback
  const validateField = (name, value) => {
    let message = "";

    switch (name) {
      case "name":
      case "date":
      case "time":
        if (!value.trim()) message = "Campo obligatorio";
        break;
      case "email":
        if (!value.trim()) message = "Campo obligatorio";
        else if (!/^\S+@\S+\.\S+$/.test(value)) message = "Email no válido";
        break;
      case "phone":
        if (!value.trim()) message = "Campo obligatorio";
        else if (!/^\d{7,}$/.test(value))
          message = "Debe tener al menos 7 dígitos";
        break;
      case "guests":
        if (!value || value < 1) message = "Campo obligatorio";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Updates form state and triggers time recalculation when date changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      validateField(name, value);
    }

    if (name === "date") {
      dispatch(new Date(value));
    }
  };

  // Marks field as touched to control error visibility
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  // Enables submit button only when all required fields are valid
  useEffect(() => {
    const requiredFields = ["name", "email", "phone", "date", "time", "guests"];
    const allValid = requiredFields.every(
      (field) => formData[field] && !errors[field]
    );
    setIsValid(allValid);
  }, [formData, errors]);

  // Provides visual feedback without extra DOM logic
  const getInputClass = (field) => {
    if (!touched[field]) return "";
    return errors[field] ? "invalid" : "valid";
  };

  // Handles final submission and persistence
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    const dataToSubmit = {
      ...formData,
      occasion: formData.occasion || "Other",
    };

    const success = submitAPI(dataToSubmit);

    if (success) {
      const existingBookings =
        JSON.parse(localStorage.getItem("bookingData")) || [];
      localStorage.setItem(
        "bookingData",
        JSON.stringify([...existingBookings, dataToSubmit])
      );
      navigate("/confirmed-booking");
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };

  return (
    <form className="container booking-page" onSubmit={handleSubmit}>
      <div className="booking-form">
        <h2>Reserve a Table</h2>

        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "phone", label: "Phone", type: "tel" },
        ].map(({ id, label, type }) => (
          <div className="form-row" key={id}>
            <label htmlFor={id}>
              {label} <span className="required">*</span>
            </label>
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClass(id)}
              required
            />
            {touched[id] && errors[id] && (
              <span className="error">{errors[id]}</span>
            )}
          </div>
        ))}

        <div className="form-row">
          <label htmlFor="date">
            Choose date <span className="required">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("date")}
            required
          />
          {touched.date && errors.date && (
            <span className="error">{errors.date}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="time">
            Choose time <span className="required">*</span>
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("time")}
            required
          >
            <option value="">Select time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {touched.time && errors.time && (
            <span className="error">{errors.time}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="guests">
            Number of guests <span className="required">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("guests")}
            required
          />
          {touched.guests && errors.guests && (
            <span className="error">{errors.guests}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" disabled={!isValid}>
          Make Your Reservation
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
