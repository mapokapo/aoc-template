import permute from "../src/utils/permute";

describe("Permute", () => {
  it("should return empty array when given empty array", () => {
    expect(permute([])).toEqual([]);
  });

  it("should return array with one element when given array with one element", () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it("should return array with two elements when given array with two elements", () => {
    expect(permute([1, 2])).toEqual([
      [1, 2],
      [2, 1],
    ]);
  });

  it("should return array with six elements when given array with three elements", () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it("should return array with 24 elements when given array with four elements", () => {
    expect(permute([1, 2, 3, 4])).toEqual([
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1],
    ]);
  });
});
