import Loader from 'components/Loader';
import Poster from 'components/Poster';
import Section from 'components/Section';
import PropTypes from 'prop-types';
import React from 'react';

const TVPresenter = ({
  loading,
  error,
  popular,
  airingToday,
  onAir,
  topRated,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {popular && popular.length > 0 && (
        <Section title="Popualr">
          {popular.map(show => (
            <Poster
              img={show.poster_path}
              title={show.original_name}
              date={show.first_air_date}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
            <Poster
              img={show.poster_path}
              title={show.original_name}
              date={show.first_air_date}
            />
          ))}
        </Section>
      )}
      {onAir && onAir.length > 0 && (
        <Section title="On The Air">
          {onAir.map(show => (
            <Poster
              img={show.poster_path}
              title={show.original_name}
              date={show.first_air_date}
            />
          ))}
        </Section>
      )}
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
            <Poster
              img={show.poster_path}
              title={show.original_name}
              date={show.first_air_date}
            />
          ))}
        </Section>
      )}
    </>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  onAir: PropTypes.array,
  topRated: PropTypes.array,
};

export default TVPresenter;
