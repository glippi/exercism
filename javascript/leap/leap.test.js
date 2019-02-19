import { isLeap } from './leap';

// on every year that is evenly divisible by 4
const YEARS = [4, 8, 1996];

describe.each(YEARS)(
  'A year that is evenly divisible by four should return true',
  (year) => {
    test(`isLeap(${year}) should return true`, () => {
      expect(isLeap(year)).toBeTruthy();
    });
  },
);

//   except every year that is evenly divisible by 100
const YEARS_BY_HUNDRED = [300, 500, 1900];

describe.each(YEARS_BY_HUNDRED)(
  'A year that is evenly divisible by four and one hundred should return false',
  (year) => {
    test(`isLeap(${year}) should return false`, () => {
      expect(isLeap(year)).toBeFalsy();
    });
  },
);

// unless the year is also evenly divisible by 400
const YEARS_BY_FOURHUNDRED = [400, 800, 1600, 2000];

describe.each(YEARS_BY_FOURHUNDRED)(
  'A year that is evenly divisible by four hundred should return true',
  (year) => {
    test(`isLeap(${year}) should return false`, () => {
      expect(isLeap(year)).toBeTruthy();
    });
  },
);


// unfit number
const UNFIT_YEARS = [1997];

describe.each(UNFIT_YEARS)(
  'Odd years should return false',
  (year) => {
    test(`isLeap(${year}) should return false`, () => {
      expect(isLeap(year)).toBeFalsy();
    });
  },
);
