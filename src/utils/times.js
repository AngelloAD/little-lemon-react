// src/utils/times.js
import { fetchAPI } from "../api";

/*
  Initializes available booking times using the current date.
  This function is designed to be used as the initial state
  provider for a reducer or state hook.
*/
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

/*
  Updates available booking times when the selected date changes.
  The first argument is intentionally ignored to keep compatibility
  with reducer signatures while keeping logic simple.
*/
export const updateTimes = (_, selectedDate) => {
  return fetchAPI(selectedDate);
};