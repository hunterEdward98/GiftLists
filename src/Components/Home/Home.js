import React from "react";
import Selector from "./Selector/Selector";
import connect from "react-redux";
class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div>Please Select A family member to view their lists</div>
        <div>
          <Selector
            options={[
              { value: 0, label: "John" },
              { value: 1, label: "Kara" },
              { value: 2, label: "Penny" },
              { value: 0, label: "Bonnie" },
            ]}
          />
        </div>
      </div>
    );
  }
}
export default Home;
