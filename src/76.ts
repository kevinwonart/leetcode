//https://leetcode.com/problems/minimum-window-substring/?envType=list&envId=xlep8di5
/*76. Minimum Window Substring
 *
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 
Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
*/
function minWindow(s: string, t: string): string {
  //unique char of t
  let subStrIndex: number[] = [];
  let uniqueChar = new Map();
  for(let i = 0; i < t.length; i++) {
    uniqueChar.set(t[i], 1);
  }
  console.log(uniqueChar);

  //get array index of where all unique character are located in  s
  for(let i = 0; i < s.length; i++) {
    if(uniqueChar.get(s[i])) {
      subStrIndex.push(i);
    }
  }
  console.log(subStrIndex);

  let shortest: number = Infinity;
  for(let i = uniqueChar.size; i < s.length; i++){
    if(uniqueChar.get(s[i])){
       uniqueChar.set(s[i], 
    }
  }
  let answer: string = "";
  return answer;
};

let s1= "ADOBECODEBANC"
let t1 = "ABC"
let s2 = "a"
let t2 = "a"
let s3 = "a"
let t3 = "aa"
let s4 = "abc"
let t4 = "abc"
//does Assert run twice when it passes?
console.assert(minWindow(s1, t1) === "BANC", `expects "BANC", |returned: ${minWindow(s1,t1)} | s1: ${s1}| t1: ${t1}`);
console.assert(minWindow(s2, t2) === "a", `expects "a", |returned: ${minWindow(s2,t2)} | s2: ${s2}| t2: ${t2}`);
console.assert(minWindow(s3, t3) === "", `expects "", |returned: ${minWindow(s3,t3)} | s3: ${s3}| t3: ${t3}`);
console.assert(minWindow(s4, t4) === "abc", `expects "abc", |returned: ${minWindow(s4,t4)} | s4: ${s4}| t4: ${t4}`);
export {};

//solution not written,
