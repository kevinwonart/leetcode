/* https://leetcode.com/problems/longest-repeating-character-replacement/description/?envType=list&envId=xlep8di5
424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 
 *
*/

function characterReplacement(s: string, k: number): number {
  const isPassingAnswer = (subSet: Set<string>): boolean => {
    if(subSet.size <= k + 1) {
      return true;
    }
    return false;
  }
  let subString = [...s];
  for(let i = 0; i < s.length; i++) {
    let subString = [...s];

    let subSet= new Set(subString);
    if(isPassingAnswer(subSet)){
      return s.length - i;
    }
    subString = subString.pop();
  }
  return 0;
};

const str1 = "ABAB";
const k1 = 2;
const str2 = "AABABBA";
const k2 = 1;
console.assert(characterReplacement(str1, k1) === 4, `Expect 4 | Got ${characterReplacement(str1, k1)} | str1: ${str1} | k1 ${k1}`);
console.assert(characterReplacement(str2, k2) === 4, `Expect 4 | Got ${characterReplacement(str2, k2)} | str2: ${str2} | k2 ${k2}`);

export {};

//solution is unfinished
