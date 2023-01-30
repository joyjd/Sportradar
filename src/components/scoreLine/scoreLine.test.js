import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScoreLine from "./scoreLine";

test("renders ScoreLine component", () => {
  render(<ScoreLine HTeamName='Manu' HTeamScore={0} ATeamName='LiverPool' ATeamScore={0} />);
  const ScoreLineElement = screen.getByTestId("custom-parent-scoreLine-wrapper");
  expect(ScoreLineElement).toBeInTheDocument();
});
