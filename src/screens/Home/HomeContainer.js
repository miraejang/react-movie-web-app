import { movieApi, tvApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      movies_popular: null,
      movies_nowPlaying: null,
      movies_upcoming: null,
      movies_topRated: null,
      shows_popular: null,
      shows_airingToday: null,
      shows_onAir: null,
      shows_topRated: null,
      checkedList: ['movies', 'popular'],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    try {
      const {
        data: { results: movies_popular },
      } = await movieApi.popular();
      const {
        data: { results: movies_nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: movies_upcoming },
      } = await movieApi.upcoming();
      const {
        data: { results: movies_topRated },
      } = await movieApi.topRated();
      const {
        data: { results: shows_popular },
      } = await tvApi.popular();
      const {
        data: { results: shows_airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: shows_onAir },
      } = await tvApi.onAir();
      const {
        data: { results: shows_topRated },
      } = await tvApi.topRated();
      this.setState({
        movies_popular,
        movies_nowPlaying,
        movies_upcoming,
        movies_topRated,
        shows_popular,
        shows_airingToday,
        shows_onAir,
        shows_topRated,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handdleChange = e => console.log('checked change', e.target.checked);

  render() {
    return <HomePresenter {...this.state} handdleChange={this.handdleChange} />;
  }
}

export default HomeContainer;
