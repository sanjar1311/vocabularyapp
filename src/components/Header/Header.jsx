import { useState, useContext, useRef, useEffect } from "react";
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import {Context} from "../Context"

import Words from "../Words/Words"

import "./Header.css"

function Header() {
  const [eng, setEng] = useState("");
  const [uzb, setUzb] = useState("");
  
  const engRef = useRef(null)

  const {engArr,uzbArr, setUzbArr, setEngArr} = useContext(Context)

  useEffect(()=> {
    engRef.current.focus()
  }, [])

  const addWords = () => {
    if(eng.length >=2 && uzb.length >= 2) {
      let uid = uuidv4();
      setEngArr([...engArr, {content: eng, id: uid}])
      setEng("")
      setUzbArr([...uzbArr, {content: uzb, id: uid}])
      setUzb("")
      engRef.current.focus()
    }
  }
  
  useEffect(()=> {
    localStorage.setItem("engArray", JSON.stringify(engArr))
    localStorage.setItem("uzbArray", JSON.stringify(uzbArr))
  }, [engArr, uzbArr])


  return(
    <div className="home-page">
      <h1 className="title">English <span className="title-inner">Words</span></h1>
      <div className="home-page-inner">
        <input
          className="words-input"
          type="text"
          placeholder="English Word"
          value={eng}
          onChange={e => setEng(e.target.value)}
          ref={engRef}
        />
        <input
          className="words-input"
          type="text"
          placeholder="Translate the Word"
          value={uzb}
          onChange={e=> setUzb(e.target.value)}
        />
        <button className="btn add-word-btn" onClick={addWords}>Add</button>
        {
          engArr.length > 1 ? <Link className="start-btn link" to="/game">Start</Link> : null
        }
      </div>
        <h4 className="quantity-of-words">Quantity of words: {engArr.length}</h4>

      <Words />
    </div>
  )
}

export default Header;