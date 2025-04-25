import './TwoPlayerPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TwoPlayerPage(){
  const navigate = useNavigate();

    let [WhosTurn,SetTurn]=useState(true)
    let [hasWon,SetWon]=useState(false)
    let [winner,SetWinner]=useState("")

    function turnSwitcher(){

        if(WhosTurn==true){

            SetTurn(false);
            return "X"
        }
        else{

            SetTurn(true)
            return "O"
        }
    }
    function callOnClick(e){
        
        function shapeDrawn(e){

            let targetContent=e.target
    
            if( hasWon==false && targetContent.textContent=="" ){   

                   targetContent.textContent=`${turnSwitcher()}`
            }
        }
        function winCondition(){

                let onWin=()=>{

                    console.log("win")
                    SetWinner("Player X has won")
                    SetWon(true)
                }
            
               let buttons= document.querySelectorAll(".baseStyle")

                if(buttons[0].textContent=="X"&&buttons[1].textContent=="X"&&buttons[2].textContent=="X"){
                    onWin()
                }
                else if(buttons[3].textContent=="X"&&buttons[4].textContent=="X"&&buttons[5].textContent=="X"){
                    onWin()
                }
                else if(buttons[6].textContent=="X"&&buttons[7].textContent=="X"&&buttons[8].textContent=="X"){
                    onWin()
                }
                else if(buttons[0].textContent=="X"&&buttons[3].textContent=="X"&&buttons[6].textContent=="X"){
                    onWin()
                }
                else if(buttons[1].textContent=="X"&&buttons[4].textContent=="X"&&buttons[7].textContent=="X"){
                    onWin()
                }
                else if(buttons[2].textContent=="X"&&buttons[5].textContent=="X"&&buttons[8].textContent=="X"){
                    onWin()
                }
                else if(buttons[0].textContent=="X"&&buttons[4].textContent=="X"&&buttons[8].textContent=="X"){
                    onWin()
                }
                else if(buttons[6].textContent=="X"&&buttons[4].textContent=="X"&&buttons[2].textContent=="X"){
                    onWin()
                }
            }

            shapeDrawn(e)
            winCondition()
    }

    return(
        <>

        <h1>Two Player Game</h1>

        <h1>{WhosTurn?"Its X turn":"Its O turn"}</h1>
        <h1>{winner}</h1>
           <div className="gameContainer">
            <button className="baseStyle leftBorder topBorder" onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder " onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder" onClick={(e)=>{callOnClick(e)}}></button>

            <button className="baseStyle leftBorder topBorder" onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder " onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder" onClick={(e)=>{callOnClick(e)}}></button>

            <button className="baseStyle  leftBorder topBorder bottomBorder" onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder bottomBorder" onClick={(e)=>{callOnClick(e)}}></button>
            <button className="baseStyle rightBorder topBorder  bottomBorder" onClick={(e)=>{callOnClick(e)}} ></button>

        </div>
        <button onClick={() => navigate("/")}>{"<"}</button>

        </>
    )
}
export default TwoPlayerPage