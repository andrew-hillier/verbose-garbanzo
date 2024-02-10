import { render, screen } from '@testing-library/react';
import HelloReact from './HelloReact';

test('renders learn react link', () => {
  render(<HelloReact />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
