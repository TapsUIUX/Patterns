function longestOnes(nums, K) {
  //s1 : lets create variables
  let k = K;
  let max = 0;
  let runnigSum = 0;
  let len = nums.length;
  let i = 0;
  // s2: zeroindexes //
  let stack = [];
  for (let i = len - 1; i >= 0; i--) {
    if (!nums[i]) stack.push(i);
  }
  let ls = 0;
  // s3 : count the ones using prefix sum
  while (i < len) {
    if (nums[i]) runnigSum++; // prefix sum
    else if (k > 0 && !nums[i]) {
      runnigSum++;
      k--;
      ls = i;
    } else if (!k && !nums[i]) {
      runnigSum = 0;
      k = K;
      i = stack.pop();
    }
    max = Math.max(max, runnigSum);
    i++;
  }
  return max;
}

function longestOnesNew(nums, K) {
  let zCount = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) zCount++;
    if (K < zCount) {
      if (nums[j] === 0) zCount--;
      j++;
    }
  }
  return nums.length - j;
}
module.exports = longestOnes;
