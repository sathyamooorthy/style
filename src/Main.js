import React, { Component } from 'react';
import { BrowserRouter, Route, Switch,Router, Link, NavLink,Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import App from './App';
import history from './components/History/history';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <BrowserRouter>
          <div>
          <Router history={history}>
            <Switch>
              {/* <Route exact path="/" name="Login Page" component={Login} />
              <Route exact path="/login" name="Login Page" component={Login} /> */}
              <Route exact path="/Login" component={Login} />
              <Route path="/App" component={App} /> 
              <Redirect from="/" to="/login"  />
            </Switch>
            </Router>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;