// src/pages/OrderPage/OrderPage.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // realistic user simulation
import OrderPage from "./OrderPage";
import { menuItems } from "../../data/menuData";

describe("OrderPage – initial render", () => {
  test("renders page title and all menu items", () => {
    // Arrange & Act: render OrderPage component
    render(<OrderPage />);

    // Assert: page title is visible
    expect(
      screen.getByRole("heading", { name: /order online/i })
    ).toBeInTheDocument();

    // Assert: all menu items are rendered on the page
    menuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});

describe("OrderPage – user interactions", () => {
  test("adds an item to the cart", async () => {
    render(<OrderPage />);

    // Act: simulate clicking "Add to Order" for the first menu item
    await userEvent.click(
      screen.getAllByRole("button", { name: /add to order/i })[0]
    );

    // Assert: cart displays the added item
    expect(screen.getByText(/your cart/i).parentElement)
      .toHaveTextContent(menuItems[0].name);
  });

  test("removes an item from the cart", async () => {
    render(<OrderPage />);

    // Arrange: add first item
    await userEvent.click(
      screen.getAllByRole("button", { name: /add to order/i })[0]
    );

    // Act: remove that item
    await userEvent.click(screen.getByRole("button", { name: /remove/i }));

    // Assert: item is no longer in the cart
    expect(screen.getByText(/your cart/i).parentElement)
      .not.toHaveTextContent(menuItems[0].name);
  });

  test("updates total when multiple items are added", async () => {
    render(<OrderPage />);

    const addButtons = screen.getAllByRole("button", { name: /add to order/i });

    // Act: add two different items
    await userEvent.click(addButtons[0]);
    await userEvent.click(addButtons[1]);

    // Assert: total is updated from $0
    expect(screen.getByText(/total/i)).not.toHaveTextContent("$0");
  });

  test("displays order summary modal and confirms order", async () => {
    // Arrange: mock window.alert to prevent actual alert
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<OrderPage />);

    // Act: add an item and open order summary modal
    await userEvent.click(
      screen.getAllByRole("button", { name: /add to order/i })[0]
    );
    await userEvent.click(screen.getByRole("button", { name: /place order/i }));

    // Assert: order summary modal is displayed
    expect(
      screen.getByRole("heading", { name: /order summary/i })
    ).toBeInTheDocument();

    // Act: confirm order
    await userEvent.click(screen.getByRole("button", { name: /confirm order/i }));

    // Assert: alert called with success message
    expect(alertMock).toHaveBeenCalledWith("Order placed successfully!");

    // Cleanup: restore original alert
    alertMock.mockRestore();
  });
});