import { render, screen } from "@testing-library/react";
import MatchSummary from "./matchSummary";

test("renders MatchSummary component", () => {
  render(<MatchSummary summary={{}} />);
  const headerElement = screen.getByText(/Match Summary/i);
  expect(headerElement).toBeInTheDocument();
});
