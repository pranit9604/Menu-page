import React from 'react';
import styled from 'styled-components';

const MenuBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  padding: 15px 0;
  color: #ecf0f1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  a {
    color: #ecf0f1;
    font-weight: 500;
    font-size: 18px;
    transition: color 0.3s ease, text-shadow 0.3s ease, transform 0.3s ease;
    &:hover {
      color: #f39c12;
      text-shadow: 0 0 10px rgba(243, 156, 18, 0.7);
      transform: scale(1.1);
    }
  }
`;

const HorizontalMenu = () => {
  return (
    <MenuBar>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </MenuBar>
  );
};

export default HorizontalMenu;