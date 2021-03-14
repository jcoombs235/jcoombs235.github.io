import React from "react";
import GlobalStyle from "./theme/globalStyle";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { FlutterCalculator } from "./components/Calculator/FlutterCalculator";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/acc-fuel-calculator-external">
              <FlutterCalculator external />
            </Route>
            <Route path="/acc-fuel-calculator">
              <InternalPage>
                <Navigation />
                <FlutterCalculator />
              </InternalPage>
            </Route>
            <Route path="/">
              <InternalPage>
                <Navigation />
                <Home />
              </InternalPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const InternalPage = styled.body`
  padding: 0 50px;
  padding-top: 50px;
`;

export default App;
