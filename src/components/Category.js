import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Poster from './Poster';
import Section from './Section';

const Type = styled.h3`
  font-size: 40px;
`;

const Category = ({
  error,
  movies_popular,
  movies_nowPlaying,
  movies_upcoming,
  movies_topRated,
  shows_popular,
  shows_airingToday,
  shows_onAir,
  shows_topRated,
  types,
  sections,
}) => (
  <div>
    {types.map(type => (
      <>
        <Type>{type}</Type>
        <>
          {type === 'movies' &&
            sections.map(section => (
              <>
                {section === 'popular' && movies_popular && movies_popular.length > 0 && (
                  <Section title="Popular">
                    {movies_popular.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'nowPlaying' && movies_nowPlaying && movies_nowPlaying.length > 0 && (
                  <Section title="nowPlaying">
                    {movies_nowPlaying.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'upcoming' && movies_upcoming && movies_upcoming.length > 0 && (
                  <Section title="upcoming">
                    {movies_upcoming.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'topRated' && movies_topRated && movies_topRated.length > 0 && (
                  <Section title="topRated">
                    {movies_topRated.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
              </>
            ))}
          {type === 'shows' &&
            sections.map(section => (
              <>
                {section === 'popular' && movies_popular && movies_popular.length > 0 && (
                  <Section title="Popular">
                    {movies_popular.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'nowPlaying' && movies_nowPlaying && movies_nowPlaying.length > 0 && (
                  <Section title="nowPlaying">
                    {movies_nowPlaying.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'upcoming' && movies_upcoming && movies_upcoming.length > 0 && (
                  <Section title="upcoming">
                    {movies_upcoming.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
                {section === 'topRated' && movies_topRated && movies_topRated.length > 0 && (
                  <Section title="topRated">
                    {movies_topRated.map(movie => (
                      <Poster img={movie.poster_path} title={movie.original_title} date={movie.release_date} />
                    ))}
                  </Section>
                )}
              </>
            ))}
        </>
      </>
    ))}
  </div>
);

Category.propTypes = {
  types: PropTypes.array,
  sections: PropTypes.array,
};

export default Category;
