import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders email', () => {
  render(<App />);
  const linkElement = screen.getByText(/contato@pocz.io/i);
  expect(linkElement).toBeInTheDocument();
});
