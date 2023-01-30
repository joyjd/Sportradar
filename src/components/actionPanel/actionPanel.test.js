import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionPanel from "./actionPanel";

test("renders ActionPanel component", () => {
  render(<ActionPanel id={0} matchStatus={"start"} HTeamScore={0} ATeamScore={0} />);
  const ActionPanelElement = screen.getByTestId("actionPanel-wrapper");
  expect(ActionPanelElement).toBeInTheDocument();
});
