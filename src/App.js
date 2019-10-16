//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./Travel";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <div>
          <Travel
            country="Germany"
            destination="Berlin"
            photo="https://images.unsplash.com/photo-1444838639505-f9042c5d2386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            distance="687.7 miles"
          />
        </div>
        <div>
          <Travel
            country="Netherlands"
            destination="Amsterdam"
            photo="https://images.unsplash.com/photo-1549701455-d0d42354b009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            distance="337.6 miles"
          />
        </div>
      </div>
    );
  }
}

export default App;
