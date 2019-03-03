import React from 'react';
import Navigation from '../components/Navigation';

import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url('/assets/images/cover-background.jpg') no-repeat center;
  background-size: cover;
  border-bottom: 4px solid hsla(45, 86%, 62%, 1);
`;

const HeaderAbout = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
};

export default HeaderAbout;
