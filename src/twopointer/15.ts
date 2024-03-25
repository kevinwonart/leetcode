//https://leetcode.com/problems/3sum/description/?envType=list&envId=xlem03mm

/* 15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/* Solution

function threeSum(nums: number[]): number[][] {

  nums.sort((a, b) => a - b); // sort the input array
  const result: number[][] = []; // initialize the result array

  for (let i = 0; i < nums.length - 2; i++) { // iterate through the array
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let j = i + 1; // initialize the left pointer
    let k = nums.length - 1; // initialize the right pointer

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) { // check if we found a triplet that sums to zero
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
        while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
        j++; // move the left pointer to the right
        k--; // move the right pointer to the left
      } else if (sum < 0) { // if the sum is less than zero, move the left pointer to the right
        j++;
      } else { // if the sum is greater than zero, move the right pointer to the left
        k--;
      }
    }
  }

  return result; // return the result array
}
*/
/* Writeup
 * this solution works this way. sort the array. run an interator from left to right
 * then work a left pointer that starts 1 index right of the first iterator. iterator through
 * each combination by moving the left pointer right if it is less than the target
 * and move the right pointer left if the target is less than the triplet. move the iterator 
 * right and repeat til you iterator through the entire array.
*/
