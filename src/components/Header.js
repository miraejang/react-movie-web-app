import React, { Component } from 'react';
import AppRouter from './AppRouter';

class Header extends Component {
  render() {
    return (
      <header>
        <AppRouter />
      </header>
    );
  }
}

export default Header;
