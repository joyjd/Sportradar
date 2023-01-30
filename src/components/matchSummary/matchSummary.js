import React, { useEffect, useState } from "react";
import ScoreLine from "../scoreLine";
import PropTypes from "prop-types";

/**
 *
 * @param {*} summary
 * @returns
 *
 * This functional component is responsible for displaying the sorted list of completed matches
 */
const MatchSummary = ({ summary = {} }) => {
  const [sortedList, setSortedList] = useState([]);

  /**
   * Sorting the list of matches on total scoreline and in case of equal goals sort on start time stamp
   */
  useEffect(() => {
    if (Object.values(summary).length > 0) {
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
    }
  }, [summary]);

  return (
    <div>
      <h3> Match Summary </h3>
      {sortedList.map((dt) => {
        const { id } = dt;
        return <ScoreLine key={id} {...dt} />;
      })}
    </div>
  );
};

MatchSummary.propTypes = {
  summary: PropTypes.shape({
    [PropTypes.objectOf(PropTypes.number)]: {
      id: PropTypes.number.isRequired,
      HTeamName: PropTypes.string.isRequired,
      HTeamScore: PropTypes.number.isRequired,
      ATeamName: PropTypes.oneOf(["start", "ongoing", "complete"]).isRequired,
      ATeamScore: PropTypes.number.isRequired,
      matchStatus: PropTypes.string.isRequired,
      startTime: PropTypes.number.isRequired,
    },
  }).isRequired,
};
export default MatchSummary;
