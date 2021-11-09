import React, { useState } from 'react';

import { Box, Button, Flex, Title } from '../../atoms';


function Shot() {
  const [shotCount, setShotCount] = useState(0);
  const [bullet, setBullet] = useState(0);

  const bang = () => {
    const newBullet = Math.floor(Math.random() * 6);
    setShotCount(shotCount + 1);
    setBullet(newBullet);
  }

  if (bullet === 4) throw new Error('Hit!');

  return  (
    <Box textAlign="center">
      <Title>Ruleta Rusa</Title>
      <Flex width="100%" paddingX="64px" paddingTop="96px">
        {getMessage(shotCount)}
      </Flex>
      <Flex width="100%" paddingX="64px" paddingTop="96px">
        <Button onClick={bang}>Bang!</Button>
      </Flex>
    </Box>
  );
}

function getMessage(shotCount) {
  if (shotCount === 0) return 'En verdad quieres jugar?';
  if (shotCount === 1) return 'Suerte de principiante';

  return `Has sobrevivido ${shotCount} disparos`;
}
export default Shot;
