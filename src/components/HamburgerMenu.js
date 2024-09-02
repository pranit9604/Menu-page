import React, { useState } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: #ecf0f1;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  transition: transform 0.4s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const BurgerIcon = styled.div`
  cursor: pointer;
  position: fixed;
  top: 25px;
  left: 25px;
  z-index: 1001;
  span {
    font-size: 30px;
    color: #2c3e50;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  &:hover span {
    color: #e74c3c;
    transform: rotate(90deg);
  }
`;

const MenuItem = styled.li`
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #f39c12;
    transform: translateX(10px);
  }
`;
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerIcon onClick={() => setIsOpen(!isOpen)}>
        <span>🍔</span>
      </BurgerIcon>
      <MenuWrapper isOpen={isOpen}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </MenuWrapper>
    </>
  );
};

export default HamburgerMenu;