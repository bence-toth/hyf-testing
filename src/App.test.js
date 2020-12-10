import { render, screen, fireEvent } from '@testing-library/react';
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

test('component does calculation correctly', () => {
  render(<App />);
  const numberOneInput = screen.getByTestId("number1");
  const numberTwoInput = screen.getByTestId("number2");
  const sum = screen.getByTestId("sum");

  fireEvent.change(numberOneInput, {target: {value: 0}});
  fireEvent.change(numberTwoInput, {target: {value: 0}});
  expect(sum).toHaveTextContent(/^0$/);

  fireEvent.change(numberOneInput, {target: {value: 10}});
  fireEvent.change(numberTwoInput, {target: {value: 10}});
  expect(sum).toHaveTextContent(/^20$/);

  fireEvent.change(numberOneInput, {target: {value: 10}});
  fireEvent.change(numberTwoInput, {target: {value: 20}});
  expect(sum).toHaveTextContent(/^30$/);

  fireEvent.change(numberOneInput, {target: {value: 10}});
  fireEvent.change(numberTwoInput, {target: {value: -20}});
  expect(sum).toHaveTextContent(/^-10$/);

  fireEvent.change(numberOneInput, {target: {value: -20}});
  fireEvent.change(numberTwoInput, {target: {value: -20}});
  expect(sum).toHaveTextContent(/^-40$/);
});
