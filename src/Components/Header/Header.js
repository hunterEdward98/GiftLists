import React from "react";
import Nav from "./Nav/Nav";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="Title">GiftList</div>
        <Nav />
      </div>
    );
  }
}
export default Header;
