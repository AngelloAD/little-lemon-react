// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";

// Shared layout components
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BookingPage from "./pages/BookingPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking";

// Utilities for booking time management
import { initializeTimes, updateTimes } from "./utils/times";

function App() {
  // useReducer is used to manage available booking times
  // This keeps the booking logic predictable and testable
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <Router>
      {/* Main navigation visible on all pages */}
      <Nav />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;