//https://leetcode.com/problems/daily-temperatures/description/

/* 739. Daily Temperatures
  Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

  Example 1:

  Input: temperatures = [73,74,75,71,69,72,76,73]
  Output: [1,1,4,2,1,1,0,0]
  Example 2:

  Input: temperatures = [30,40,50,60]
  Output: [1,1,1,0]
  Example 3:

  Input: temperatures = [30,60,90]
  Output: [1,1,0]
   

  Constraints:

  1 <= temperatures.length <= 105
  30 <= temperatures[i] <= 100 

 */
function dailyTemperatures(temperatures: number[]): number[] {
  let res: number[] = new Array(temperatures.length).fill(0)
  let stack: number[] = [];
  stack.push(0)
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let day = stack.pop()
      let lenBetweenWarmDays = i - day
      res[day] = lenBetweenWarmDays
    }
    stack.push(i)
  }
  return res
};
const input1 = [73, 74, 75, 71, 69, 72, 76, 73]
const output1 = [1, 1, 4, 2, 1, 1, 0, 0]
//console.log(dailyTemperatures(input1))
console.assert(dailyTemperatures(input1) === output1, `Expected ${output1} | received ${dailyTemperatures(input1)} instead`)
/* Summary:
 *
 *
 */
