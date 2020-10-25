import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
class ListView extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_LISTS",
      payload: { user_id: this.props.selectedUser.id },
    });
  }
  render() {
    return (
      <div className="h1">
        <div>
          {!this.props.selectedUser.name && <Redirect to="/Home" />}
          {this.props.selectedUser == this.props.user
            ? "My "
            : this.props.selectedUser.name + "'s "}
          Lists
        </div>
        {this.props.selectedUser == this.props.user && (
          <button> Add List</button>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user, selectedUser: state.selectedUser };
};
export default connect(mapStateToProps)(ListView);
