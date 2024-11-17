function sumRange(input) {
  //s1 : get the prefix sum array
  // s2 : read the input indices and calc the value
  //[[-2, 0, 3, -5, 2, -1], [0, 2], [2, 5], [0, 5]]
  let [nums, ...rest] = input;
  let result = [null];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  for (let i = 0; i < rest.length; i++) {
    const [l, r] = rest[i];
    if (l === 0) result.push(nums[r]); // when first index is 0
    else result.push(nums[r] - nums[l - 1]);
  }
  return result;
}

module.exports = sumRange;
