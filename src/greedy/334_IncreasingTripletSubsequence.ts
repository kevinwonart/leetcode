//https://leetcode.com/problems/increasing-triplet-subsequence/description/

/* 334. Increasing Triplet Subsequence
  Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

   

  Example 1:

  Input: nums = [1,2,3,4,5]
  Output: true
  Explanation: Any triplet where i < j < k is valid.
  Example 2:

  Input: nums = [5,4,3,2,1]
  Output: false
  Explanation: No triplet exists.
  Example 3:

  Input: nums = [2,1,5,0,4,6]
  Output: true
  Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
   

  Constraints:

  1 <= nums.length <= 5 * 105
  -231 <= nums[i] <= 231 - 1
 */

function increasingTriplet(nums: number[]): boolean {
  let left = 0
  let right = nums.length
  let min = Infinity
  let max = Infinity

  while (nums[left] > nums[left - 1]) left++;
  while (nums[right] < nums[right - 1]) right--;

  for (left; left < right; left++) {
    if (nums[left] <= min) {
      min = nums[left]
    } else if (nums[left] <= max) {
      max = nums[left]
    } else {
      return true
    }
  }
  return false
}

const input1 = [1, 2, 3, 4, 5]
const output1 = true
const input2 = [5, 4, 3, 2, 1]
const output2 = false
const input3 = [2, 1, 5, 0, 4, 6]
const output3 = true

console.assert(increasingTriplet(input1) === output1, `Expected ${output1} | Received ${increasingTriplet(input1)} | Input ${input1}`)
console.assert(increasingTriplet(input2) === output2, `Expected ${output2} | Received ${increasingTriplet(input2)} | Input ${input2}`)
console.assert(increasingTriplet(input3) === output3, `Expected ${output3} | Received ${increasingTriplet(input3)} | Input ${input3}`)
/* Summary:
 *
 */
export { }
