import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import Routes from "../Routes/Routes";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
