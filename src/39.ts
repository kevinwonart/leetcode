//https://leetcode.com/problems/combination-sum/description/?envType=list&envId=xlere2g3
/* 39. Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
*/

//Non Recursive Solution: Enderer
/*
function combinationSum(nums: number[], target: number): number[][] {
  const result = [];
  const stack = [];
  stack.push({ i: 0, sum: 0, path: [] });
  while(stack.length > 0) {
      const { i, sum, path } = stack.pop();
      if (sum === target) {
          result.push([...path]);
          continue;
      }
      if (sum > target) { continue; }

      for (let n = nums.length - 1; n >= i; n--) {
          stack.push({ i: n, path: [...path, nums[n]], sum: sum + nums[n]});
      }
  }
  return result;
};
*/

//Write up:
//Main mechanism is managing a stack of object { i , sum, path } where the first object in the stack
//is {i:0, sum: 0, path: []}
//the while iterates until it becomes empty. at the start of the while loop it pops the top object
//and sets that as the paramater for the loop. if the sum for that object which acts as an instance
//of the read of a sum combo it will push that path into the result and start the while loop over
//and pop the stack again.
//if the sum is larger at the point of the iteration it will "continue" to the top of the while and
//pop the next stack object. and then removing the combo from the algorithm.
//these are the mechanism that lets the while to finish.
//
//the iterator inside of the while loop starts at the top then pushes a new object { i : n(index of
//for loop), path: current path of while args concat nums[n], sum of path. the sum of path is
//calculated by getting the while loops sum + the current location of the n index for the nums array
//or the candidate array. by nature of the while loop the inscope args from the popped object is the
//previous iteration of the while maintaining the order of summing throughout the array. inside the
//for loop the "n >= i" maintains the iterator so that a combo isn't repeated.
//

export {};
