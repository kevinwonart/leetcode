//https://leetcode.com/problems/next-greater-element-ii/description/

/* 503. Next Greater Element II
  Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

  The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

   

  Example 1:

  Input: nums = [1,2,1]
  Output: [2,-1,2]
  Explanation: The first 1's next greater number is 2; 
  The number 2 can't find next greater number. 
  The second 1's next greater number needs to search circularly, which is also 2.
  Example 2:

  Input: nums = [1,2,3,4,3]
  Output: [2,3,4,-1,4]
   

  Constraints:

  1 <= nums.length <= 104
  -109 <= nums[i] <= 109
*/

function nextGreaterElements(nums: number[]): number[] {
  let stack: number[] = []
  let res: number[] = new Array(nums.length).fill(-1)
  stack.push(nums[0])
  for (let i = 0; i < nums.length * 2; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % nums.length]) {
      res[stack.pop()!] = nums[i % nums.length]
    }
    stack.push(i % nums.length)
  }
  return res
}

const input1 = [1, 2, 1]
const output1 = [2, -1, 2]
const input2 = [1, 2, 1]
const output2 = [2, -1, 2]
console.assert(JSON.stringify(nextGreaterElements(input1)) === JSON.stringify(output1), `Expected ${JSON.stringify(output1)} | Received: ${JSON.stringify(nextGreaterElements(input1))} | Input: ${JSON.stringify(input1)}`)
console.assert(JSON.stringify(nextGreaterElements(input2)) === JSON.stringify(output2), `Expected ${JSON.stringify(output2)} | Received: ${JSON.stringify(nextGreaterElements(input2))} | Input: ${JSON.stringify(input2)}`)

/* Summary:
 *
 *
 */

export { }