import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const messageElement = screen.getByText(/Little Lemon/i);
  expect(messageElement).toBeInTheDocument();
});
