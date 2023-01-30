import ScoreLine from "../scoreLine";
import ActionPanel from "../actionPanel";
import "./matchPanel.css";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @returns
 * This functional component is responsible for constructing the view of a match details with its respective action buttons
 */
const MatchPanel = (props) => {
  const { id, HTeamScore, ATeamScore, matchStatus } = props;
  return (
    <div className='displayFlex justifyContentSpace alignItemCenter matchPanel'>
      <ScoreLine {...props} />
      <div className='p-x-sm'>
        <ActionPanel id={id} HTeamScore={HTeamScore} ATeamScore={ATeamScore} matchStatus={matchStatus} />
      </div>
    </div>
  );
};

MatchPanel.propTypes = {
  matchStatus: PropTypes.oneOf(["start", "ongoing", "complete"]),
  id: PropTypes.number,
  HTeamScore: PropTypes.number,
  ATeamScore: PropTypes.number,
};

export default MatchPanel;
