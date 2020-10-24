import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbutton from "./Navbutton/Navbutton";
import { connect } from "react-redux";
class Nav extends React.Component {
  state = {
    navLinks: ["Home", "My Lists"],
  };
  render() {
    return (
      <div>
        {this.state.navLinks.map((x) => (
          <Navbutton navlink={x} />
        ))}
        {this.props.user && (
          <button onClick={() => this.props.dispatch({ type: "UNSET_USER" })}>
            Log out
          </button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Nav);
