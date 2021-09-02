import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: inline-block;
  width: 170px;
  padding: 10px;
  overflow: hidden;
`;
const Img = styled.img`
  border-radius: 1em;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
const Title = styled.h4`
  overflow: hidden;
  width: 100%;
  font-weight: normal;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Year = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #4b4b4b;
`;

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
            <Item>
              <Img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={`${movie.original_title} poster`}
              />
              <Title>{movie.original_title}</Title>
              <Year>{movie.release_date.slice(0, 4)}</Year>
            </Item>
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
