import "./App.css";
import Scoreboard from "./pages/scoreboard";
import ScoreContextProvider from "./context/score";

const App = () => {
  return (
    <ScoreContextProvider>
      <div className='App'>
        <h2> Scoreboard </h2>
        <Scoreboard />
      </div>
    </ScoreContextProvider>
  );
};

export default App;
