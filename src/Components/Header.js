import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuBar = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  padding: 15px 50px;
  margin: 5px;
  font-size: 30px;
`;

const MenuLink = styled(Link)`
  padding: 15px 100px;
  margin: 5px;
`;

const Header = () => (
  <MenuBar>
    <Title>Main Title</Title>
    <MenuLink to="/">HOME</MenuLink>
    <MenuLink to="/about">ABOUT</MenuLink>
    <MenuLink to="/portfolio">PORTFOLIO</MenuLink>
    <MenuLink to="/contact">CONTACT</MenuLink>
  </MenuBar>
);

export default Header;
