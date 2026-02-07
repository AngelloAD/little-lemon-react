// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// src/setupTests.js
const originalWarn = console.warn;

beforeAll(() => {
  console.warn = (...args) => {
    if (
      args[0].includes("React Router Future Flag Warning") ||
      args[0].includes("Relative route resolution within Splat routes")
    ) {
      return;
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
});
