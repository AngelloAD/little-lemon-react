// src/pages/LoginPage/LoginPage.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // using default import (no .setup())
import LoginPage from "./LoginPage";

describe("LoginPage - form interactions and validation", () => {
  test("renders Login page with disabled login button initially", () => {
    // Arrange & Act: render the LoginPage component
    render(<LoginPage />);

    // Assert: page heading exists
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();

    // Assert: login button is initially disabled
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeDisabled();
  });

  test("shows required field errors on blur when fields are empty", async () => {
    render(<LoginPage />);

    // Arrange: get the input elements
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Act: simulate user focusing and leaving each input without typing
    await userEvent.click(emailInput);
    await userEvent.tab();

    await userEvent.click(passwordInput);
    await userEvent.tab();

    // Assert: at least two required field error messages are displayed
    const errors = screen.getAllByText(/campo obligatorio/i);
    expect(errors.length).toBeGreaterThanOrEqual(2);
  });

  test("enables login button only when both email and password are filled", async () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Act & Assert: fill email only -> button still disabled
    await userEvent.type(emailInput, "test@example.com");
    expect(loginButton).toBeDisabled();

    // Act & Assert: fill password -> button enabled
    await userEvent.type(passwordInput, "123456");
    expect(loginButton).toBeEnabled();
  });

  test("submits the form when email and password are valid", async () => {
    // Arrange: mock window.alert to avoid side effects
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<LoginPage />);

    // Act: fill the form
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "123456");

    // Act: click the login button
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    // Assert: alert called with success message
    expect(alertMock).toHaveBeenCalledWith("Login successful!");

    // Cleanup: restore the original alert
    alertMock.mockRestore();
  });
});
