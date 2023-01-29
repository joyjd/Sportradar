import React, { useEffect, useState } from "react";
import ScoreLine from "../scoreLine";

const MatchSummary = ({ summary }) => {
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    let tempArr = Object.values(summary);
    tempArr = tempArr
      .filter((dt) => dt.matchStatus === "complete")
      .sort((a, b) => {
        if (Number(b.HTeamScore) + Number(b.ATeamScore) === Number(a.HTeamScore) + Number(a.ATeamScore)) {
          return a.startTime - b.startTime;
        }
        return Number(b.HTeamScore) + Number(b.ATeamScore) - (Number(a.HTeamScore) + Number(a.ATeamScore));
      });
    setSortedList([...tempArr]);
  }, [summary]);

  return (
    <div>
      <h3> Match Summary </h3>
      {sortedList.map((dt) => {
        const { id, startTime } = dt;
        console.log(startTime);
        return <ScoreLine key={id} {...dt} />;
      })}
    </div>
  );
};

export default MatchSummary;
