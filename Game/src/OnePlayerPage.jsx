import { useNavigate } from "react-router-dom";

function OnePlayerPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>One Player Game</h1>
      <button onClick={() => navigate("/")}>{"<"}</button>
    </div>
  );
}
export default OnePlayerPage;
