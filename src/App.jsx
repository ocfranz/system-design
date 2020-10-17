import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./pages/Admin";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;
