import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavStructure from './NavStructure';
import Home from '../screens/Home';
import Moive from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';

const Nav = () => {
  return (
    <Router>
      <NavStructure />
      <Route path="/" component={Home} />
      <Route path="/movie" component={Moive} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
    </Router>
  );
};

export default Nav;
