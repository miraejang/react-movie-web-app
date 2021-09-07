import Loader from 'components/Loader';
import React from 'react';

const HomePresenter = ({
  loading,
  error,
  movies_popular,
  movies_nowPlaying,
  movies_upcoming,
  movies_topRated,
  shows_popular,
  shows_airingToday,
  shows_onAir,
  shows_topRated,
  checkedList,
  handdleChange,
}) => {
  return (
    <div>
      <form>
        <div>
          <span>
            <input
              type="checkbox"
              id="movies"
              name="movies"
              defaultChecked={checkedList.includes('movies')}
              onChange={handdleChange}
            />
            <label htmlFor="movies">Movies</label>
          </span>
          <span>
            <input
              type="checkbox"
              id="shows"
              name="shows"
              defaultChecked={checkedList.includes('shows')}
              onChange={handdleChange}
            />
            <label htmlFor="shows">TV Shows</label>
          </span>
        </div>
        <div>
          <span>
            <input
              type="checkbox"
              id="popular"
              name="popular"
              defaultChecked={checkedList.includes('popular')}
            />
            <label htmlFor="popular">Popualr</label>
          </span>
          <span>
            <input type="checkbox" id="nowPlaying" name="nowPlaying" />
            <label htmlFor="nowPlaying">Now Playing</label>
          </span>
          <span>
            <input type="checkbox" id="upcoming" name="upcoming" />
            <label htmlFor="upcoming">Upcoming</label>
          </span>
          <span>
            <input type="checkbox" id="topRated" name="topRated" />
            <label htmlFor="topRated">Top Rated</label>
          </span>
          <span>
            <input type="checkbox" id="airingToday" name="airingToday" />
            <label htmlFor="airingToday">Airing Today</label>
          </span>
          <span>
            <input type="checkbox" id="onAir" name="onAir" />
            <label htmlFor="onAir">On The Air</label>
          </span>
        </div>
      </form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {checkedList &&
            checkedList.length > 0 &&
            checkedList.map(e => <h1>{e}</h1>)}
        </>
      )}
    </div>
  );
};

HomePresenter.propTypes = {};

export default HomePresenter;
