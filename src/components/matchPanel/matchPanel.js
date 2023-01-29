import ScoreLine from "../scoreLine";
import ActionPanel from "../actionPanel";
import "./matchPanel.css";

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

export default MatchPanel;
