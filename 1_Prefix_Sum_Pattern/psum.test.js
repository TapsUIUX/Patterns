const getMaxPopulationYear = require("./1854_max_populaton_year");
const sumRange = require("./303_Range_sum_Query");
const findMaxOnes = require("./485_MaxConsecutiveOnes");
const getPivot = require("./724_Find_Pivot_Index");
const mco2 = require("./487_maxConsecutiveOnes2");
const longestOnes = require("./1004.max_consecute_ones_iii");

describe("Prefix Sum Test", () => {
  it("should return rangeSum", () => {
    expect(
      sumRange([
        [-2, 0, 3, -5, 2, -1],
        [0, 2],
        [2, 5],
        [0, 5],
      ])
    ).toMatchObject([null, 1, -1, -3]);
  });
  it("should return max population Year", () => {
    expect(
      getMaxPopulationYear([
        [1993, 1999],
        [2000, 2010],
      ])
    ).toBe(1993);
    expect(
      getMaxPopulationYear([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ])
    ).toBe(1960);
    expect(
      getMaxPopulationYear([
        [1987, 2047],
        [1952, 2006],
        [2021, 2042],
        [2047, 2049],
        [2036, 2040],
        [1994, 2009],
      ])
    ).toBe(1994);
    expect(
      getMaxPopulationYear([
        [2033, 2034],
        [2039, 2047],
        [1998, 2042],
        [2047, 2048],
        [2025, 2029],
        [2005, 2044],
        [1990, 1992],
        [1952, 1956],
        [1984, 2014],
      ])
    ).toBe(2005);
  });

  it("should retunr pivot index", () => {
    expect(getPivot([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(getPivot([1, 2, 3])).toBe(-1);
    expect(getPivot([2, 1, -1])).toBe(0);
    expect(getPivot([1, -1, 2])).toBe(2);
  });

  it("should return max num of ones", () => {
    expect(findMaxOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    expect(findMaxOnes([1, 0, 1, 1, 0, 1])).toBe(2);
    expect(findMaxOnes([1])).toBe(1);
    expect(findMaxOnes([0])).toBe(0);
  });

  it("should return max count on ones", () => {
    expect(mco2([1, 0, 1, 1, 0])).toBe(4);
    expect(mco2([1, 0, 1, 1, 0, 1, 1])).toBe(5);
  });

  it("should return the length of the longest ones", () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
    expect(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
    ).toBe(10);
  });
});
