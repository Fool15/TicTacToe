import { useNavigate } from "react-router-dom";
import "./HomeGame.css";

function HomeGamePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="border-logo">
        <h3 id="Tic">Tic</h3>

        <h3 id="Tac">Tac</h3>

        <h3 id="Toe">Toe</h3>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            navigate("/one-player");
          }}
          className="buttonStyle"
        >
          1 Player
        </button>

        <button
          onClick={() => {
            navigate("/two-player");
          }}
          className="buttonStyle"
        >
          2 Players
        </button>
      </div>

      <div className="Game-options">
        <img src="/settings.png" alt="Seting" id="setting" />

        <img src="/star.png" alt="star" id="star" />

        <img src="/Sharethis-grey.png" alt="share" id="share" />
      </div>
    </div>
  );
}

export default HomeGamePage;
