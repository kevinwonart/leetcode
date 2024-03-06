//https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/description/?envType=list&envId=xlep8di5
/*
828. Count Unique Characters of All Substrings of a Given String

Let's define a function countUniqueChars(s) that returns the number of unique characters in s.

For example, calling countUniqueChars(s) if s = "LEETCODE" then "L", "T", "C", "O", "D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.
Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.

Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

 

Example 1:

Input: s = "ABC"
Output: 10
Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
Example 2:

Input: s = "ABA"
Output: 8
Explanation: The same as example 1, except countUniqueChars("ABA") = 1.
Example 3:

Input: s = "LEETCODE"
Output: 92
 

Constraints:

1 <= s.length <= 105
s consists of uppercase English letters only.
*/

/* Solution by denshell
function uniqueLetterString(s: string): number {
  const lastIndexes: number[] = new Array(26).fill(-1);
  const contributionsPalette: number[] = new Array(26).fill(0);
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    // 65 is character code of 'A'
    const characterIndex = s.charCodeAt(i) - 65;

    contributionsPalette[characterIndex] = i - lastIndexes[characterIndex];

    for (let j = 0; j < 26; j++) {
      total += contributionsPalette[j];
    }
    
    lastIndexes[characterIndex] = i;
  }

  return total;
};
*/
//My notes
/*
This approach by denshell uses two arrays of the size of possible characters of a string 26(for 26 characters of the alphabet)
one is filled with -1 and the other 0. The outer loop checks each run count is size of the string then gets the charIndex(-65
this time instead of 97 since the problem stipulates all UPPERCASE. the outer array is used to count if the character is unique to the
substring and adds index minus -1 so adding one. the second loop inner loop gets a count of all the count in the seccond array that tracks
unique characters. before the next call of the outer loop(or at the end of the outer loop) the unique-character-array is given the value of
the index of the outer loop. this way when a repeat character in the substring it will count against istelf at the counting/total array.

This approach uses two arrays. One for counting the total and the other for getting the last index of the substring. the lastIndex array
will add to the index if the character is unique. if the character is not unqiue it will not add to the contributionArray because it 
will be marked as not unique when it subtracts itself during the contributinsPallette array.

