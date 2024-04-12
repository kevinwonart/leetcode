import { arrays2DAreEqualPermutation } from "../util";
//https://leetcode.com/problems/combination-sum-iii/description/?envType=list&envId=xlere2g3

/* 216. Combination Sum III
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations.
Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

Constraints:

2 <= k <= 9
1 <= n <= 60
*/

function combinationSum(k: number, n: number): number[][] {
  const res: number[][] = []
  const temp: number[] = []
  let sum = 0
  function recurse(depth: number) {
    if (temp.length === k && sum === n) {
      res.push([...temp])
      return
    }

    if (temp.length > k || sum > n) {
      return
    }

    for (let i = depth; i < 10; i++) {
      sum += i
      temp.push(i)
      recurse(i + 1)
      sum -= i
      temp.pop()
    }
  }
  recurse(1)
  return res
}

const k1 = 3
const n1 = 7
const output1 = [[1, 2, 4]]
const k2 = 3
const n2 = 9
const output2 = [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
const k3 = 3
const n3 = 9
const output3 = [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
console.assert(arrays2DAreEqualPermutation(combinationSum(k1, n1), output1), `Expected ${output1} | output: ${combinationSum(k1, n1)} | k1: ${k1} | n1: ${n1}`)
console.assert(arrays2DAreEqualPermutation(combinationSum(k2, n2), output2), `Expected ${output2} | output: ${combinationSum(k2, n2)} | k2: ${k2} | n2: ${n2}`)
console.assert(arrays2DAreEqualPermutation(combinationSum(k3, n3), output3), `Expected ${output3} | output: ${combinationSum(k3, n3)} | k3: ${k3} | n3: ${n3}`)
export { }
