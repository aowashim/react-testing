import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // mocking fetch function
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: 'titile 1' }],
    })

    render(<Async />)

    const listItemElements = await screen.findAllByRole('listitem')
    expect(listItemElements).not.toHaveLength(0)
  })
})
