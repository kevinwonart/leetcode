//https://leetcode.com/problems/longest-palindrome/description/

/* 409. Longest Palindrome
  Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

  Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

   

  Example 1:

  Input: s = "abccccdd"
  Output: 7
  Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
  Example 2:

  Input: s = "a"
  Output: 1
  Explanation: The longest palindrome that can be built is "a", whose length is 1.
   

  Constraints:

  1 <= s.length <= 2000
  s consists of lowercase and/or uppercase English letters only.
 */

//solution by SleepyDude https://leetcode.com/problems/longest-palindrome/solutions/3578265/simple-typescript-solution-with-hash-table-o-n-time-and-o-1-space-complexity/
function longestPalindrome(s: string): number {
  const letters = new Map()
  let doubles = 0

  for (let i = 0; i < s.length; i++) {
    if (letters.get(s[i])) {
      doubles += 1
      letters.set(s[i], 0)
      continue
    }
    letters.set(s[i], 1)
  }
  if (s.length === doubles * 2) return doubles * 2

  return doubles * 2 + 1
};

/* Summary:
 * 1. Make map letters
 * 2. Go through each character in for loop
 * 3. if letters.get(s[i]) checks if it exist in map so if it does that means the next occurence makes it a pair
 * 4. use doubles as a counter and +=1
 * 5. set letters(s[i]) back to 0 in the conditional
 * 6. set letters(s[i]) to 1 if it failed the conditional before it(meaning it doesn't exist in map yet)
 * 7. if (s.length === doubles * 2) return doubles * 2 is an early exit because if doubles exist up to midway point that means
 *    it's fully a palindrome. meaning if the counter is half the length of the string s halfway  through the loop it means the whole string is a palindrome
 * 8. return double * 2 + 1 the plus 1 is the midpoint that can be put inbetween two substrings that are identical can be any char
 *
 */

const input1 = "abccccdd"
const output1 = 7
const input2 = "a"
const output2 = 1

console.assert(longestPalindrome(input1) === output1, `Expected: ${input1} | received ${longestPalindrome(input1)} | input: ${input1}`)
console.assert(longestPalindrome(input2) === output2, `Expected: ${input2} | received ${longestPalindrome(input2)} | input: ${input2}`)
export { }

