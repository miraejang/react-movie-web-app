import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './screens/Home';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default AppRouter;
