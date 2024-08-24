import { render, screen } from '@testing-library/react';
import App from './App';

// Test that App renders without crashing
test('renders School dashboard', () => {
  render(<App />);
  const headerElement = screen.getByText(/School dashboard/i);
  expect(headerElement).toBeInTheDocument();
});

// Test that App renders a div with the class App-header
test('renders a div with the class App-header', () => {
  const { container } = render(<App />);
  const headerDiv = container.querySelector('.App-header');
  expect(headerDiv).toBeInTheDocument();
});

// Test that App renders a div with the class App-body
test('renders a div with the class App-body', () => {
  const { container } = render(<App />);
  const bodyDiv = container.querySelector('.App-body');
  expect(bodyDiv).toBeInTheDocument();
});

// Test that App renders a div with the class App-footer
test('renders a div with the class App-footer', () => {
  const { container } = render(<App />);
  const footerDiv = container.querySelector('.App-footer');
  expect(footerDiv).toBeInTheDocument();
});
