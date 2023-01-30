/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scoreboard from "./scoreboard";

test("renders DisplayCard component", () => {
  const { getByText } = render(<Scoreboard />);
  expect(getByText("Match Fixtures")).toBeInTheDocument();
});
