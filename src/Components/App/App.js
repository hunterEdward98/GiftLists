import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/Home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
