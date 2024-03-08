//https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
/***
438. Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

***/

/* My solution */

function findAnagrams(s: string, p: string): number[] {
  let answer: number[] = []; 
  for(let i = 0; i <= s.length - p.length; i++) {
    let subString = s.substring(i, i + p.length);
    if(isAnagram(subString, p)) {
      answer.push(i);
    }
  }
  return answer;
};

function isAnagram(s1: string, s2: string): boolean {
  if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
    return true;
  }
  return false;
}
//My solution time limit exceeded

function arraysAreEqualIgnoreOrder<T>(array1: T[], array2: T[]): boolean {
  // Check if both inputs are arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  
  // Check if the arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }
  
  // Create shallow copies and sort them
  const sortedArray1 = [...array1].sort();
  const sortedArray2 = [...array2].sort();
  
  // Compare sorted arrays element by element
  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }
  
  return true;
}

let s1 = "cbaebabacd";
let p1 = "abc"
let s2 = "abab";
let p2 = "ab"

console.assert(arraysAreEqualIgnoreOrder(findAnagrams(s1,p1), [0,6]), `Expects [0,6] | Got ${JSON.stringify(findAnagrams(s1,p1))}`);
console.assert(arraysAreEqualIgnoreOrder(findAnagrams(s2,p2), [0,1,2]), `Expects [0,1,2]  | Got ${JSON.stringify(findAnagrams(s2,p2))}`);

//Top voted solution via JinZihang
function topfindAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return [];
    
    // Initialise maps
    let pMap = new Map();
    let examineMap = new Map();
    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
        examineMap.set(s[i], examineMap.has(s[i]) ? examineMap.get(s[i]) + 1 : 1);
    }
    
    const res: number[] = [];
    let windowEnd = p.length;
    // Check whether two maps are same
    const equal = () => {
        for (let [char, count] of examineMap) if (pMap.get(char) !== count) return false;
        return true;
    };
    while (windowEnd < s.length) {
        if (equal()) res.push(windowEnd - p.length);
        
        // Slide the window to the right
        const aquireChar = s.charAt(windowEnd);
        examineMap.set(aquireChar, examineMap.has(aquireChar) ? examineMap.get(aquireChar) + 1 : 1);
        
        const releaseChar = s.charAt(windowEnd - p.length);
        if (examineMap.get(releaseChar) === 1) examineMap.delete(releaseChar);
        else examineMap.set(releaseChar, examineMap.get(releaseChar) - 1);
        
        windowEnd++;
    }
    if (equal()) res.push(windowEnd - p.length);
    
    return res;
};

//this solution uses a mapping mechanism through a window that goes through a string.
//it makes a map of the shorter string and then a map of the first substring of the same length
//of the other string to check. it creates a { char: charcount } key: value within the string
//
//the window is checked at the beggining of the loop and if the maps are equal the index is 
//pushed to the result
//the window that is being examined releases a character in the map count and then adds
//the next one to the map at the end of the loop.
//i didnt know to use a map instead i used some javascript builtin callbacks that come with strings
//to check for equality. my solution didn't pass the runtime limit for leetcodes' submission
