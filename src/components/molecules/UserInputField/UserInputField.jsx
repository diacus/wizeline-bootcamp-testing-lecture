import React, { useRef, useState } from 'react';

import { Box, Button, Flex, Input, Label, Text } from '../../atoms';

function UserInputField() {
  const [name, setName] = useState('');
  const ref = useRef(null);


  const clickMe = () => {
    if (!ref) return;
    const { value } = ref.current;

    setName(value);
  };

  return (
    <Box>
      <Flex>
        <Input id="user-input" ref={ref} placeholder="Nombre"/>
      </Flex>
      <Flex>
        <Button onClick={clickMe}>Click me!</Button>
      </Flex>
      {name && (
        <Flex>
          <Text data-testid="user-field-output">Hola mi nombre es {name}</Text>
        </Flex>
      )}
    </Box>
  );

}

export default UserInputField;
