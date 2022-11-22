import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dropdown', () => {
  render(<App />);
  const linkElement = screen.getByTestId("graph group");
  expect(linkElement).toBeInTheDocument();
});
