import React from 'react';
import styled from 'styled-components';

const SECTION = styled.div`
  padding: 20px;
`;
const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 30px;
`;
const Gird = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 30px 20px;
`;

const Section = ({ title, children }) => (
  <SECTION>
    <Title>{title}</Title>
    <Gird>{children}</Gird>
  </SECTION>
);

export default Section;
