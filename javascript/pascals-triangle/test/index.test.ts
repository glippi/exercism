import { pascalTriangle } from '../src/index';

test(`The Triangle should be composed only by the provided number`, () => {
    expect(pascalTriangle(1,1)).toEqual([[1]]);
});

test(`The Triangle should be composed only by the provided number`, () => {
    expect(pascalTriangle(2,1)).toEqual([[2]]);
});

test(`The Triangle should have two rows`, () => {
    expect(pascalTriangle(1,2)).toEqual([[1], [1,1]]);
});

test(`The Triangle should have three rows`, () => {
    expect(pascalTriangle(4,3)).toEqual([[4], [4,4], [4,8,4]]);
});

test(`The Triangle should have four rows`, () => {
    expect(pascalTriangle(5,4)).toEqual([[5], [5,5], [5,10,5], [5, 15, 15, 5]]);
});
