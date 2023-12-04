/**
 * Partition (splits up) an array into smaller arrays of a given size.
 *
 * This is not a combination function, since it does not return _all_ possible combination of the array.
 *
 * The rule is that each partition cannot be made of elements from different parts of the array, i.e. the elements in each partition must be contiguous in respect to the original array.
 * For example, given the array `[1, 2, 3]` and a partition size of `2`, this function will return `[[1, 2], [2, 3]]`, **not** `[[1, 2], [1, 3], [2, 3]]`.
 *
 * @example
 * ```ts
 * partition([1, 2, 3, 4], 2);
 * // => [[1, 2], [2, 3], [3, 4]]
 * ```
 *
 * @param array The array to partition
 * @param partitionSize The size of each partition
 * @returns An array of partitions
 */
export default function partition<T>(array: T[], partitionSize: number): T[][] {
  const partitions: T[][] = [];

  if (array.length === 0) {
    return [];
  } else if (array.length <= partitionSize) {
    return [array];
  }

  for (let i = 0; i < array.length - partitionSize + 1; i++) {
    const partition = array.slice(i, i + partitionSize);
    partitions.push(partition);
  }

  return partitions;
}
