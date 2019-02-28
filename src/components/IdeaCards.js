import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import IdeaCard from '../components/IdeaCard';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const IdeaCards = props => {
  return (
    <Section>
      {props.ideas.map((item, index) => {
        return <IdeaCard key={index} item={item} />;
      })}
    </Section>
  );
};

const mapStateToProps = state => {
  return {
    ideas: state.ideas
  };
};

export default connect(mapStateToProps)(IdeaCards);
