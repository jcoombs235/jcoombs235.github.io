import React from "react";
import styled from "styled-components";
import NavigationLinks from "./NavigationLinks";
import NavigationLogo from "./NavigationLogo";

const DesktopNavigation = () => {
  return (
    <Header>
      <StyledNav>
        <NavigationLogo />
        <NavigationLinks />
      </StyledNav>
    </Header>
  );
};

const Header = styled.header`
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.firstLayer};
  position: fixed;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: stretch;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;
`;

export default DesktopNavigation;
