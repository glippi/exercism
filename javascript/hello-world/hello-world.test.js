import { hello } from './hello-world';

test('Should return the string Hello World', () => {
  expect(hello()).toBe('Hello, World!');
});
