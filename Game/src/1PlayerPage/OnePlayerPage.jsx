import { useNavigate } from "react-router-dom";
import "./OnePlayerPage.css";
import { useEffect, useState } from "react";
function OnePlayerPage() {
  const navigate = useNavigate();
  let [WhosTurn, SetTurn] = useState(true);
  let [hasWon, SetWon] = useState(false);
  let [winner, SetWinner] = useState("");
  let [draw, setDraw] = useState("");

  useEffect(() => {
    if (!WhosTurn && !hasWon) {
      setTimeout(() => {
        botMove();
      }, 500);
    }
  }, [WhosTurn]);

  function botMove() {
    let buttons = document.querySelectorAll(".baseStyle");
    const emptyButtons = Array.from(buttons).filter(
      (btn) => btn.textContent === ""
    );

    if (emptyButtons.length === 0) return;
    const randomIndex = Math.floor(Math.random() * emptyButtons);
    const selectedButtons = emptyButtons[randomIndex];
    selectedButtons.textContent = "O";
    SetTurn(true);
    winCondition();
  }

  function callOnClick(e) {
    if (!WhosTurn || hasWon) return;
    function shapeDrawn(e) {
      let targetContent = e.target;

      if (targetContent.textContent === "") {
        targetContent.textContent = "X";
        SetTurn(false);
        winCondition();
      }
    }

    function winCondition() {
      let XorO = WhosTurn ? "X" : "O";

      let onWin = () => {
        SetWinner(`Player ${XorO} has won`);

        SetWon(true);
      };

      console.log(XorO);

      let buttons = document.querySelectorAll(".baseStyle");

      if (
        buttons[0].textContent == XorO &&
        buttons[1].textContent == XorO &&
        buttons[2].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[3].textContent == XorO &&
        buttons[4].textContent == XorO &&
        buttons[5].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[6].textContent == XorO &&
        buttons[7].textContent == XorO &&
        buttons[8].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[0].textContent == XorO &&
        buttons[3].textContent == XorO &&
        buttons[6].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[1].textContent == XorO &&
        buttons[4].textContent == XorO &&
        buttons[7].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[2].textContent == XorO &&
        buttons[5].textContent == XorO &&
        buttons[8].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[0].textContent == XorO &&
        buttons[4].textContent == XorO &&
        buttons[8].textContent == XorO
      ) {
        onWin();
      } else if (
        buttons[6].textContent == XorO &&
        buttons[4].textContent == XorO &&
        buttons[2].textContent == XorO
      ) {
        onWin();
      } else {
        let isDraw = true;
        buttons.forEach((btn) => {
          if (btn.textContent === "") {
            isDraw = false;
          }
        });
        if (isDraw && !hasWon) {
          setDraw("It's a draw! Restart the game!!");
        }
      }
    }

    shapeDrawn(e);
    setTimeout(() => winCondition(), 100);
  }

  function restart() {
    document.querySelectorAll(".baseStyle").forEach((e) => {
      e.textContent = "";
      SetTurn(true);
      SetWon(false);
      SetWinner("");
      setDraw("");
    });
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>One Player Game</h1>
      <h1 style={{ color: "white" }}>
        {WhosTurn ? "Its X turn" : "Its O turn"}
      </h1>
      <h1 style={{ color: "white" }}>{winner}</h1>
      <h1 style={{ color: "white" }}>{draw}</h1>
      <div className="gameContainer">
        <button
          className="baseStyle leftBorder topBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder "
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>

        <button
          className="baseStyle leftBorder topBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder "
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>

        <button
          className="baseStyle  leftBorder topBorder bottomBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder bottomBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder  bottomBorder"
          onClick={(e) => {
            callOnClick(e);
          }}
        ></button>
      </div>
      <br />
      <br />
      <div className="buttons">
        <button className="buttonStyle" onClick={() => navigate("/")}>
          {"Home"}
        </button>
        <button
          className="buttonStyle"
          onClick={() => {
            restart();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
export default OnePlayerPage;
