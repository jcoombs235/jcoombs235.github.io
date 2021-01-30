import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/acc-fuel-calculator">Fuel Calculator</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
