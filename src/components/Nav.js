import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  display: inline-block;
`;
const A = styled(Link)`
  display: block;
  padding: 10px 20px;
  font-weight: bold;
  letter-spacing: 0.02em;
`;

const Nav = () => {
  return (
    <ul>
      <Li>
        <A to="/">Home</A>
      </Li>
      <Li>
        <A to="/movies">Movies</A>
      </Li>
      <Li>
        <A to="/tv">TV</A>
      </Li>
      <Li>
        <A to="/search">Search</A>
      </Li>
    </ul>
  );
};

export default Nav;
