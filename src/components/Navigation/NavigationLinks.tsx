import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLinks = () => {
  return (
    <InlineMenu>
      <StyledLink to="/">
        <LinkText>ABOUT</LinkText>
      </StyledLink>
      <StyledLink to="/">
        <LinkText>PROJECTS</LinkText>
      </StyledLink>
      <StyledLink to="/acc-fuel-calculator">
        <LinkText>FUEL CALCULATOR</LinkText>
      </StyledLink>
      <StyledLink to="/">
        <LinkText>CONTACT ME</LinkText>
      </StyledLink>
    </InlineMenu>
  );
};

const InlineMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
`;

const LinkText = styled.span`
  padding-top: 17px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
`;

const StyledLink = styled(NavLink)`
  text-align: center;
  padding: 0 20px;
  text-decoration: none;
  height: 100%;
  display: flex;
  position: relative;
  border: none;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.navTextColor};
  &:hover {
    border-bottom-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.highlightedTextColor};
  }
`;
