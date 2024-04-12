import { arrays2DAreEqualPermutation } from "../util";
// 131. Palindrome Partitioning

/* 
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/

function isPalindrome(s: string): boolean {
  if (s.length === 0) return false
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return false
  }
  return true
}

function partition(s: string): string[][] {
  let res: string[][] = []
  let stack: string[] = []
  function recurse(start: number) {
    if (start === s.length) {
      res.push(stack.slice())
      return
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.slice(start, i + 1))) {
        stack.push(s.slice(start, i + 1))
        recurse(i + 1)
        stack.pop()
      }
    }
  }
  recurse(0)
  return res
}

const input1 = "aab"
const res1 = [["a", "a", "b"], ["aa", "b"]]
console.assert(arrays2DAreEqualPermutation(partition(input1), res1), `expect ${res1}, returned: ${partition(input1)} | input: ${input1}`);
export { }
