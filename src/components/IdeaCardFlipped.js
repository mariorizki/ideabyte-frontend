import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardContainer = styled.main`
  position: relative;
  width: 300px;
  height: 350px;
  cursor: pointer;
  margin: 10px 10px;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #363636;
  transform: rotateY(180deg);
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
`;

const Text = styled.h3`
  text-align: center;
  color: white;
  margin-top: 50px;
`;

const CardMetas = styled.div`
  margin-top: 150px;
  padding: 20px;
  padding-top: 0;
`;

const CardMeta = styled.p`
  margin: 4px 0;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: white;
`;

const Icon = styled.span`
  color: hsla(45, 86%, 62%, 1);
  margin-right: 10px;
`;

const IdeaCard = ({ item }) => {
  const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    background: linear-gradient(hsla(0, 0%, 20%, 0.8), hsla(0, 0%, 20%, 0.8)),
      url(${item.image}) no-repeat center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.9);
  `;
  return (
    <CardContainer>
      <Card>
        <Front>
          <Text>{item.title}</Text>
        </Front>
        <Back>
          <Text>{item.short}</Text>
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
        </Back>
      </Card>
    </CardContainer>
  );
};

export default IdeaCard;
