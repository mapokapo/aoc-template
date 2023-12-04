import partition from "../src/utils/partition.js";

describe("Partition", () => {
  it("should return empty array when given empty array", () => {
    expect(partition([], 1)).toEqual([]);
  });

  it("should return array with one element when given array with one element and a partition size of 1", () => {
    expect(partition([1], 1)).toEqual([[1]]);
  });

  it("should return array with one element when given array with one element and a partition size of 2", () => {
    expect(partition([1], 2)).toEqual([[1]]);
  });

  it("should return array with two elements when given array with two elements and a partition size of 1", () => {
    expect(partition([1, 2], 1)).toEqual([[1], [2]]);
  });

  it("should return array with one element when given array with two elements and a partition size of 2", () => {
    expect(partition([1, 2], 2)).toEqual([[1, 2]]);
  });

  it("should return array with two elements when given array with three elements and a partition size of 1", () => {
    expect(partition([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it("should return array with three elements when given array with three elements and a partition size of 2", () => {
    expect(partition([1, 2, 3], 2)).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });

  it("should return array with one element when given array with three elements and a partition size of 3", () => {
    expect(partition([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  it("should return array with two elements when given array with four elements and a partition size of 1", () => {
    expect(partition([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
  });

  it("should return array with three elements when given array with four elements and a partition size of 2", () => {
    expect(partition([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });

  it("should return array with two elements when given array with four elements and a partition size of 3", () => {
    expect(partition([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  it("should return array with one element when given array with four elements and a partition size of 4", () => {
    expect(partition([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
  });
});
