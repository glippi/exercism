export function isLeap(year) {
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  return isDivisibleBy400 || (isDivisibleBy4 && !isDivisibleBy100);
}
