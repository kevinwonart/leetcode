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
  let window = 0;
  let frequencyCount = 0;
  let left = 0;
  const hashMap: { [key:string]: number } = {};
  for (let right = 0; right < s.length; right++) {
    hashMap[s[right]] = (hashMap[s[right]] || 0) + 1;

    frequencyCount = Math.max(frequencyCount, hashMap[s[right]])
    if (frequencyCount + k < right - left + 1 ) {
      hashMap[s[left]]--;
      left++;
    }
    window = Math.max(window, right - left + 1);
  }

  return window;
};

/* Top Solution
const characterReplacement = (s: string, k: number): number => {
  const hashMap: { [key: string]: number } = {}
  let longest: number = 0
  let maxFreq: number = 0
  let leftPointer: number = 0

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Increment the frequency count by 1 upon encountering a character
    hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) + 1

    // Maximum frequency of any character encountered so far in the current window.
    maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]])

    // Move the window from the left until reaching `k` replacements
    if (maxFreq + k < rightPointer - leftPointer + 1) {
      hashMap[s[leftPointer]]--
      leftPointer++
    }

    // Calculate the longest repeating character
    longest = Math.max(longest, rightPointer - leftPointer + 1)
  }

  return longest
}
*/

const str1 = "ABAB";
const k1 = 2;
const str2 = "AABABBA";
const k2 = 1;
console.assert(characterReplacement(str1, k1) === 4, `Expect 4 | Got ${characterReplacement(str1, k1)} | str1: ${str1} | k1 ${k1}`);
console.assert(characterReplacement(str2, k2) === 4, `Expect 4 | Got ${characterReplacement(str2, k2)} | str2: ${str2} | k2 ${k2}`);

/*
const hashMap: { [key: string]: number } = {}
let arr: string[] = ["a", "b", "c", "c", "b", "a"];
hashMap[arr[0]] = (hashMap[arr[0]] || 0 ) + 1;
hashMap[arr[0]] = (hashMap[arr[0]] || 0 ) + 1;
hashMap[arr[1]] = (hashMap[arr[1]] || 0 ) + 1;
console.log("here");
console.log(hashMap);
*/


export {};

//notes: i copied the solution. my first try at using sets doesnt work because it will then manipulate the data. if there's a repeat
//sets are blind to a repeat so if you slide the window it will erase the data. not integrous.
