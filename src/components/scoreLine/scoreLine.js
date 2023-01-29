import React from "react";
import DisplayCard from "../displayCard";
/**
 *
 * @param {*} HTeamName
 * @param {*} HTeamScore
 * @param {*} ATeamName
 * @param {*} ATeamScore
 * @returns
 *
 * This functional component is responsible for displaying the score with respective to team-names
 */

const ScoreLine = ({ HTeamName, HTeamScore, ATeamName, ATeamScore }) => {
  return (
    <div>
      <DisplayCard name={HTeamName} score={HTeamScore} />
      --
      <DisplayCard name={ATeamName} score={ATeamScore} />
    </div>
  );
};

export default ScoreLine;
