import { MovieAPI } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
    } catch (error) {}
  };

  render() {
    return <HomePresenter />;
  }
}

export default HomeContainer;
