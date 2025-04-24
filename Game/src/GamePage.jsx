import { useNavigate } from "react-router-dom";

function GamePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Game Page</h1>
      <button onClick={() => navigate("/")}>{"<"}</button>
    </div>
  );
}
export default GamePage;
