import React from "react";
import Select from "react-select";
const Selector = (props) => {
  return (
    <Select
      className="col-12"
      options={props.options}
      onChange={(event) => props.setFamily(event.value)}
    ></Select>
  );
};
export default Selector;
