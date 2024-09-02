import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components for Tile View

const TileWrapper = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 15px;
`;

const TileItem = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  flex: 1 0 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  h3 {
    margin-bottom: 12px;
    color: #e74c3c;
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: #7f8c8d;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const TileButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  border: none;
  padding: 10px 15px;
  color: #fff;
  border-radius: 5px;
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background: linear-gradient(135deg, #2980b9, #1c639a);
  }
`;

const ExpandedView = styled.div`
  margin-top: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
`;

const CloseButton = styled.button`
  margin-top: 15px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

const TileView = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleEdit = (user) => {
    alert(`Editing user: ${user.name}`);
  };

  const handleFlag = (user) => {
    alert(`Flagging user: ${user.name}`);
  };

  const handleDelete = (user) => {
    alert(`Deleting user: ${user.name}`);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <TileWrapper>
      {selectedUser ? (
        <ExpandedView>
          <h3>{selectedUser.name}</h3>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Address: {selectedUser.address.street}, {selectedUser.address.city}</p>
          <p>Company: {selectedUser.company.name}</p>
          <p>Website: {selectedUser.website}</p>
          <CloseButton onClick={handleCloseDetails}>Close</CloseButton>
        </ExpandedView>
      ) : (
        users.map(user => (
          <TileItem key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <ButtonGroup>
              <TileButton onClick={() => handleEdit(user)}>Edit</TileButton>
              <TileButton onClick={() => handleFlag(user)}>Flag</TileButton>
              <TileButton onClick={() => handleDelete(user)}>Delete</TileButton>
            </ButtonGroup>
            <TileButton onClick={() => handleViewDetails(user)}>View Details</TileButton>
          </TileItem>
        ))
      )}
    </TileWrapper>
  );
};

export default TileView;