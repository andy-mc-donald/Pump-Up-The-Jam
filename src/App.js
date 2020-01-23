import React, { useState } from "react";
import JamJar from "./Components/JamJar";
import { Container, Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import "./App.css";

const wiggle = keyframes`
// from {
//   transform: rotate(-10deg);
// }
// to {
//   transform: rotate(10deg);
// }
0% { transform: translate(1px, 1px) rotate(0deg); }
10% { transform: translate(-1px, -2px) rotate(-1deg); }
20% { transform: translate(-3px, 0px) rotate(1deg); }
30% { transform: translate(3px, 2px) rotate(0deg); }
40% { transform: translate(1px, -1px) rotate(1deg); }
50% { transform: translate(-1px, 2px) rotate(-1deg); }
60% { transform: translate(-3px, 1px) rotate(0deg); }
70% { transform: translate(3px, 1px) rotate(-1deg); }
80% { transform: translate(-1px, -1px) rotate(1deg); }
90% { transform: translate(1px, 2px) rotate(0deg); }
100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const JamContainer = styled(Container)`
  // border: 1px solid black;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // object-fit: cover;
  animation: ${wiggle} infinite 1s linear;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pump Up The Jam</h1>
      <h3>Score: {count}</h3>
      <JamContainer maxWidth="md">
        <JamJar count={count} />
      </JamContainer>
      <Button onClick={() => setCount(count + 1)}>Pump</Button>
    </div>
  );
}

export default App;
