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
      types: ['movies'],
      sections: ['popular'],
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

  typeChange = e => {
    const checked = e.target.checked;
    const item = e.target.id;
    const types = this.state.types;
    if (checked) {
      types.push(item);
    } else {
      const idx = types.findIndex(e => e === item);
      types.splice(idx, 1);
    }
    console.log(types);
    this.setState({ types });
  };

  sectionChange = e => {
    const checked = e.target.checked;
    const item = e.target.id;
    const sections = this.state.sections;
    if (checked) {
      sections.push(item);
    } else {
      const idx = sections.findIndex(e => e === item);
      sections.splice(idx, 1);
    }
    this.setState({ sections });
  };

  render() {
    return <HomePresenter {...this.state} typeChange={this.typeChange} sectionChange={this.sectionChange} />;
  }
}

export default HomeContainer;
