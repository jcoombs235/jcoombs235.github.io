import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import personal_logo from "../../assets/images/JC_logo_background.png";

const NavigationLogo = () => {
  return (
    <NavLink to="/">
      <StyledNavLogo src={personal_logo} alt="Logo" />
    </NavLink>
  );
};

const StyledNavLogo = styled.img`
  height: 40px;
  padding: 5px 25px;
`;

export default NavigationLogo;
