import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Rate A Hero</h1>
        <div>
          <img />
          <div className="form-group">
            <label htmlFor="Hero Search">Search For A Hero</label>
            <input className="form-control" id="search" name="search" />
          </div>
        </div>
        <a href="/characters">
          <button className="btn-primary">Search</button>
        </a>   
      </header>
    </div>
  );
}

export default App;
