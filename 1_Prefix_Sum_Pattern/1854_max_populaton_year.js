function getMaxPopulationYear(logs) {
  let base = 1950;
  // step 1: we created our pop array
  let population = Array(101).fill(0);
  for (let i = 0; i < logs.length; i++) {
    const [beg, end] = logs[i];
    population[beg - base] += 1;
    population[end - base] -= 1;
  }
  let max = 0; // index // indicates Year
  //step2 : we need impliment out prefix SUM
  for (let i = 1; i < 101; i++) {
    population[i] += population[i - 1]; // prefix sum
    if (population[i] > population[max]) {
      max = i;
    }
  }
  return max + base;
}
module.exports = getMaxPopulationYear;
