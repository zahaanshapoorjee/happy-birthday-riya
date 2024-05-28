import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  background-color: #E9697DF5;
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

const NavItem = styled(Link)`
  background-color: #0695FC;
  color: black;
  font-size: 1.2em;
  cursor: pointer;
  padding: 20px 20px;
  border-radius: 5px;
  text-decoration: none; /* Remove underline from links */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/postcards">Postcard</NavItem>
      <NavItem to="/messages">Messages</NavItem>
      <NavItem to="/gallery">Gallery</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
