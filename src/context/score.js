import React, { useState } from "react";

export const ScoreContext = React.createContext({
  scoreSummary: {},
  setInitialDayFixture: () => {},
  changeMatchStatus: () => {},
  changeMatchScores: () => {},
});

/**
 * {
 *
 * 123: {
 *   id:12
 *   HTeamName: 'aas',
 *   HTeamScore: 1,
 *   ATeamName: 'fff',
 *   ATeamScore: 2,
 *   matchStatus: 'start' | 'ongoing' | 'complete'
 *   startTime: 0,
 * }}
 */

const ScoreContextProvider = ({ children }) => {
  const [scoreSummary, setScoreSummary] = useState({});

  const setInitialDayFixture = (data) => {
    if (Array.isArray(data)) {
      let temp = {};
      data.forEach(({ id, HTeamName, HTeamScore, ATeamName, ATeamScore, matchStatus, startTime }) => {
        temp[id] = {
          id,
          HTeamName,
          HTeamScore,
          ATeamName,
          ATeamScore,
          matchStatus,
          startTime,
        };
      });
      setScoreSummary({ ...temp });
    }
  };

  const changeMatchStatus = (id, matchStatus, newTimeStamp = undefined) => {
    setScoreSummary((sc) => ({
      ...sc,
      [id]: { ...sc[id], matchStatus, startTime: newTimeStamp === undefined ? sc[id]["startTime"] : newTimeStamp },
    }));
  };

  const changeMatchScores = (id, HTeamScore, ATeamScore) => {
    setScoreSummary((sc) => ({
      ...sc,
      [id]: { ...sc[id], HTeamScore, ATeamScore },
    }));
  };
  const contextValue = {
    scoreSummary,
    setInitialDayFixture,
    changeMatchStatus,
    changeMatchScores,
  };
  return <ScoreContext.Provider value={contextValue}>{children}</ScoreContext.Provider>;
};
export default ScoreContextProvider;
