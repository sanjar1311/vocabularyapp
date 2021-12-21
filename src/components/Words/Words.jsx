import {useContext, useEffect} from "react"
import {Context} from "../Context"

import "./Words.css"

function Words() {
  const {uzbArr, engArr, setEngArr, setUzbArr} = useContext(Context);

  const deleteWordItem = id => {
    setUzbArr(prev => prev.filter(item => item.id !== id))
    setEngArr(prev => prev.filter(item => item.id !== id))
  }


  return(
    <div className="words-wrapper">
      <div className="orange">
        {
          engArr.map(word => (
            <p key={word.id} className="word-item">
              {word.content}&nbsp;-&nbsp;
            </p>
          ))
        }
      </div>
      <div>
        {
          uzbArr.map(word => (
            <p key={word.id} className="word-item">
              {word.content}&nbsp;
              <button className="del-btn" onClick={() => deleteWordItem(word.id)}>x</button>
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Words