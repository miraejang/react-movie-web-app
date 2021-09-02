import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const HEADER = styled.header`
  display: flex;
  height: 60px;
  padding: 0 10px;
  background-color: #16171b;
  color: #a9aaac;
  z-index: 3000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  align-items: center;
`;

const Header = () => {
  return (
    <HEADER>
      <Nav />
    </HEADER>
  );
};

export default Header;
