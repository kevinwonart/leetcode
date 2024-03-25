/* https://leetcode.com/problems/minimum-size-subarray-sum/description/?envType=list&envId=xlep8di5
*
 209. Minimum Size Subarray Sum
 Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
*/

/* First try
 *
function minSubArrayLen(target: number, nums: number[]): number {
  let window = 1;
  while(window <= nums.length) {
    for (let i = 0; i <= nums.length - window; i++) {
      let windowSum = 0;
      for(let j = 0; j < window; j++) {
        windowSum += nums[i + j];
        if(windowSum >= target){
          return window;
        }
      }
    }
    window++;
  }
  return 0;
};
* runtime exceeded but worked sample solution worked
*/

/* second try */
function minSubArrayLen(target: number, nums: number[]): number {
  let window = 1;
  while(window <= nums.length) {
    let windowSum = 0;
    for(let i = 0; i < window; i++) {
      windowSum += nums[i];
      if(windowSum >= target){
        return window;
      }
    }
    for (let i = 0; i < nums.length - window; i++) {
      windowSum -= nums[i];
      windowSum += nums[i + window];
      if(windowSum >= target){
        return window
      }
    }
    window++;
  }
  return 0;
}
/* Solution O(n) by Sameeneeti
 function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0; // Left pointer to track the start of the current subarray
  let right = 0; // Right pointer to expand the current subarray

  let sum = 0; // Sum of elements in the current subarray
  let minLen = Number.MAX_SAFE_INTEGER; // Minimum length of a subarray with a sum >= target
  const n = nums.length; // Length of the input array

  while (right < n) {
    sum += nums[right]; // Expand the current subarray by including the right element
    while (sum >= target) {
      // If the sum of the current subarray is greater than or equal to the target
      minLen = Math.min(minLen, right - left + 1); // Update the minimum length
      sum -= nums[left]; // Contract the subarray from the left by excluding the left element
      left++; // Move the left pointer to the right
    }
    right++; // Move the right pointer to the right to expand the subarray
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen; // Return the minimum length
}
*/

const target1 = 7;
const nums1 = [2,3,1,2,4,3];
const target2 = 4;
const nums2= [1,4,4]
const target3 = 11;
const nums3 = [1,1,1,1,1,1,1,1];
console.assert(minSubArrayLen(target1, nums1) === 2, `expects 2 | returned ${minSubArrayLen(target1, nums1)}`);
console.assert(minSubArrayLen(target2, nums2) === 1, `expects 1 | returned ${minSubArrayLen(target1, nums1)}`);
console.assert(minSubArrayLen(target3, nums3) === 0, `expects 0 | returned ${minSubArrayLen(target1, nums1)}`);

//note: my original solution, o(n^3) didn't pass the run time because it runs through the array again and again.
//instead its better to use memoization, meaning info from previous logic and do a window left and right 
//plus or minus. my second solution also didnt work. i looked at anther solution it uses a left and right pointer.
//it might be easier to implement memoizatin this way. There is a log n solution too. Although I couldn't complete
//this solution by myself. I will start the next one to get more varying practice.

export {};
