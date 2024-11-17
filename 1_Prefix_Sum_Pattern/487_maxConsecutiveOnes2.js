function mco2(nums) {
  //s1 create necessary variables
  let k = 1;
  let i = 0;
  let max = 0;
  let lastIndex = 0;
  let runningSum = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      runningSum += nums[i];
    } else if (!nums[i] && k > 0) {
      runningSum += 1;
      k--;
      lastIndex = i;
    } else if (!nums[i] && k == 0) {
      i = lastIndex;
      k++;
      runningSum = 0;
    }
    max = Math.max(max, runningSum);

    i++;
  }

  return max;
}
module.exports = mco2;
