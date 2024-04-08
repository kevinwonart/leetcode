import { arrays2DAreEqualPermutation } from "../util";

// https://leetcode.com/problems/subsets-ii/description/?envType=list&envId=xlere2g3

/* 90. Subsets II
Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];
  let temp: number[] = [];
  //temp.push([]);
  function dfs (depth: number) {
    res.push([...temp]);
    for(let i = depth; i < nums.length; i++) {
      if (i > depth && nums[i] === nums [i-1]) continue;
      temp.push(nums[i]);
      console.log(`depth: ${depth} | i: ${i} | temp ${temp} | res ${res}`);
      dfs(i + 1);
      temp.pop();
    }
  }

  dfs(0);
  return res;
}

const nums1 = [1,2,2]
const res1 = [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.assert(arrays2DAreEqualPermutation(subsetsWithDup(nums1),res1), `expect ${res1}, returned: ${subsetsWithDup(nums1)} | nums1: ${nums1}`);
export {};
