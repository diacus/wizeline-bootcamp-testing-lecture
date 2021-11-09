import React from 'react';

import { Box, Button, Title } from '../../atoms';
import { doSomethingDifficult } from '../../../api/fake-api';

import useThrottle from './hooks';

function Throttle() {

  const { isActive, callback } = useThrottle(doSomethingDifficult);

  const title = isActive ? 'Loading...' : 'Ready';
  const label = isActive ? 'Please wait...' : 'Click me!';

  return (
    <Box textAlign="center">
      <Title>{title}</Title>
      <Box margin="64px auto">
        <Button onClick={callback}>{label}</Button>
      </Box>
    </Box>
  );
};

export default Throttle;
