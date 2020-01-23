import React from 'react'

import { Container, Button, Typography } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const Title = styled(Typography)`
  color: pink;
  font-family: 'Orbitron', sans-serif;

  span:nth-child(1) {
  color: #73c5e0;
}
span:nth-child(2) {
  color: #ddb429;
}
span:nth-child(3) {
  color: #87b93b;
}
span:nth-child(4) {
  color: #9fa7c7;
}
span:nth-child(5) {
  color: #ef96e4;
}
span:nth-child(6) {
  color: #73c5e0;
}
span:nth-child(7) {
  color: #ddb429;
}
span:nth-child(8) {
  color: #87b93b;
}
span:nth-child(9) {
  color: #9fa7c7;
}
span:nth-child(10) {
  color: #ef96e4;
}
span:nth-child(11) {
  color: #73c5e0;
}
span:nth-child(12) {
  color: #ddb429;
}


`;

const Score = styled(Typography)`
  color: white;
    /* margin-top: 5rem; */
    width: 20rem;
    height: 5rem;
    background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #ef96e4 50%, #ef96e4 100%);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    transform: rotate(5deg);
 

`;

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

const ArrowContainer = styled.div`
  width: 0; 
  height: 0; 
  border-top: 5rem solid transparent;
  border-bottom: 5rem solid transparent; 
  
  border-right:15rem solid #ef96e4;
  display: flex;
  align-items: center;
  
  justify-content: center;
`
const JamContainer = styled(Container)`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${wiggle} infinite 1s linear;

`;

const PumpButton = styled(Button)`
    
`

export { JamContainer, PumpButton, Title, Score, ArrowContainer }