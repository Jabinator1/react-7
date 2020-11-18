<<<<<<< HEAD
import React from 'react'
import Hooks from './Components/Hooks/Hooks'
import Hocs from './Components/HOCS/Hocs'
import RenderProps from './Components/RenderProps/RenderProps'
import './App.css'
import Counter from './Components/Hooks/Counter'
=======
import React from "react";
import Hooks from "./Components/Hooks/Hooks";
import Hocs from "./Components/HOCS/Hocs";
import RenderProps from "./Components/RenderProps/RenderProps";
import "./App.css";
>>>>>>> 6ee7507e7fd0df58d03546f89d3717013296fa4d

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
  );
}

export default App;
