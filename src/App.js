import React, { useState, useEffect } from "react";
import InPlay from "./Pages/InPlay/InPlay"
import NotInPlay from "./Pages/NotInPlay/NotInPlay"

import "./App.css";



function App() {
  const [count, setCount] = useState(0);
  const [inPlay, setInPlay] = useState(true);

  useEffect(() => {
    if (count === 2) {
      setInPlay(false)
    }
  }, [count])

  return (
    <div>
      {inPlay ?
        <InPlay count={count} setCount={setCount} />
        :
        <NotInPlay count={count} setCount={setCount} setInPlay={setInPlay} />}
    </div>
  );
}

export default App;
