// prefix sum
// [2,4,3,5,1];

function prefixSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
}

console.log(prefixSum([2, 4, 3, 5, 1]));
