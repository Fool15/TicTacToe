import { useNavigate } from "react-router-dom";

function OnePlayerPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>One Player Game</h1>
      <h2>omeee</h2>
      <button onClick={() => navigate("/")}>{"<"}</button>
    </div>
  );
}
export default OnePlayerPage;
