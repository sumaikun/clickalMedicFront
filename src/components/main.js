import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import LandingPage from 'views/LandingPage/LandingPage';
import LoginPage from 'views/LoginPage/LoginPage';
import Aplication from 'views/AplicationPage/AplicationPage';
import Dashboard from 'views/Dashboard/Dashboard';
import Admin from 'layouts/Admin.js';

import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

function Main() {
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path= "/site/landing" component={LandingPage} />
        <Route exact path= "/site/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default Main;
