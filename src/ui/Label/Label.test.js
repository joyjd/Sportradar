import { render, screen } from "@testing-library/react";
import Label from "./label";

test("renders Label", () => {
  render(<Label>Sample Text</Label>);
  const labelElement = screen.getByTestId("custom-label");
  expect(labelElement).toBeInTheDocument();
});
