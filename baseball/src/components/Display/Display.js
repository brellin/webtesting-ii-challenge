import React from 'react'

const Display = props => {
    return (
        <div className='Display'>
            <h2>Display</h2>
            <div>
                <p>Balls: <span data-testid='ballsDisplay'>{props.balls}</span></p>
            </div>
            <div>
                <p>Strikes: <span data-testid='strikesDisplay'>{props.strikes}</span></p>
            </div>
        </div>
    )
}

export default Display
