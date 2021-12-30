import { sums, sumsFaster } from './index';

test('sums([], [])) is []', () => {
  expect(sums([], [])).toEqual([]);
  expect(sumsFaster([], [])).toEqual([]);
});

test('sums([1, 2], [[0,1]]) is [3]', () => {
  expect(sums([1, 2], [[0, 1]])).toEqual([3]);
  expect(sumsFaster([1, 2], [[0, 1]])).toEqual([3]);
});

test('sums([-2, 0, 3, -5, 2, -1], [[0, 2], [2, 5], [0, 5]]*)  is  [1, -1, -3]', () => {
  expect(
    sums(
      [-2, 0, 3, -5, 2, -1],
      [
        [0, 2],
        [2, 5],
        [0, 5],
      ]
    )
  ).toEqual([1, -1, -3]);

  expect(
    sumsFaster(
      [-2, 0, 3, -5, 2, -1],
      [
        [0, 2],
        [2, 5],
        [0, 5],
      ]
    )
  ).toEqual([1, -1, -3]);
});
