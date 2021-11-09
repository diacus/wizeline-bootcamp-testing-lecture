import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { getByPlaceholderText, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { EmailField } from '../components/molecules';

test('email field checks empty value on blur', async () => {
  render(<EmailField />);
  const field = screen.getByPlaceholderText('Ingresa un correo');

  fireEvent.blur(field);

  await waitFor(() => {
    const output = screen.getByText('Por favor ingresa una direccion de correo');
    expect(output).toBeInTheDocument();
  });
});
