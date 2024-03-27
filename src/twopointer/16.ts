// https://leetcode.com/problems/3sum-closest/description/?envType=list&envId=xlem03mm

/*
16. 3Sum Closest
//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

3 <= nums.length <= 500
-1000 <= nums[i] <= 1000
-104 <= target <= 104
*/

function threeSumClosest(nums: number[], target: number): number {
  const isAllZero = nums.every(num => num === 0);
  nums.sort((a,b) => a - b);
  if(isAllZero) {
    return 0;
  }
  let answer = 0;
  let diff = Infinity;
  for(let i = 0; i < nums.length - 2; i++){
    let left = i + 1;
    let right = nums.length - 1;
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let distance = Math.abs(sum);
      if (sum === target){
        return sum
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
      console.log(i, left, right, sum, distance);
      if(distance < diff) {
        answer = sum;
        diff = distance;
      }
      left++;
    }
  }
  return answer;
};

console.log("hello");
const nums1 = [-1, 2, 1, -4];
const target1 = 1;
const output1 = 2;
const nums2 = [0, 0, 0];
const target2 = 1;
const output2 = 0;

console.assert(threeSumClosest(nums1,target1) === output1, `Expected ${output1} | Received ${threeSumClosest(nums1, target1)} | nums1 ${nums1} | output1 ${output1}`);
//console.assert(threeSumClosest(nums2,target2) === output2, `Expected ${output2} | Received ${threeSumClosest(nums2, target2)} | nums2 ${nums2} | output2 ${output2}`);
console.log("hello");

export {};

/* write up
 * use two pointer. keep track of the closest sum using absolute value of the difference. then print the sum of the combination.
 */
