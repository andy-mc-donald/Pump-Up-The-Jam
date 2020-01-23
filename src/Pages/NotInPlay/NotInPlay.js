import React from 'react'
import { Box } from "@material-ui/core"
function NotInPlay({ count, setCount, setInPlay }) {

    const restartGame = () => {
        setCount(0);
        setInPlay(true);
    }
    return (
        <Box>
            Your score was {count}
            <button onClick={restartGame}>Restart</button>
        </Box>
    )
}

export default NotInPlay
