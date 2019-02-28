import React from 'react';
import Navigation from '../components/Navigation';
import HeaderText from '../components/HeaderText';
import HeaderButton from '../components/HeaderButton';
import SearchBar from '../components/SearchBar';

import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #333;
  background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
    url('/assets/images/cover-background.jpg') no-repeat center;
  background-size: cover;
  border-bottom: 4px solid hsla(45, 86%, 62%, 1);
`;

const HeaderHome = () => {
  return (
    <StyledHeader>
      <Navigation />
      <HeaderText />
      <HeaderButton />
      <SearchBar />
    </StyledHeader>
  );
};

export default HeaderHome;
