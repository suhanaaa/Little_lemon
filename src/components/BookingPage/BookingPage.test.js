import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve your table now!");
  expect(headingElement).toBeInTheDocument();
});

import { updateTimes } from "./BookingPage";

test("Update times function returns the same value", () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const selectDate = "2023-01-01";

  const updatedTimes = updateTimes(currentState, selectDate);

  expect(updatedTimes).toEqual(currentState);
});

import { initializeTimes } from "./BookingPage";

test("Initialize times function returns the correct expected value", () => {
  const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const initializedTime = initializeTimes();

  expect(initializedTime).toEqual(expectedValue);
});
