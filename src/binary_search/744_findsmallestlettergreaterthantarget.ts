//https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/* 744. Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

*/
/* solution by NexRX
function nextGreatestLetter(letters: string[], target: string): string {
    const n = letters.length
    // Handle edge case: target is greater than all letters
    if (target >= letters[n-1] ) return letters[0];

    const goal = target.charCodeAt(0) + 1

    let l = 0, r = n - 1, m: number;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        const code = letters[m].charCodeAt(0);
        if (code === goal) return letters[m]
        else if (code > goal) r = m - 1
        else l = m + 1
    }

    // Otherwise, return the letter found immediately greater than the target
    return letters[l];
};
*/
/*
 * Summary
 * Basic binary serach implementation:
 * define left and right, use a while loop to go through
 * left = 0
 * right = nums.length - 1
 * exit using l<=r
 * start with mid index (l+r)/2
 * check if target is mid, return that value if its is so.
 * check if target is lower or higher than mid index value. 
 * if its greater set low to mid + 1
 * if it's lesser set mid to high - 1. 
 */
