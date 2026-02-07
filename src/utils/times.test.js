// src/utils/times.test.js

// Import the functions under test
import { initializeTimes, updateTimes } from "./times";
import { fetchAPI } from "../api";

// Mock the API module to isolate the utility functions and avoid external dependencies
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
}));

// Tests for the initializeTimes function
describe("initializeTimes", () => {
  // Reset all mocks before each test to ensure test isolation
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns available times for the current date", () => {
    // Arrange: simulate API response
    fetchAPI.mockReturnValue(["17:00", "18:00"]);

    // Act: call the function
    const result = initializeTimes();

    // Assert: verify the API was called
    expect(fetchAPI).toHaveBeenCalled();

    // Assert: verify the returned times match the mock
    expect(result).toEqual(["17:00", "18:00"]);
  });
});

// Tests for the updateTimes function
describe("updateTimes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("returns available times for a selected date", () => {
    // Arrange: define a specific date and API mock response
    const selectedDate = new Date("2026-01-01");
    const apiResponse = ["19:00", "20:00"];
    fetchAPI.mockReturnValue(apiResponse);

    // Act: call updateTimes with the selected date
    const result = updateTimes([], selectedDate);

    // Assert: verify the API was called with the correct date
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);

    // Assert: verify the returned times match the mock
    expect(result).toEqual(apiResponse);
  });
});
