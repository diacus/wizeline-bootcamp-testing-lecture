import React from 'react';

import { Box, Flex, Input, Text } from '../../atoms';

import useField from './hooks';

function EmailField() {
  const field = useField();
  const error = field.getEmailError();

  return (
    <Box>
      <Flex justifyContent="center">
        <Input
          label="Email"
          onBlur={field.isValid}
          onChange={field.updateEmail}
          placeholder="Ingresa un correo"
          type="email"
          value={field.getEmail()}
        />
      </Flex>
      {error && (
        <Flex justifyContent="center">
          {error}
        </Flex>
      )}
    </Box>
  );
}

export default EmailField;
