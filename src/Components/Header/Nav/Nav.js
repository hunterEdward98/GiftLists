import React from "react";
import { withRouter } from "react-router-dom";
import Navbutton from "./Navbutton/Navbutton";
import { connect } from "react-redux";
class Nav extends React.Component {
  state = {
    navLinks: ["Home"],
  };
  render() {
    return (
      <nav>
        {this.state.navLinks.map((x) => (
          <Navbutton navlink={x} />
        ))}
        {this.props.user && (
          <button
            className="App-header"
            onClick={async () => {
              await this.props.dispatch({
                type: "SET_SELECTED_USER",
                payload: this.props.user,
              });
              await this.props.history.push("/ListView");
            }}
          >
            My Lists
          </button>
        )}
        {this.props.user && (
          <button
            className="App-header"
            onClick={() => this.props.dispatch({ type: "LOGOUT" })}
          >
            Log out
          </button>
        )}
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default withRouter(connect(mapStateToProps)(Nav));
