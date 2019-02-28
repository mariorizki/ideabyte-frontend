import React from 'react';

import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin: 40px 0;
  text-align: center;
`;

const HeaderText = () => {
  return (
    <React.Fragment>
      <StyledH1>
        Share and improve your ideas <br />
        with the world
      </StyledH1>
    </React.Fragment>
  );
};

export default HeaderText;
