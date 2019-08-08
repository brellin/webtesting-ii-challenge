import React from 'react'

const Dashboard = props => {
    return (
        <div className='Dashboard'>

            <h2>Dashboard</h2>

            <div>
                <p>Ball
            </p>
                <button onClick={() => props.ball()}>+</button>
            </div>


            <div>
                <p>Strike
            </p>
                <button
                    onClick={() => props.strike()}
                >+</button>
            </div>


            <div>
                <p>Foul
            </p>
                <button
                    onClick={() => props.foul()}
                >+</button>
            </div>


            <div>
                <p>Hit
            </p>
                <button
                    onClick={() => props.hit()}
                >+</button>
            </div>

        </div>
    )
}

export default Dashboard
