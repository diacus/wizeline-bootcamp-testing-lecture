import React, { useEffect, useMemo, useState } from 'react';

import { Box, Flex, Text, Title } from '../../atoms';
import { computeFactorial, computeFibonacci } from './math';
import InputNumber from './InputNumber';

function Remember() {
  const [factInput, setFactInput] = useState(0);
  const [fiboInput, setFiboInput] = useState(0);

  const factorial = useMemo(() => computeFactorial(factInput), [factInput]);
  const fibonacci = useMemo(() => computeFibonacci(fiboInput), [fiboInput]);

  useEffect(() => console.log('Remember Rendering...'), []);

  return (
    <Box textAlign="center">
      <Title>Remember Results</Title>

      <Box marginTop="64px">
        <Text>Factorial</Text>
        <InputNumber number={factInput} onChange={setFactInput} />
        <Text>Fibonacci</Text>
        <InputNumber number={fiboInput} onChange={setFiboInput} />

        <Flex paddingX="64px" marginTop="64px" flexDirection="row" width="100%">
          <Text>Factorial({factInput}) = {factorial}</Text>
        </Flex>
        <Flex paddingX="64px" marginTop="32px" flexDirection="row" width="100%">
          <Text>Fibonacci({fiboInput}) = {fibonacci}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Remember;
