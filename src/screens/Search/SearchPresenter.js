import Poster from 'components/Poster';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  loading,
  error,
  searchTerm,
  movieResults,
  showResults,
  handdleChnage,
  handdleSubmit,
}) => (
  <Container>
    <Form onSubmit={handdleSubmit}>
      <Input
        type="text"
        value={searchTerm}
        onChange={handdleChnage}
        placeholder="Search Movie or TV Shows..."
      />
    </Form>
    {loading ? (
      'Loading...'
    ) : (
      <div>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movies">
            {movieResults.map(movie => (
              <Poster
                img={movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
              />
            ))}
          </Section>
        )}
        {showResults && showResults.length > 0 && (
          <Section title="TV">
            {showResults.map(show => (
              <Poster
                img={show.poster_path}
                title={show.original_name}
                date={show.first_air_date}
              />
            ))}
          </Section>
        )}
      </div>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  handdleChnage: PropTypes.func,
  handdleSubmit: PropTypes.func,
};

export default SearchPresenter;
