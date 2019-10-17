//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Travel from "./Travel";
import Travels from "./Travels";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload this React App.
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
}*/

//App.js is the main component of this application
//This sub-component class called <Travels /> will be called, that is why this file imports Travels.jsx
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <div>
          <Travels />
        </div>
      </div>
    );
  }
}

export default App;
