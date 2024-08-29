import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the correct year', () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns the correct string when true', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when false', () => {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the expected string', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
