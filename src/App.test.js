import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App title='' handleClick={() => {}} />);
  const linkElement = screen.getByText(/Scoreboard/i);
  expect(linkElement).toBeInTheDocument();
});
