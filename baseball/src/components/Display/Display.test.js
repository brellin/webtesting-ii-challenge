import React from 'react'
import Display from './Display'
import { render } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

describe('<Display />', () => {
    it('should run without crashing', () => {
        render(<Display />)
    })

    it("should display 'Display'", () => {
        const { getByText } = render(<Display />)

        getByText(/display/i)
    })

    it('should display the count of balls and strikes when provided in props', () => {
        const balls = 1,
            strikes = 2,
            { getByTestId } = render(<Display balls={balls} strikes={strikes} />),
            ballsTest = getByTestId('ballsDisplay').textContent,
            strikesTest = getByTestId('strikesDisplay').textContent

        expect(ballsTest).toEqual(balls.toString())
        expect(strikesTest).toEqual(strikes.toString())
    })
})
