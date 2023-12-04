/**
 * Generates all permutations of an array.
 *
 * @example
 * ```ts
 * permute([1, 2, 3]);
 * // => [[1, 2, 3], [1, 3, 2], [2, 1, 3],
 * //     [2, 3, 1], [3, 1, 2], [3, 2, 1]]
 * ```
 *
 * @param array The base array from which to generate permutations
 * @returns An array of all permutations of the base array
 */
export default function permute<T>(array: T[]): T[][] {
  const permutations: T[][] = [];

  if (array.length === 0) {
    return [];
  } else if (array.length === 1) {
    return [array];
  }

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current === undefined) {
      continue;
    }
    const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
    const remainingPermutations = permute(remaining);

    for (const permutation of remainingPermutations) {
      permutations.push([current, ...permutation]);
    }
  }

  return permutations;
}
