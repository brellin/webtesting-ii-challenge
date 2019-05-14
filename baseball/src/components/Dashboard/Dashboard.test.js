import React from 'react'
import Dashboard from './Dashboard'
import { render } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

describe('<Display />', () => {
    it('should run without crashing', () => {
        render(<Dashboard />)
    })

    it("should display 'Dashboard'", () => {
        const { getByText } = render(<Dashboard />)

        getByText(/dashboard/i)
    })
})
