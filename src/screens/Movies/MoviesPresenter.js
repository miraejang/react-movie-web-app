import Poster from 'components/Poster';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const MoviesPresenter = ({
  loading,
  error,
  popular,
  nowPlaying,
  upcoming,
  topRated,
}) => {
  return loading ? (
    'Loading'
  ) : (
    <Container>
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
    </Container>
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
