import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 30px;
  padding: 50px;
  background: linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%);
`;

const GridItem = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }
  h3 {
    margin-bottom: 12px;
    color: #3498db;
    font-size: 20px;
  }
  p {
    color: #7f8c8d;
    font-size: 15px;
  }
`;

const GridView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <GridWrapper>
      {students.map((student) => (
        <GridItem key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
        </GridItem>
      ))}
    </GridWrapper>
  );
};

export default GridView;