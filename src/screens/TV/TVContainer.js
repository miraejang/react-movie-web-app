import { tvApi } from 'api';
import React from 'react';
import TVPresenter from './TvPresenter';

class TVContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      popular: null,
      airingToday: null,
      onAir: null,
      topRated: null,
    };
  }

  componentDidMount = async () => {
    try {
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      const {
        data: { results: onAir },
      } = await tvApi.onAir();
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      this.setState({
        popular,
        airingToday,
        onAir,
        topRated,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <TVPresenter {...this.state} />;
  }
}

export default TVContainer;
