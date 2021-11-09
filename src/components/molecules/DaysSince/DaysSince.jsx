import React from 'react';

import { Box, Text } from '../../atoms';


function DaysSince ({ startDate }) {
  const days = 4;
  const hoy = new Date();

  return (
    <Box>
      <Text>Hoy es {hoy.toString()}</Text>
      <Text>Han pasado {days} dias</Text>
    </Box>
  );
}

export default DaysSince;
