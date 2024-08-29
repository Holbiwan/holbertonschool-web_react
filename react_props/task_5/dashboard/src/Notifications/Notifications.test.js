// Notifications.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from '../Notifications/Notifications';

test('Notifications renders without crashing', () => {
  render(<Notifications />);
});

test('Notifications renders three list items', () => {
  render(<Notifications />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  render(<Notifications />);
  const text = screen.getByText(/Here is the list of notifications/i);
  expect(text).toBeInTheDocument();
});
