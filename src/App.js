import React from 'react';
import { useState } from 'react'
import './App.css';
import Character from './components/Character'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Rate A Hero</h1>
      <Character />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
