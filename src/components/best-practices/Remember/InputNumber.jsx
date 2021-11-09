import React, { useRef } from 'react';

import { Flex, Input, Label } from '../../atoms';

function InputNumber({ number, onChange }) {
  const ref = useRef(null);

  return (
    <Flex paddingX="64px" marginTop="32px" flexDirection="row" width="100%">
      <Label marginRight="16px">{number}</Label>
      <Input
        ref={ref}
        type="range"
        min="0"
        max="20"
        width="100%"
        marginLeft="16px"
        value={number}
        onChange={() => {
          const newNumber = parseInt(ref.current.value);
          onChange(newNumber);
        }}
      />
    </Flex>
  );
}

export default InputNumber;
