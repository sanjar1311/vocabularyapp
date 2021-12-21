import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({children}) {

  const [engArr, setEngArr] = useState(JSON.parse(localStorage.getItem("engArray")) || []);
  const [uzbArr, setUzbArr] = useState(JSON.parse(localStorage.getItem("uzbArray")) || []);
  const [correct, setCorrect] = useState(0);
  const [quontity, setQuontity] = useState(0);

  return(
    <Context.Provider value={{engArr,uzbArr,setUzbArr, setEngArr, correct, setCorrect, quontity, setQuontity}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}