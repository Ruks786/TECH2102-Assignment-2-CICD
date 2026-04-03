import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  test('renders my name', () => {
    render(<App />)
    const text = screen.getByText(/rukaiya pardawala/i)
    expect(text).toBeInTheDocument()
  })
})