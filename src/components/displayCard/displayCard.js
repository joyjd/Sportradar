import React from "react";
import Label from "../../ui/Label/label";

const DisplayCard = ({ name, score }) => {
  return (
    <React.Fragment>
      <Label>{name} </Label>
      <Label bold>{score}</Label>
    </React.Fragment>
  );
};

export default DisplayCard;
