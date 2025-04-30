//import "./2Pl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnePlayerPage() {
  const navigate = useNavigate();

  let [WhosTurn, SetTurn] = useState(true);
  let [hasWon, SetWon] = useState(false);
  let [winner, SetWinner] = useState("");
  let [draw, setDraw] = useState("");

  // function turnSwitcher() {
  //   if (WhosTurn == true) {
  //     SetTurn(false);
  //     return "X";
  //   } else {
  //     SetTurn(true);
  //     return "O";
  //   }
  // }

  let allMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function callOnClick(e, position) {
    let buttons = document.querySelectorAll(".baseStyle");

    function shapeDrawn(e, position) {

      winCondition();
      let targetContent = e.target;
      if (hasWon) return;

      if (targetContent.textContent === "") {
        targetContent.textContent = `${WhosTurn ? "X" : "O"}`;

        console.log("my move", position);
        allMoves[position] = undefined;
      }

      let movesAvaliable = allMoves.filter((nr) => {
        return nr != undefined;
      });

      console.log("all avaliable moves", movesAvaliable);

      let randomMove = Math.floor(Math.random() * movesAvaliable.length); //[1,2,3,4,5,6,7,8]

      if (hasWon == false) {
        setTimeout(() => {
          buttons[movesAvaliable[randomMove]].textContent = `${
            !WhosTurn ? "X" : "O"
          }`;

          for (let i = 0; i < allMoves.length; i++) {
            if (allMoves[i] == movesAvaliable[randomMove]) {
              allMoves[i] = undefined;
            }
          }

          winCondition();
        }, 500);
      }
    }

    function winCondition() {
      
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7], //kombinimet e mundshme
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        
        let buttons = document.querySelectorAll(".baseStyle");
        for (let [a, b, c] of lines) {
          const btnA = buttons[a].textContent;
          const btnB = buttons[b].textContent; //merr tekstin ose vleren nga butoni  dhe e ruan
          const btnC = buttons[c].textContent;
          if (btnA !== "" && btnA === btnB && btnA === btnC) {
            SetWinner(`Player ${btnA} has won`);
            SetWon(true);
            return;
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
      
    }

    shapeDrawn(e, position);
    winCondition();
    // robotMove()
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
    <>
      <h1 style={{ color: "white" }}>Two Player Game</h1>

      <h1 style={{ color: "white" }}>
        {WhosTurn ? "Its your turn" : "Its robots turn"}
      </h1>

      <h1 style={{ color: "white" }}>{winner}</h1>
      <h1 style={{ color: "white" }}>{draw}</h1>

      <div className="gameContainer">
        <button
          className="baseStyle leftBorder topBorder"
          onClick={(e) => {
            callOnClick(e, 0);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder "
          onClick={(e) => {
            callOnClick(e, 1);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder"
          onClick={(e) => {
            callOnClick(e, 2);
          }}
        ></button>

        <button
          className="baseStyle leftBorder topBorder"
          onClick={(e) => {
            callOnClick(e, 3);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder "
          onClick={(e) => {
            callOnClick(e, 4);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder"
          onClick={(e) => {
            callOnClick(e, 5);
          }}
        ></button>

        <button
          className="baseStyle  leftBorder topBorder bottomBorder"
          onClick={(e) => {
            callOnClick(e, 6);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder leftBorder bottomBorder"
          onClick={(e) => {
            callOnClick(e, 7);
          }}
        ></button>
        <button
          className="baseStyle rightBorder topBorder  bottomBorder"
          onClick={(e) => {
            callOnClick(e, 8);
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
          Restart{" "}
        </button>
      </div>
    </>
  );
}
export default OnePlayerPage;
