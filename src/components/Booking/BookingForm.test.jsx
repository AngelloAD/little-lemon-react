// src/components/Booking/BookingForm.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { submitAPI } from "../../api";

// Mock submitAPI to isolate form behavior
jest.mock("../../api", () => ({
  submitAPI: jest.fn(() => true),
}));

const mockTimes = ["17:00", "18:00", "19:00"];

// Helper to render BookingForm with BrowserRouter
const renderForm = (dispatch = jest.fn()) => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={mockTimes} dispatch={dispatch} />
    </BrowserRouter>
  );
};

// Helper to render BookingForm with MemoryRouter (optional, for route testing)
const renderWithRouter = (dispatch = jest.fn()) =>
  render(
    <MemoryRouter>
      <BookingForm availableTimes={mockTimes} dispatch={dispatch} />
    </MemoryRouter>
  );

describe("BookingForm HTML validation", () => {
  test("renders all required form fields", () => {
    renderForm();

    // Assert: all key form fields are present
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });
});

describe("BookingForm validation logic", () => {
  test("shows error when name is empty after blur", () => {
    renderForm();

    // Act: blur the name input without typing
    fireEvent.blur(screen.getByLabelText(/name/i));

    // Assert: validation error is shown
    expect(screen.getByText(/campo obligatorio/i)).toBeInTheDocument();
  });
});

describe("BookingForm submission", () => {
  test("enables submit button when form is valid", () => {
    renderForm();

    // Act: fill all required fields
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567" },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-02-10" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    // Assert: submit button is enabled when form is valid
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeEnabled();
  });
});
