import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage, Developer, Photography } from "./pages";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/developer" component={Developer} />
          <Route exact path="/photography" component={Photography} />
        </Switch>
      </Router>
    );
  }
}

export default App;
