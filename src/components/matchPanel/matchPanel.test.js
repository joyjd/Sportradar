import { render, screen } from "@testing-library/react";
import MatchPanel from "./matchPanel";

test("renders MatchPanel component", () => {
  render(<MatchPanel matchStatus='start' id={123} HTeamName='Manu' HTeamScore={0} ATeamName='LiverPool' ATeamScore={0} />);
  const labelElement = screen.getByTestId("custom-parent-wrapper");
  expect(labelElement).toBeInTheDocument();
});
