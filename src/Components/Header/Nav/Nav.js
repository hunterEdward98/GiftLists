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
      <div>
        {this.state.navLinks.map((x) => (
          <Navbutton navlink={x} />
        ))}
        {this.props.user && (
          <button
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
export default withRouter(connect(mapStateToProps)(Nav));
