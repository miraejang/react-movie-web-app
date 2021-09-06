import { movieApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      searchTerm: '',
      movieResults: null,
      showResults: null,
    };
  }

  componentDidMount = async () => {};

  handdleChnage = e => {
    const {
      target: { value },
    } = e;
    this.setState({ searchTerm: value });
  };

  handdleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') this.searchByTerm();
  };

  searchByTerm = async () => {
    this.setState({ loading: true });
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(searchTerm);
      const {
        data: { results: showResults },
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, showResults });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <SearchPresenter
        {...this.state}
        handdleChnage={this.handdleChnage}
        handdleSubmit={this.handdleSubmit}
      />
    );
  }
}

export default SearchContainer;
