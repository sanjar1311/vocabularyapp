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
    if(checked.length >= 2) {
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
  }

  const returnGame = () => {
    setQuontity(prev => prev = 0)
    setCorrect(prev => prev = 0)
  }
  
  return(
    <div className="game-page">
      
      <div className="game-page-inner">
        <h4 className={checkingResult ? "correct question-word" : "incorrect question-word"}>{uzbArr[randomNum].content}</h4>
        <input
          className="check-input"
          type="text"
          placeholder="Enter Translate The Word"
          value={checked}
          onChange={e=> setChecked(e.target.value)}
          ref={checkRef}
          required="required"
        />
        <button className="btn check-btn" onClick={checkButton}>Check</button>

        <div className="bill">
          <span className="bill__correct">{correct}</span>
          <span> / </span>
          <span>{quontity}</span>
        </div>

        <div>
          <Link className="link back-link" to="/">Home</Link>
          <button className="btn return-btn" onClick={returnGame}>Return</button>
          <Link to="/result" className="link result-btn" onClick={()=> resu.play()}>Result</Link>
        </div>
      </div>

    </div>
  )
}

export default GamePage