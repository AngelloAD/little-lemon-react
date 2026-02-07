// src/pages/ConfirmedBooking/ConfirmedBooking.test.jsx

// Import testing utilities and the component
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

// Clear localStorage before each test to avoid test contamination
beforeEach(() => {
  localStorage.clear();
});

describe("ConfirmedBooking - localStorage integration", () => {
  test("renders booking data retrieved from localStorage", () => {
    // Arrange: set up mock booking data in localStorage
    const mockBookingData = [
      {
        date: "2026-02-01",
        time: "18:00",
        guests: 2,
        occasion: "Birthday",
      },
    ];
    localStorage.setItem("bookingData", JSON.stringify(mockBookingData));

    // Act: render the component within BrowserRouter
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );

    // Assert: table exists
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Assert: locate the row corresponding to the booking
    const row = within(table).getByText("2026-02-01").closest("tr");
    expect(row).toBeInTheDocument();

    // Assert: verify all cells contain correct booking data
    expect(within(row).getByText("2026-02-01")).toBeInTheDocument(); // date
    expect(within(row).getByText("18:00")).toBeInTheDocument();       // time
    expect(within(row).getByText("2")).toBeInTheDocument();           // guests
    expect(within(row).getByText("Birthday")).toBeInTheDocument();    // occasion

    // Assert: the last booking row is highlighted
    expect(row).toHaveClass("highlighted");

    // Assert: action links are present
    expect(
      screen.getByRole("link", { name: /make another reservation/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /back to home/i })
    ).toBeInTheDocument();
  });

  test("shows 'No bookings found.' when localStorage is empty", () => {
    // Act: render component without any localStorage data
    render(
      <BrowserRouter>
        <ConfirmedBooking />
      </BrowserRouter>
    );

    // Assert: check that the fallback message is displayed
    expect(screen.getByText(/no bookings found/i)).toBeInTheDocument();
  });
});
