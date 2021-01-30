import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ACCFuelCalculator from "./components/ACCFuelCalculator";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/acc-fuel-calculator">
            <ACCFuelCalculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
