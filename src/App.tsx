import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ProfilePage, ButtonsPage, ViewPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/view" component={ViewPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/buttons" component={ButtonsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
