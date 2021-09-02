import PropTypes from 'prop-types';
import React from 'react';

const MoviesPresenter = ({
  loading,
  error,
  popular,
  nowPlaying,
  upcoming,
  topRated,
}) => {
  return (
    <div>
      {loading
        ? 'Loading...'
        : popular.map(movie => (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.original_title} poster`}
              ></img>
              <h4>{movie.original_title}</h4>
              <p>{movie.release_date}</p>
            </>
          ))}
    </div>
  );
};

MoviesPresenter.propTypes = {
  loadign: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  topRated: PropTypes.array,
};

export default MoviesPresenter;
