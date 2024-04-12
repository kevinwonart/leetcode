/*
//https://leetcode.com/problems/target-sum/description/?envType=list&envId=xlere2g3

/*
494. Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Example 2:

Input: nums = [1], target = 1
Output: 1
 

Constraints:

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000

function getSum(nums: number[]) {
  nums.reduce((total: number, current: number) => {
    return total + current;
  }, 0);
}

function findTargetSumWays(nums: number[], target: number): number {
  function recurse(start: number) {
    for (let i = 0; i < nums.length; i++) {

    }
  }
  recurse(0)
}

const nums1 = [1, 1, 1, 1, 1]
const target1 = 3
const output1 = 5
const nums2 = [1]
const target2 = 1
const output2 = 1

console.assert(findTargetSumWays(nums1, target1) === output1, `expected ${output1}, returned: ${findTargetSumWays(nums1, target1)} | nums: ${nums1} | output: ${output1}`)
console.assert(findTargetSumWays(nums2, target2) === output2, `expected ${output2}, returned: ${findTargetSumWays(nums2, target2)} | nums: ${nums2} | output: ${output2}`)

export { }
*/
