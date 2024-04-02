import { arraysAreEqualPermutation } from "../util";

//https://leetcode.com/problems/generate-parentheses/description/?envType=list&envId=xlere2g3

/*22. Generate Parentheses
 *
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  function dfs(open: number, close: number, str: string) {
    if (str.length == n * 2) {
      res.push(str);
    }
    if (open > close) {
      dfs(open, close + 1, str + ")");
    }
    if (open < n) {
      dfs(open + 1, close, str + "(");
    }
  }
  dfs(0, 0, "");
  return res;
};

const n1 = 3;
const n2 = 1;
const res1 = ["((()))","(()())","(())()","()(())","()()()"];
const res2 = ["()"];
console.log(generateParenthesis(n1));
console.assert(arraysAreEqualPermutation(generateParenthesis(n1),res1), `expected ${res1} | returned: ${generateParenthesis(n1)} | n1 = ${n1}`);
console.assert(arraysAreEqualPermutation(generateParenthesis(n2), res2), `expected ${res2} | returned: ${generateParenthesis(n2)} | n2 = ${n2}`);
export {};
//explanation: this is a solution from Mohamed_Elfar on leetcode website, the way the alogorithm
//works is the problem checks if an open bracket is greater the amount of closing parenthesis count. it pushes
//")" to the current string if it is in the next recusrive call. It then checks if the open parenthesis count is greater than
//the n input. it then puts open + 1, close, and an opening parenthesis to the next rescursive call.
//This recusrive call returns and snaps back at when the str in the dfs is 2 x n.-one for each open
//and close parenthesis
