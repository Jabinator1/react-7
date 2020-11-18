import React from 'react'
import Hooks from './Components/Hooks/Hooks'
import Hocs from './Components/HOCS/Hocs'
import RenderProps from './Components/RenderProps/RenderProps'
import './App.css'
import Counter from './Components/Hooks/Counter'

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-text">React 7 Lecture - Advanced React</h1>
      </header>
      {/* <Counter /> */}
      <Hooks />
      <Hocs />
      <RenderProps />
    </div>
  )
}

export default App
