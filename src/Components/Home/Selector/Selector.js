import React from "react";
import Select from "react-select";
class Selector extends React.Component {
  render() {
    return <Select className="col-12" options={this.props.options}></Select>;
  }
}
export default Selector;
