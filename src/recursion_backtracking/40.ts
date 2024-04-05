import { arrays2DAreEqualPermutation } from "../util";

//https://leetcode.com/problems/generate-parentheses/description/?envType=list&envId=xlere2g3

/* 40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
*/

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => {
    return a - b;
  });
  const res: number[][] = [];
  const stack: number[] = [];
  function recurse(target: number, depth: number) {
    console.log("recurse");
    console.log(`cand[depth]: ${candidates[depth]} depth: ${depth}`);
    if (target === 0) {
      res.push([...stack]);
      return;
    }
    for(let i = depth; i < candidates.length - 1; i++) {
      if (i > depth && candidates[i] === candidates[i - 1]) continue;
      let diff = target - candidates[i];
      if (diff < 0) break;
      stack.push(candidates[i]);
      recurse(diff, i + 1);
      stack.pop();
    }
  }
  recurse(target, 0);
  return res;
}

const candidates1 = [10, 1, 2, 7, 6, 1, 5];
const target1 = 8;
const res1 = [[1,1,6],[1,2,5],[1,7],[2,6]]
combinationSum2(candidates1, target1);
console.assert(arrays2DAreEqualPermutation(combinationSum2(candidates1,target1),res1),`received ${combinationSum2(candidates1,target1)}, expected ${res1} | candidate: ${candidates1} | target: ${target1}`);
export {};
//explanation: this is a solution from Mohamed_Elfar on leetcode website, the way the alogorithm
//works is the problem checks if an open bracket is greater the amount of closing parenthesis count. it pushes
//")" to the current string if it is in the next recusrive call. It then checks if the open parenthesis count is greater than
//the n input. it then puts open + 1, close, and an opening parenthesis to the next rescursive call.
//This recusrive call returns and snaps back at when the str in the dfs is 2 x n.-one for each open
//and close parenthesis
