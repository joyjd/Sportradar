import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

test("renders button", () => {
  render(<Button title='' handleClick={() => {}} />);
  const buttonElement = screen.getByTestId("custom-button");
  expect(buttonElement).toBeInTheDocument();
});

test("calls handleClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<Button title='Test Button' handleClick={handleClick} />);
  fireEvent.click(screen.getByText(/Test Button/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
