import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
