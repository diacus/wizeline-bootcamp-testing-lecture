import React, { useState } from 'react';
import styled from 'styled-components';

import { Box, Flex, Text, Title } from '../../atoms';

const Container = styled(Box)`
  pointer-events: none;
  animation: spin 8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function Inversion({ Component }) {
  const [estado] = useState('aceptable');
  return (
    <Box>
      <Container>
        <Component />
      </Container>
      <Text>
        El estado del componente es {estado}
      </Text>
    </Box>
  )
}

export default Inversion;


