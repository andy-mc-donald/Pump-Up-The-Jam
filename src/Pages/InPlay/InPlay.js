import React from 'react'
import JamJar from "../../Components/JamJar/JamJar";
import { JamContainer, PumpButton } from "./InPlay.style"

function InPlay({ count, setCount }) {


    return (
        <div>
            <h1>Pump Up The Jam</h1>
            <h3>Score: {count}</h3>
            <JamContainer maxWidth="md">
                <JamJar count={count} />
            </JamContainer>
            <PumpButton onClick={() => setCount(count + 1)}>Pump</PumpButton>
        </div>
    )
}

export default InPlay
