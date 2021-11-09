import { useState } from 'react';

function useThrottle(originalCallback) {
  const [isActive, setActive] = useState(false);

  const callback = (...args) => {
    if (isActive) return;

    setActive(true);
    console.log('The callback is running');
    originalCallback(...args)
      .then(() => {
        setActive(false);
        console.log(
          'The callback has returned. The component is no longer active'
        );
      });
  };

  return { isActive, callback };
}

export default useThrottle;
