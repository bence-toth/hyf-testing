import { render, screen } from '@testing-library/react';
import App, {addTwoNumbers} from './App';

test('renders the headline', () => {
  render(<App />);
  const headline = screen.getByText("Calculator");
  expect(headline).toBeInTheDocument();
});

test('the addition function works correctly', () => {
  expect(addTwoNumbers(0, 0)).toBe(0);
  expect(addTwoNumbers(10, 10)).toBe(20);
  expect(addTwoNumbers(10, 20)).toBe(30);
  expect(addTwoNumbers(10, -20)).toBe(-10);
  expect(addTwoNumbers(-20, -20)).toBe(-40);
});
