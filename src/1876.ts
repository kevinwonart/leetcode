//https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/
/*** 1876. Substrings of Size Three with Distinct Characters
 *
A string is good if there are no repeated characters.

Given a string s, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
 

Constraints:

1 <= s.length <= 100:w
s consists of lowercase English letters.
*/

function countGoodSubstrings(s: string): number {
  let window: number = 3;
  let result: number = 0;
  let chars = new Array(26).fill(0);
  const allUniqueChar = () => chars.every((char) => char < 2);

  for(let i = 0; i <= s.length - window; i++) {
    chars = new Array(26).fill(0);
    for(let j = 0; j < window; j++) {
      chars[s.charCodeAt(i + j) - 97]++;
      if(chars[s.charCodeAt(i + j) - 97] > 1) {
         break;
      }
      }
      if(allUniqueChar()){
        result++;
    }
  }
  return result;
};

const str1 = "xyzzaz";
const str2 = "aababcabc"
console.assert(countGoodSubstrings(str1) === 1, `expects 1 | Got ${countGoodSubstrings(str1)}`);
console.assert(countGoodSubstrings(str2) === 4, `expects 4 | Got ${countGoodSubstrings(str2)}`);

export {};
