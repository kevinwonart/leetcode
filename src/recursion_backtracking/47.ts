import { arrays2DAreEqualPermutation } from "../util";

// https://leetcode.com/problems/permutations-ii/description/?envType=list&envId=xlere2g3

/* 47. Permutations II
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permuteUnique(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a,b) => a - b);
  function dfs(depth: number) {
    if (depth === nums.length) {
      //console.log("depth === nums.length");
      res.push([...nums]);
      //console.log(`res push-nums: ${nums}`);
      //console.log(`res push: ${res}`);
      return;
    }
    for(let i = depth; i < nums.length; i++) {
      //console.log(`depth: ${depth} | i ${i}`);
      if (i !== depth && nums[i] === nums[i - 1]) {
        continue;
      }
      [nums[depth], nums[i]] = [nums[i], nums[depth]];
      dfs(depth + 1);
      [nums[depth], nums[i]] = [nums[i], nums[depth]];
    }
  }
  dfs(0);
  return res;
};

const nums1 = [1, 1, 2];
const res1 = [[1,1,2],
 [1,2,1],
 [2,1,1]];
const nums2 = [1,2,3];
const res2 = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];

console.assert(arrays2DAreEqualPermutation(permuteUnique(nums1), res1), `expected ${res1} | received ${permuteUnique(nums1)} | nums1: ${nums1}`);
console.assert(arrays2DAreEqualPermutation(permuteUnique(nums2), res2), `expected ${res1} | received ${permuteUnique(nums2)} | nums1: ${nums2}`);
export {};
