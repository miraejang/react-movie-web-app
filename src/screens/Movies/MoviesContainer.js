import React from 'react';
import MoviesPresenter from './MoviesPresenter';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <MoviesPresenter />;
  }
}

export default MoviesContainer;
