//import "./2Pl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnePlayerPage() {
  const navigate = useNavigate();

  let [WhosTurn, SetTurn] = useState(true);
  let [hasWon, SetWon] = useState(false);
  let [winner, SetWinner] = useState("");
  let [draw, setDraw] = useState("");


  function turnSwitcher() {
    if (WhosTurn == true) {
      SetTurn(false);
      return "X";
    } else {
      SetTurn(true);
      return "O";
    }
  }

  function callOnClick(e) {

    let buttons = document.querySelectorAll(".baseStyle");

    let movesAvaliable=[0,1,2,3,4,5,6,7,8]

    function shapeDrawn(e) {
      let targetContent = e.target;
      
      console.log(e)

      if (hasWon == false && targetContent.textContent == "") {
        targetContent.textContent = `${turnSwitcher()}`;
      }

       let randomMove=Math.floor(Math.random()*9)
       WhosTurn=!WhosTurn

      if(buttons[randomMove].textContent==""&&hasWon == false){
        setTimeout(()=>{
          buttons[randomMove].textContent=`${turnSwitcher()}`
        },500)
      }

    }
    console.log(turnSwitcher())

    function winCondition() {
      let XorO = WhosTurn ? "X" : "O";

      let onWin = () => {
        SetWinner(`Player ${XorO} has won`);

        SetWon(true);
      };

      console.log(XorO);


  
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
    </>
  );
}
export default OnePlayerPage;
