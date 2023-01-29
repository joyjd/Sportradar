/**
 *
 *  @param {*} id
 *  @param {*} matchStatus
 *  @param {*} HTeamScore
 *  @param {*} ATeamScore
 * @returns
 *
 * This functional component is responsible for displaying the action buttons for each associated match
 *
 */

import React, { useContext } from "react";
import Button from "../../ui/Button";
import "./actionPanel.css";
import { ScoreContext } from "../../context/score";
import { getRandomNumber } from "./../../utils/utilities";
import PropTypes from "prop-types";

const ActionPanel = ({ id, matchStatus, HTeamScore, ATeamScore }) => {
  const { changeMatchStatus, changeMatchScores } = useContext(ScoreContext);

  const handleStartMatch = () => {
    changeMatchStatus(id, "ongoing", Date.now());
  };
  const handleEndMatch = () => {
    changeMatchStatus(id, "complete");
  };

  const handleMatchScoreUpdate = () => {
    changeMatchScores(id, HTeamScore + getRandomNumber(1, 5), ATeamScore + getRandomNumber(1, 5));
  };
  return (
    <div className='displayFlex actionPanel'>
      <div className='p-x-sm'>
        <Button title='Start Match' handleClick={() => handleStartMatch()} disabled={matchStatus !== "start"} />
      </div>
      <div className='p-x-sm'>
        <Button title='Update Score' handleClick={() => handleMatchScoreUpdate()} disabled={matchStatus !== "ongoing"} />
      </div>
      <div className='p-x-sm'>
        <Button title='End Match' handleClick={() => handleEndMatch()} disabled={matchStatus !== "ongoing"} />
      </div>
    </div>
  );
};

ActionPanel.propTypes = {
  id: PropTypes.number,
  matchStatus: PropTypes.string,
  HTeamScore: PropTypes.number,
  ATeamScore: PropTypes.number,
};
export default ActionPanel;
