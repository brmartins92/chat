import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Chat from "./pages/chat";
import Login from "./pages/login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path exact="/">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
