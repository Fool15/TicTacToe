import HomeGamePage from "./HomeGame";
import GamePage from "./GamePAge";
import OnePlayerPage from "./1PlayerPage/OnePlayerPage";
import TwoPlayerPage from "./2PlayerPage/TwoPlayerPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeGamePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/one-player" element={<OnePlayerPage />} />
        <Route path="/two-player" element={<TwoPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
