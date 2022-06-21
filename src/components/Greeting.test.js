import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting component', () => {
  test('renders Hello World! as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...Nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('render "good to see you" as a text', () => {
    render(<Greeting />)

    const paragraphElement = screen.getByText('good to see you', {
      exact: false,
    })
    expect(paragraphElement).toBeInTheDocument()
  })

  test('render "Changed!" if button is clicked', () => {
    // arrange
    render(<Greeting />)

    // act
    const btnElement = screen.getByRole('button')
    userEvent.click(btnElement)

    // Assert
    const paragraphElement = screen.getByText('Changed!')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('does not render "good to see you" if button is clicked', () => {
    render(<Greeting />)

    const btnElement = screen.getByRole('button')
    userEvent.click(btnElement)

    const paragraphElement = screen.queryByText('good to see you', {
      exact: false,
    })
    expect(paragraphElement).toBeNull()
  })
})
