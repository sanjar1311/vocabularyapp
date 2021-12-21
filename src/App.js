import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import EnterPage from './pages/EnterPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage'
import NotFound from "./components/NotFound";

function App() {
  return(
    <>
      <Routes>
        <Route exact path="/" element={<EnterPage />} />
        <Route exact path="/game" element={<GamePage />} />
        <Route exact path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;