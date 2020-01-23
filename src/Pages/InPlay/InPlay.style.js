import { Container, Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const wiggle = keyframes`
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
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${wiggle} infinite 1s linear;
`;

const PumpButton = styled(Button)`
    
`

export { JamContainer, PumpButton }