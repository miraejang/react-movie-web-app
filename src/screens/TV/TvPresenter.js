import PropTypes from 'prop-types';
import React from 'react';

const TVPresenter = ({
  loading,
  error,
  popular,
  airingToday,
  onAir,
  topRated,
}) => (loading ? 'Loading...' : 'end');

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array.isRequired,
  airingToday: PropTypes.array.isRequired,
  onAir: PropTypes.array.isRequired,
  topRated: PropTypes.array.isRequired,
};

export default TVPresenter;
