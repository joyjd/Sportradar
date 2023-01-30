import React from "react";
import DisplayCard from "../displayCard";
import PropTypes from "prop-types";
/**
 *
 * @param {*} HTeamName
 * @param {*} HTeamScore
 * @param {*} ATeamName
 * @param {*} ATeamScore
 * @returns
 *
 * This functional component is responsible for displaying the score with respective to  Home team and Away team
 */

const ScoreLine = ({ HTeamName = "", HTeamScore = 0, ATeamName = "", ATeamScore = 0 }) => {
  return (
    <div>
      <DisplayCard name={HTeamName} score={HTeamScore} />
      --
      <DisplayCard name={ATeamName} score={ATeamScore} />
    </div>
  );
};

ScoreLine.propTypes = {
  HTeamName: PropTypes.string.isRequired,
  HTeamScore: PropTypes.number.isRequired,
  ATeamName: PropTypes.string.isRequired,
  ATeamScore: PropTypes.number.isRequired,
};
export default ScoreLine;
