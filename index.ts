// O(n^2)
export const sums = (
  transactions: number[],
  intervals: [number, number][]
): number[] =>
  intervals.map(([left, right]) =>
    transactions.slice(left, right + 1).reduce((a, b) => a + b)
  );

// O(n)
export const sumsFaster = (
  transactions: number[],
  intervals: [number, number][]
): number[] => {
  const allSums = transactions.reduce(
    (sums, t, i) => [...sums, t + (sums[i - 1] || 0)],
    []
  );

  return intervals.map(
    ([left, right]) => allSums[right] - (allSums[left - 1] || 0)
  );
};
