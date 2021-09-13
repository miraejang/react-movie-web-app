import Category from 'components/Category';
import Loader from 'components/Loader';
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 30px;
  padding: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;
const TypesBox = styled.div``;
const SectionsBox = styled.div`
  margin-top: 20px;
`;
const InlineBox = styled.span`
  display: inline-block;
  position: relative;
  margin-right: 10px;
`;
const CheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &:checked + Label:before {
    content: '✔';
    color: #7ce1fb;
  }
`;
const Label = styled.label`
  vertical-align: middle;
  &:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.3);
    margin-right: 4px;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
  }
`;

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
  types,
  sections,
  typeChange,
  sectionChange,
}) => {
  return (
    <div>
      <Form>
        <TypesBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="movies"
              name="movies"
              defaultChecked={types.includes('movies')}
              onChange={typeChange}
            />
            <Label htmlFor="movies">Movies</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="shows"
              name="shows"
              defaultChecked={types.includes('shows')}
              onChange={typeChange}
            />
            <Label htmlFor="shows">TV Shows</Label>
          </InlineBox>
        </TypesBox>
        <SectionsBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="popular"
              name="popular"
              defaultChecked={sections.includes('popular')}
              onChange={sectionChange}
            />
            <Label htmlFor="popular">Popualr</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="nowPlaying"
              name="nowPlaying"
              defaultChecked={sections.includes('nowPlaying')}
              onChange={sectionChange}
            />
            <Label htmlFor="nowPlaying">Now Playing</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="upcoming"
              name="upcoming"
              defaultChecked={sections.includes('upcoming')}
              onChange={sectionChange}
            />
            <Label htmlFor="upcoming">Upcoming</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="topRated"
              name="topRated"
              defaultChecked={sections.includes('topRated')}
              onChange={sectionChange}
            />
            <Label htmlFor="topRated">Top Rated</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="airingToday"
              name="airingToday"
              defaultChecked={sections.includes('airingToday')}
              onChange={sectionChange}
            />
            <Label htmlFor="airingToday">Airing Today</Label>
          </InlineBox>
          <InlineBox>
            <CheckBox
              type="checkbox"
              id="onAir"
              name="onAir"
              defaultChecked={sections.includes('onAir')}
              onChange={sectionChange}
            />
            <Label htmlFor="onAir">On The Air</Label>
          </InlineBox>
        </SectionsBox>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <Category
          loading={loading}
          error={error}
          movies_popular={movies_popular}
          movies_nowPlaying={movies_nowPlaying}
          movies_upcoming={movies_upcoming}
          movies_topRated={movies_topRated}
          shows_popular={shows_popular}
          shows_airingToday={shows_airingToday}
          shows_onAir={shows_onAir}
          shows_topRated={shows_topRated}
          types={types}
          sections={sections}
        />
      )}
    </div>
  );
};

HomePresenter.propTypes = {};

export default HomePresenter;
