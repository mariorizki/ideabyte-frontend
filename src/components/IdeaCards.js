import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import IdeaCardFlipped from '../components/IdeaCardFlipped';

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const IdeaCards = props => {
  return (
    <Section>
      {props.ideas.map((item, index) => {
        return <IdeaCardFlipped key={index} item={item} />;
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
