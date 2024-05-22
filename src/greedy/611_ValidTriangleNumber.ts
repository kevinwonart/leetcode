//https://leetcode.com/problems/valid-triangle-number/description/

/* 611. Valid Triangle Number
  Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

   

  Example 1:

  Input: nums = [2,2,3,4]
  Output: 3
  Explanation: Valid combinations are: 
  2,3,4 (using the first 2)
  2,3,4 (using the second 2)
  2,2,3
  Example 2:

  Input: nums = [4,2,3,4]
  Output: 4
   

  Constraints:

  1 <= nums.length <= 1000
  0 <= nums[i] <= 1000
 */

function triangleNumber(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = nums.length - 1; i > 1; --i) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      const canFormTriangle = nums[left] + nums[right] > nums[i];

      if (canFormTriangle) {
        count += right - left;
        --right;
      } else {
        ++left;
      }
    }
  }

  return count;
}

const input1 = [2, 2, 3, 4]
const output1 = 3
const input2 = [4, 2, 3, 4]
const output2 = 4
console.assert(triangleNumber(input1) === output1, `Expected ${output1} | Received ${triangleNumber(input1)} | Input ${input1}`)
console.assert(triangleNumber(input2) === output2, `Expected ${output2} | Received ${triangleNumber(input2)} | Input ${input2}`)

/* Summary:
 * in notions docs
 *
 */
export { }
