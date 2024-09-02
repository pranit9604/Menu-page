import React from 'react';
import styled from 'styled-components';

const ExpandedTileWrapper = styled.div`
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  margin: 50px auto;
  animation: fadeIn 0.5s ease-in-out;
  position: relative;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BackButton = styled.button`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, #c0392b, #a52820);
    transform: translateY(-3px);
  }
`;

const ExpandedTile = ({ user, onBack }) => {
  return (
    <ExpandedTileWrapper>
      <BackButton onClick={onBack}>Back</BackButton>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Username: {user.username}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
    </ExpandedTileWrapper>
  );
};

export default ExpandedTile;