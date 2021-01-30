import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ACCFuelCalculator from "./components/ACCFuelCalculator";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
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
      </>
    );
  }
}

export default App;
