// src/api.js

/**
 * Generates a deterministic pseudo-random number generator
 * based on a numeric seed.
 * This ensures predictable results for testing purposes.
 */
export const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => {
    s = (s * a) % m;
    return s / m;
  };
};

/**
 * Simulates an API call that returns available booking times
 * for a given date.
 */
export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let hour = 17; hour <= 23; hour++) {
    if (random() < 0.5) {
      result.push(`${hour}:00`);
    }
    if (random() < 0.5) {
      result.push(`${hour}:30`);
    }
  }

  return result;
};

/**
 * Simulates form submission to an API.
 * Always returns true to indicate a successful submission.
 */
export const submitAPI = (formData) => {
  return true;
};
