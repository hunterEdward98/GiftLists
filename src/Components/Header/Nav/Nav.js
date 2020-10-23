import React from "react";
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <button>
        <Link to="/Home" className="App-header">
          Home
        </Link>
      </button>
    );
  }
}
export default Nav;
