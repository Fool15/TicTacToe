import './TwoPlayerPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TwoPlayerPage(){
  const navigate = useNavigate();

    let [Xturn,SetTurn]=useState(true)

    function turnSwitcher(){
        if(Xturn==true){
            SetTurn(false);
            return "X"
        }
        else{
            SetTurn(true)
            return "O"
        }
    }

    function tst(e){
        let targetContent=e.target
        if (targetContent.textContent==""){
           targetContent.textContent=`${turnSwitcher()}`
        }
    }

    return(
        <>

        <h1>Two Player Game</h1>

        <h1>{Xturn?"Its X turn":"Its O turn"}</h1>

        <div className="gameContainer">
            <button className="baseStyle leftBorder topBorder" onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder " onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder" onClick={(e)=>{tst(e)}}></button>

            <button className="baseStyle leftBorder topBorder"onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder "onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder"onClick={(e)=>{tst(e)}}></button>

            <button className="baseStyle  leftBorder topBorder bottomBorder"onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder leftBorder bottomBorder"onClick={(e)=>{tst(e)}}></button>
            <button className="baseStyle rightBorder topBorder  bottomBorder"onClick={(e)=>{tst(e)}} ></button>

        </div>
        <button onClick={() => navigate("/")}>{"<"}</button>

        </>
    )
}
export default TwoPlayerPage