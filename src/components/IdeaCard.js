import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.div`
  margin: 10px 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  border-radius: 10px;
  width: 300px;
  cursor: pointer;
  background-color: #f6f2f2;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
  }
`;

const CardImage = styled.img`
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h3`
  font-weight: bolder;
  text-align: center;
  margin-bottom: -10px;
`;

const Short = styled.p`
  text-align: center;
  padding: 0 20px;
`;

const CardMetas = styled.div`
  margin-top: 50px;
  padding: 20px;
  padding-top: 0;
`;

const CardMeta = styled.p`
  margin: 4px 0;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Icon = styled.span`
  color: hsla(45, 86%, 62%, 1);
  margin-right: 10px;
`;

const IdeaCard = ({ item }) => {
  return (
    <Card>
      <CardImage src="/assets/images/traveling.jpg" alt="" />
      <Title>{item.title}</Title>
      <Short>{item.short}</Short>
      <CardMetas>
        <CardMeta>
          <Icon>
            <FontAwesomeIcon icon="user" />
          </Icon>{' '}
          {item.author}
        </CardMeta>
        <CardMeta>
          <Icon>
            <FontAwesomeIcon icon="calendar" />
          </Icon>
          {item.date}
        </CardMeta>
        <CardMeta>
          <Icon>
            <FontAwesomeIcon icon="map-marker-alt" />
          </Icon>
          {item.location}
        </CardMeta>
      </CardMetas>
    </Card>
  );
};

export default IdeaCard;
