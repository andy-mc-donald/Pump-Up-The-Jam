import styled, { keyframes } from 'styled-components';
import { Box, Typography, Button } from '@material-ui/core'

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

const SplatContainer = styled(Box)`
  animation: ${wiggle} infinite 2s linear;
  height: 20vh;

`


const BoxContainer = styled(Box)`
    // background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const EndTitle = styled(Typography)`
font-family: 'Orbitron', sans-serif !important;
padding: 5rem;

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
  span:nth-child(13) {
    color: #73c5e0;
  }
`;

const ButtonRestart = styled(Button)`
`



export { BoxContainer, EndTitle, ButtonRestart, SplatContainer };