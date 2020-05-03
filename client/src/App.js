import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import mainPage from './components/main'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={mainPage} />
          {/* <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
