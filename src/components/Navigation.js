import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #000;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
`;

const NavLi = styled.li`
  display: inline;
  font-weight: bolder;
  margin: 0 20px;
  color: #fff;
`;

const Logo = styled.img`
  height: 80px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Navigation = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <StyledLink to="/">Home</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/about">About</StyledLink>
        </NavLi>
        <NavLi>
          <StyledLink to="/">
            <Logo src="/assets/ideabyte-logo-white.svg" alt="Idea Byte Logo" />
          </StyledLink>
        </NavLi>
        <NavLi>Register</NavLi>
        <NavLi>Login</NavLi>
      </NavUl>
    </Nav>
  );
};

export default Navigation;
