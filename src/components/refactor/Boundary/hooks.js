import { useState } from 'react';

function useGun(start) {
  const [shotCount, setCount] = useState(0);
  const [bullet, setBullet] = useState(0);

  const bang = () => {
    setCount(shotCount + 1);
    setBullet(Math.floor(Math.random() * 6));
  };

  return { shotCount, bullet, bang };
}

export default useGun;
