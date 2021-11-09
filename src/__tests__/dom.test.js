import React from 'react';
import ReactDOM from 'react-dom';

import { getByPlaceholderText, getByText, queryByTestId, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { UserInputField } from '../components/molecules';



function getExampleDOM() {
  const div = document.createElement('div');

  ReactDOM.render(<UserInputField />, div);

  return div;
}

test('examples of some things', async () => {
  const anyUser = 'Cosme Fulanito'
  const container = getExampleDOM();

  const input = getByPlaceholderText(container, 'Nombre');
  input.value = anyUser;

  getByText(container, 'Click me!').click();

  await waitFor(() => {
    const expectedText = 'Hola mi nombre es Cosme Fulanito';
    expect(queryByTestId(container, 'user-field-output')).toBeTruthy();
  });

  // jest snapshots work great with regular DOM nodes!
  expect(container).toMatchSnapshot()
})
