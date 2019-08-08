import React, { useState } from 'react';
import Dashboard from './components/Dashboard'
import Display from './components/Display'

import './App.scss';

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Baseball</h1>
      </header>
      <section>
        <Display balls={balls} strikes={strikes} />
        <Dashboard ball={ball} strike={strike} hit={hit} foul={foul} />
      </section>
    </div>
  )

  function ball() {
    balls < 3 ? setBalls(balls + 1) : setBalls(0)
    balls >= 3 && setStrikes(0)
  }

  function strike() {
    strikes < 2 ? setStrikes(strikes + 1) : setStrikes(0)
    strikes >= 2 && setBalls(0)
  }

  function hit() {
    setBalls(0)
    setStrikes(0)
  }

  function foul() {
    strikes < 2 && setStrikes(strikes + 1)
  }
}

export default App;
