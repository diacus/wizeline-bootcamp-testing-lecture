import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../atoms';

const Container = styled(Flex)`
  background: #dfdfdf;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  width: 100%;
  margin: 8px auto;
  &:hover {
    cursor: pointer;
  }
`;

function Task({ id, done, content, onClick }) {
  console.log(`Rendering task ${id}`);
  return (
    <Container
      id={id}
      onClick={() => onClick(id)}
      color={done ? '#999' : 'black'}
    >
      {content}
    </Container>
  );
}

export default React.memo(Task);
