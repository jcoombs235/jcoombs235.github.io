import React from "react";
import logo from "../../logo.svg";

export class Navbar extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <img src={logo} alt="logo" className="Navigation-logo" />
      </div>
    );
  }
}
