import {useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from "../components/Context"

function ResultPage() {

  const {correct, quontity} = useContext(Context)

  return(
    <div className="result-page">
      <div className="result-page__inner">
        <h2 className="result-page__title">Result</h2>
        <p>Total Question: <b>{quontity}</b></p>
        <p>Correct Answears: <b>{correct}</b></p>
        <p>Incorrect Answears: <b>{quontity - correct}</b></p>
        <p className="result-page__percent"><b>Result is: {(correct / quontity * 100).toFixed(2)}%</b></p>
        <h3>{correct / quontity * 100 > 90 ? "Good Job!!!" : "Try again!!!" }</h3>
        <div>
          <Link className="home-btn" to="/">Home</Link>
          <Link className="game-btn" to="/game">Game</Link>
        </div>
      </div>
    </div>
  )
}

export default ResultPage