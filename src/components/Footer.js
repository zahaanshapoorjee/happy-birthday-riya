import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #E9697DF5;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2024 Uday M Srivastava
    </FooterContainer>
  );
};

export default Footer;
