import { arraysAreEqual } from "../util";

// https://leetcode.com/problems/two-sum/description/?envType=list&envId=xlem03mm
/*      
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/      

function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const difference = target - number;
    if(numberMap.has(difference)) {
      return [numberMap.get(difference), i];
    }
    numberMap.set(number, i);
  }
  return [];
}

const nums1 = [2,7,11,15];
const target1 = 9;
const nums2 = [3,2,4];
const target2 = 6;
const nums3 = [3,3];
const target3 = 6; 

console.assert(arraysAreEqual(twoSum(nums1, target1), [0,1]), `expected [0,1] | returned: ${twoSum(nums1, target1)} | nums2 = ${nums1} | target1 = ${target1}`);
console.assert(arraysAreEqual(twoSum(nums2, target2), [1,2]), `expected [1,2] | returned: ${twoSum(nums2, target2)} | nums2 = ${nums2} | target2 = ${target2}`);
console.assert(arraysAreEqual(twoSum(nums3, target3), [0,1]), `expected [0,1] | returned:  ${twoSum(nums3, target3)} | nums3 = ${nums3} | target3 = ${target3}`);

export {};

/*explanation:
The answer runs through the array with a map temp. it checks the current value of the for loop and then searches for the difference in the array. if it exists then 
it returns the array of the indexes that make the sum of the target. if it doesnt it sets the current point of the map into the map so it can check back for the difference
retrospectively.
*/

