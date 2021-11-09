import React from 'react';

import HandleError from './HandleError';
import Shot from './Shot';

function Boundary() {
  return (
    <HandleError message="Perdiste :(">
      <Shot />
    </HandleError>
  );
}

export default Boundary;
