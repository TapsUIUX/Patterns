function findMaxOnes(nums) {
  //s1 create variables
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1] ? nums[i - 1] : 0;
    nums[i] += prev;
    max = Math.max(max, nums[i]);
    if (nums[i] === prev) {
      nums[i] = 0;
    }
  }
  return max;
}
module.exports = findMaxOnes;
