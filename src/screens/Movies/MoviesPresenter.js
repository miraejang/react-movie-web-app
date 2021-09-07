import Loader from 'components/Loader';
import Poster from 'components/Poster';
import Section from 'components/Section';
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
  return loading ? (
    <Loader />
  ) : (
    <>
      {popular && popular.length > 0 && (
        <Section title="Popualr">
          {popular.map(movie => (
            <Poster
              img={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              img={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
            <Poster
              img={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(movie => (
            <Poster
              img={movie.poster_path}
              title={movie.original_title}
              date={movie.release_date}
            />
          ))}
        </Section>
      )}
    </>
  );
};

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  topRated: PropTypes.array,
};

export default MoviesPresenter;
