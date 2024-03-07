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
This approach uses two arrays. One for counting the total and the other for getting the last index of the substring. the lastIndex array
will add to the index if the character is unique. if the character is not unqiue it will not add to the contributionArray because it 
will be marked as not unique when it subtracts itself during the contributinsPallette array. Making each element in lastIndex -1 makes 
it so that when a corresponding letter/index of the character of the string that is being tested. The outer loop gets the charIndex
then it plugs a number into the a contribution, or count, array. it gets i(index of the loop) minus the value at the charIndex of lastIndex.
this adds one and marks the value 1 at the first index. the second/inside loop through each element in the array
and adds the total. This counts every uniqueChar count of each possible substring from that index of with total += countAArray[j]
then the lastIndex at the characterIndex is set to the value of the index of the outer loop so that when a character repeats later in the
string it will set the counting array to 0 with i - the index of where it was last repeated before.
**/
