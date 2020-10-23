import React from "react";
import Nav from "./Nav/Nav";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="Title">Christmas And Birthday List App</div>
        <Nav />
      </div>
    );
  }
}
export default Header;
