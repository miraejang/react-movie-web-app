import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: inline-block;
  overflow: hidden;
`;
const Img = styled.img`
  border-radius: 1em;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
const Title = styled.h5`
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

const Poster = ({ img, title, date }) => (
  <Item>
    <Img
      src={
        img
          ? `https://image.tmdb.org/t/p/w500/${img}`
          : require('../assets/noPosterSmall.png').default
      }
      alt={`${title} poster`}
    />
    <Title>{title}</Title>
    <Year>{date && date.slice(0, 4)}</Year>
  </Item>
);

export default Poster;
