import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Fetch from '../fetch'

import { TodoList } from '../../molecules';

const server = setupServer(
  rest.get('/todo', (req, res, ctx) => {
    return res(ctx.json({
      tasks: [ 'First', 'Second' ],
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('display output form API', async () => {
  render(<TodoList url="/todo" />)

  fireEvent.click(screen.getByText('Fetch List'))

  await waitFor(() => screen.getByText('To Do'))

  expect(screen.getByText('heading')).toHaveTextContent('First')
})
