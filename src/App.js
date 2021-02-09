import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ACCFuelCalculator from "./components/ACCFuelCalculator";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Calculator from "components/Calculator/Calculator";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/acc-fuel-calculator-external">
              <Calculator />
            </Route>
            <Route path="/acc-fuel-calculator">
              <Navigation />
              <ACCFuelCalculator />
            </Route>
            <Route path="/">
              <Navigation />
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
