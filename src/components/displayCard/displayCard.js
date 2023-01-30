import React from "react";
import Label from "../../ui/Label/label";
import PropTypes from "prop-types";

/**
 *
 * @param {*} name
 * @param {*} score
 * @returns
 * This functional component is responsible for displaying the score for a Team
 */
const DisplayCard = ({ name = "", score = 0 }) => {
  return (
    <React.Fragment>
      <Label>{name} </Label>
      <Label bold>{score}</Label>
    </React.Fragment>
  );
};

DisplayCard.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default DisplayCard;
