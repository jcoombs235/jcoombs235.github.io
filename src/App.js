import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ACCFuelCalculator from "./components/ACCFuelCalculator";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
