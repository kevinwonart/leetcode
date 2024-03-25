//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/*3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s: string): number {
  const charMap = new Map();
  let left = 0;
  let window = 0;
  const allUniqueChar = (charMap: Map<string, number>) => {
    return Array.from(charMap.values()).every(value => value < 2);
  };
  for(let i = 0; i < s.length; i++) {
    if(charMap.has(s[i]) && charMap.get(s[i]) >= left) {
      left = charMap.get(s[i]) + 1;
    }
  window = Math.max(window, i - left + 1);
  charMap.set(s[i], i);
  }
  return window;
};

let str1 = "abcabcbb";
const str2 = "bbbbb";
const str3 = "pwwkew";
console.assert(lengthOfLongestSubstring(str1) === 3, `Expects 3 | output: ${lengthOfLongestSubstring(str1)} | String input \"${str1}\"`);
console.assert(lengthOfLongestSubstring(str2) === 1, `Expects 1 | output: ${lengthOfLongestSubstring(str2)} | String input \"${str2}\"`);
console.assert(lengthOfLongestSubstring(str1) === 3, `Expects 3 | output: ${lengthOfLongestSubstring(str3)} | String input \"${str3}\"`);
export {};
