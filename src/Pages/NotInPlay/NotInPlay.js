import React from 'react'

function NotInPlay({ count, setCount, setInPlay }) {

    const restartGame = () => {
        setCount(0);
        setInPlay(true);
    }
    return (
        <div>
            Your score was {count}
            <button onClick={restartGame}>Restart</button>
        </div>
    )
}

export default NotInPlay
