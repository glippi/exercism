import { twoFer } from './two-fer';

test("If no name is given it should return 'One for you, one for me.'", () => {
  expect(twoFer()).toBe('One for you, one for me.');
});

test("Given name is Alice it should return 'One for Alice, one for me.'", () => {
  expect(twoFer('Alice')).toBe('One for Alice, one for me.');
});

test("Given name is Gabriele it should return 'One for Gabriele , one for me.'", () => {
  expect(twoFer('Gabriele')).toBe('One for Gabriele, one for me.');
});
