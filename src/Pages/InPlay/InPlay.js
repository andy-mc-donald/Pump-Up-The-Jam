import React from 'react'
import JamJar from "../../Components/JamJar/JamJar";
import { JamContainer, PumpButton, Title, Score, ArrowContainer } from "./InPlay.style"
import { Box } from "@material-ui/core"
function InPlay({ count, setCount, setInPlay }) {

    const pumpPressed = () => {

        const randomOneToTen = Math.random() * 10
        if (randomOneToTen >= 8 && count > 0) {
            setInPlay(false)
        }
        else {
            setCount(count + 1)
        }
    }


    return (
        <Box>
            <Title variant="h3" className="main-title"><span>P</span><span>U</span><span>M</span><span>P</span><span> U</span><span>P</span><span> T</span><span>H</span><span>E</span><span> J</span><span>A</span><span>M</span></Title>

            {/* <ArrowContainer> */}
            <Score variant="h4"> Score: {count}</Score>
            {/* </ArrowContainer> */}
            <JamContainer maxWidth="md">
                <JamJar count={count} />
            </JamContainer>
            <PumpButton onClick={pumpPressed}>Pump</PumpButton>
        </Box>
    )
}

export default InPlay
