import { useContext, useEffect, useState, useRef } from "react"
import {Link} from "react-router-dom"
import { Context } from "../components/Context"

import correctAnswer from "../audio/correct.mp3"
import wrongAnswer from "../audio/wrong.mp3"
import resultAudio from "../audio/result.mp3"

import "./Pages.css"

function GamePage() {
  const {setQuontity, quontity, engArr, uzbArr, correct, setCorrect } = useContext(Context);
  const [checked, setChecked] = useState("")
  const [randomNum, setRandomNum] = useState(1);

  const corr = new Audio(correctAnswer);
  const wro = new Audio(wrongAnswer);
  const resu = new Audio(resultAudio);

  const [checkingResult, setCheckingResult] = useState(false);

  const checkRef = useRef(null);
  
  useEffect(()=> {
    checkRef.current.focus()
  },[])
  
  const checkButton = () => {
    setRandomNum((Math.random() * (engArr.length - 1)).toFixed(0));
    setChecked("")
    checkRef.current.focus();
    setQuontity(prev => prev + 1)
    if(engArr[randomNum].content === checked) {
      setCheckingResult(true)
      corr.play();
      setCorrect(prev => prev + 1)
    } else {
      setCheckingResult(false)
      wro.play()
    }
  }

  const returnGame = () => {
    setQuontity(prev => prev = 0)
    setCorrect(prev => prev = 0)
  }
  
  return(
    <div className="game-page">
      
      <div className="game-page-inner">
        <h4 className="question-word">{uzbArr[randomNum].content}</h4>
        <input
          className={checkingResult ? "correct check-input" : "incorrect check-input"}
          type="text"
          placeholder="Enter Translate The Word"
          value={checked}
          onChange={e=> setChecked(e.target.value)}
          ref={checkRef}
          required="required"
        />
        <button className={checkingResult ? "correct btn check-btn" : "incorrect btn check-btn"} onClick={checkButton}>Check</button>

        <div className="bill">
          <span className="bill__correct">{correct}</span>
          <span> / </span>
          <span>{quontity}</span>
        </div>

      </div>

      <div>
        <Link to="/result" className="btn result-btn" onClick={()=> resu.play()}>Result</Link>
        <button className="btn return-btn" onClick={returnGame}>Return</button>
        <Link className="btn back-link" to="/">Home</Link>
      </div>
    </div>
  )
}

export default GamePage