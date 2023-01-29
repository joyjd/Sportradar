import React, { useEffect, useContext } from "react";
import MatchPanel from "../../components/matchPanel";
import { ScoreContext } from "./../../context/score";
import MatchSummary from "../../components/matchSummary";
const dummyFixture = [
  {
    id: 1,
    HTeamName: "Mexico",
    HTeamScore: 0,
    ATeamName: "Canada",
    ATeamScore: 0,
    matchStatus: "start",
    startTime: 0,
  },
  {
    id: 2,
    HTeamName: "Spain",
    HTeamScore: 0,
    ATeamName: "Brazil",
    ATeamScore: 0,
    matchStatus: "start",
    startTime: 0,
  },
  {
    id: 3,
    HTeamName: "Germany",
    HTeamScore: 0,
    ATeamName: "France",
    ATeamScore: 0,
    matchStatus: "start",
    startTime: 0,
  },
  {
    id: 4,
    HTeamName: "Uruguay",
    HTeamScore: 0,
    ATeamName: "Italy",
    ATeamScore: 0,
    matchStatus: "start",
    startTime: 0,
  },
  {
    id: 5,
    HTeamName: "Argentina",
    HTeamScore: 0,
    ATeamName: "Australia",
    ATeamScore: 0,
    matchStatus: "start",
    startTime: 0,
  },
];

const Scoreboard = () => {
  const { setInitialDayFixture, scoreSummary } = useContext(ScoreContext);

  useEffect(() => setInitialDayFixture([...dummyFixture]), []);
  return (
    <div className='displayFlex'>
      <div>
        <h3> Match Fixtures </h3>
        {Object.keys(scoreSummary).length > 0 &&
          Object.keys(scoreSummary)
            .filter((dt) => scoreSummary[dt]["matchStatus"] !== "complete")
            .map((dt) => {
              const { id } = scoreSummary[dt];
              return <MatchPanel key={id} {...scoreSummary[dt]} />;
            })}
      </div>
      <div>
        <MatchSummary summary={scoreSummary} />
      </div>
    </div>
  );
};

export default Scoreboard;
