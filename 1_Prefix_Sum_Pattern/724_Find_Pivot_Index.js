function getPivot(nums) {
  // s1 we need 2 create 2 PS array
  // one from the left and another from the right
  let csL = Array(nums.length).fill(0);
  let csR = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) csL[i] = nums[i];
    else csL[i] = nums[i] + csL[i - 1];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (j === nums.length - 1) csR[j] = nums[j];
    else csR[j] = nums[j] + csR[j + 1];
  }

  // s2 : compare the sum to the left and to the right to get result

  for (let i = 0; i < nums.length; i++) {
    let left = i - 1 < 0 ? 0 : csL[i - 1];
    let right = i + 1 > nums.length - 1 ? 0 : csR[i + 1];
    if (left === right) return i;
  }

  return -1;
}
module.exports = getPivot;
