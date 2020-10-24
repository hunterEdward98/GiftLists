import React from "react";
import { Link } from "react-router-dom";

const navbutton = (props) => {
  return (
    <button>
      <Link to={`/${props.navlink}`} className="App-header">
        {props.navlink}
      </Link>
    </button>
  );
};
export default navbutton;
