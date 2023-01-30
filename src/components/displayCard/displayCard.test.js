/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DisplayCard from "./displayCard";

test("renders DisplayCard component", () => {
  const { getByText } = render(<DisplayCard name='ManU' score={123} />);
  expect(getByText("ManU")).toBeInTheDocument();
});
