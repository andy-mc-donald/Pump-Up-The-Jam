import React from "react";
// import { Box } from "@material-ui/core";
import { BoxContainer, EndTitle, ButtonRestart } from "./NotInPlay.style";
import Splat from "./Splat"
function NotInPlay({ count, setCount, setInPlay }) {
    const restartGame = () => {
        setCount(0);
        setInPlay(true);
    };
    return (
        <BoxContainer>
            <EndTitle variant="h3" className="main-title">
                <span>Y</span>
                <span>o</span><span>u</span><span>r</span><span> S</span><span>c</span><span>o</span><span>r</span><span>e</span>
                <span> W</span><span>a</span><span>s</span> {count}
            </EndTitle>
            <Splat />
            <ButtonRestart size="large" textsize="large" onClick={restartGame}>Restart</ButtonRestart>
        </BoxContainer>
    );
}

export default NotInPlay;
