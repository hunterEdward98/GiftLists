import React from "react";
import Selector from "./Selector/Selector";
import { connect } from "react-redux";
class Home extends React.Component {
  state = {
    family: this.props.family,
  };
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_FAMILY" });
  }
  setFamily = async (obj) => {
    await this.props.dispatch({ type: "SET_SELECTED_USER", payload: obj });
    await this.props.history.push("/ListView");
  };
  render() {
    return (
      <div className="body">
        <div>Please Select A family member to view their lists</div>
        <div>
          <Selector
            setFamily={this.setFamily}
            options={this.props.family.map((x) => {
              let obj = { value: x, label: x.name };
              return obj;
            })}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    family: state.family,
  };
};
export default connect(mapStateToProps)(Home);
