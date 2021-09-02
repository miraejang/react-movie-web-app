import React from 'react';
import TVPresenter from './TvPresenter';

class TVContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <TVPresenter />;
  }
}

export default TVContainer;
