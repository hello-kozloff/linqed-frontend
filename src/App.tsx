import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ProfilePage, ContactsPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
