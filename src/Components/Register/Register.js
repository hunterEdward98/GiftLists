import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
    first: "",
    last: "",
  };
  //I have no idea what most of this stuff does. I'll look into it when my project is done
  registerUser = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          username: this.state.username,
          password: this.state.password,
          name: this.state.first + " " + this.state.last,
        },
      });
      this.setState({
        username: "",
        password: "",
        first: "",
        last: "",
      });
    } else {
      console.log("uname and pw reqd");
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container dark d-flex justify-content-center text-center">
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div className="d-flex row justify-content-around mb-3">
            <div className="col-6">
              <div>
                <small htmlFor="first">First:</small>
              </div>
              <input
                type="first"
                name="first"
                value={this.state.first}
                onChange={this.handleInputChangeFor("first")}
              />
            </div>
            <div className="col-6">
              <div>
                <small htmlFor="last">Last:</small>
              </div>
              <input
                type="last"
                name="last"
                value={this.state.last}
                onChange={this.handleInputChangeFor("last")}
              />
            </div>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center></center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
  orgs: state.orgs,
});

export default withRouter(connect(mapStateToProps)(RegisterPage));
