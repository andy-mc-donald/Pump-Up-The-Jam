import React, { useState, useEffect, Fragment } from "react";
import InPlay from "./Pages/InPlay/InPlay"
import NotInPlay from "./Pages/NotInPlay/NotInPlay"
import { Container } from "@material-ui/core"

import "./App.css";



function App() {
  const [count, setCount] = useState(0);
  const [inPlay, setInPlay] = useState(false);



  return (
    <Fragment>
      {inPlay ?
        <InPlay count={count} setCount={setCount} setInPlay={setInPlay} />
        :
        <NotInPlay count={count} setCount={setCount} setInPlay={setInPlay} />}
    </Fragment>
  );
}

export default App;
