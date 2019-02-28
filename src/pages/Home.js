import React from 'react';

import Navigation from '../components/Navigation';
import HeaderText from '../components/HeaderText';
import HeaderButton from '../components/HeaderButton';
import SearchBar from '../components/SearchBar';
import Content from '../components/Content';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeaderText />
      <HeaderButton />
      <SearchBar />
      <Content />
      Home
    </div>
  );
};

export default Home;
