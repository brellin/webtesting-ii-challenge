import React from 'react'
import App from '../../App'
import Dashboard from './Dashboard'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

describe('<Display />', () => {
    it('should run without crashing', () => {
        render(<Dashboard />)
    })

    it("should display 'Dashboard, ball, strike, foul, and hit'", () => {
        const { getByText } = render(<Dashboard />)

        getByText(/dashboard/i)
        getByText(/ball/i)
        getByText(/strike/i)
        getByText(/foul/i)
        getByText(/hit/i)
    })
})

describe('<Display /> interaction with <Dashboard /> within <App />', () => {
    let { getByTestId, getAllByText } = render(<App />),
        buttons = getAllByText('+'),
        ballsTest = getByTestId('ballsDisplay').textContent,
        strikesTest = getByTestId('strikesDisplay').textContent,
        ball = buttons[0],
        strike = buttons[1],
        foul = buttons[2],
        hit = buttons[3],
        balls = 0,
        strikes = 0

    it('should increment balls and strikes when ball and strike are clicked', () => {
        fireEvent.click(ball)
        fireEvent.click(strike)

        expect(ballsTest).toEqual((balls + 1).toString())
        expect(strikesTest).toEqual((strikes + 1).toString())
    })
})
