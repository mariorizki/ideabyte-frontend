import React from 'react';
import IdeaCards from '../components/IdeaCards';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  border: 1px solid black;
`;

const Content = () => {
  return (
    <Main>
      <IdeaCards />
    </Main>
  );
};

export default Content;
