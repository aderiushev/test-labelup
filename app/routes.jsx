import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './containers/Home/';
import { connect } from 'react-redux'


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    </Route>
  </Router>
)

export default routes;