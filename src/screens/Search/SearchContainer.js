import React from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
