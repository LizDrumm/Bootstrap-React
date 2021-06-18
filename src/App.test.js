import { render, screen } from '@testing-library/react';
import App from './App';

test('renders catHeader', () => {
  render(<App />);
  const linkElement = screen.getByText(/Felix/);
  expect(linkElement).toBeInTheDocument();
});
test('renders catCard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Owner/);
  expect(linkElement).toBeInTheDocument();
});