import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const LOADER = styled.p`
  font-size: 3em;
`;

const Loader = () => (
  <Container>
    <LOADER className="loader">⏳</LOADER>
  </Container>
);

export default Loader;
