//https://leetcode.com/problems/132-pattern/description/

/* 456. 132 Pattern
  Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

  Return true if there is a 132 pattern in nums, otherwise, return false.

  Example 1:

  Input: nums = [1,2,3,4]
  Output: false
  Explanation: There is no 132 pattern in the sequence.
  Example 2:

  Input: nums = [3,1,4,2]
  Output: true
  Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
  Example 3:

  Input: nums = [-1,3,2,0]
  Output: true
  Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
   

  Constraints:

  n == nums.length
  1 <= n <= 2 * 105
  -109 <= nums[i] <= 109
 */

function find132pattern(nums: number[]): boolean {
  let stack: number[] = []
  let middle = -Infinity
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < middle) {
      return true
    }
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      middle = stack.pop()!
    }
    stack.push(nums[i])
  }
  return false
}

/* Summary:
 *
 *
 */

const input1 = [1, 2, 3, 4]
const output1 = false
const input2 = [3, 1, 4, 2]
const output2 = true
const input3 = [-1, 3, 2, 0]
const output3 = true

console.assert(find132pattern(input1) === output1, `expected ${output1}, received ${find132pattern(input1)} | input: ${input1}`)
console.assert(find132pattern(input2) === output2, `expected ${output2}, received ${find132pattern(input2)} | input: ${input2}`)
console.assert(find132pattern(input3) === output3, `expected ${output3}, received ${find132pattern(input3)} | input: ${input3}`)
export { }
