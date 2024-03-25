//https://leetcode.com/problems/backspace-string-compare/description/?envType=list&envId=xlem03mm
/*
/844. Backspace String Compare
//Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

/* Stack Solution by vuongphongdev1996
function backspaceCompare(s: string, t: string): boolean {
    return realText(s) === realText(t);
};

function realText(str: string) : string {
    const result = [];

    for (const ch of str) {
        if (ch !== '#') result.push(ch);
        else if (result.length > 0) result.pop();
    }

    return result.join('');
}
*/

/* solution with 2 pointers by austinrand
 * 
function backspaceCompare(s: string, t: string): boolean {
    let sIndex = s.length - 1;
    let tIndex = t.length - 1;
    
    // Start from end of strings and compare the surviving characters (those that don't get backspaced)
    while (sIndex >= 0 || tIndex >= 0) {
        
        // Go to index of next surviving character in s
        if (s.charAt(sIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                sIndex--;
                if (s.charAt(sIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // Go to index of next surviving character in t
        if (t.charAt(tIndex) === '#') {
            let charactersToSkip = 1;
            while (charactersToSkip >= 0) {
                tIndex--;
                if (t.charAt(tIndex) === '#')
                    charactersToSkip++;
                else
                    charactersToSkip--;
            }
        }
        
        // If the surviving characters do not match, the strings are different
        if (s.charAt(sIndex) !== t.charAt(tIndex)) return false;
        
        sIndex--;
        tIndex--;
    }
    return true;
};
 */
/* Write up
 * The first solution is the most elegant to me. It creates a function to modify the string
 * it takes as an arg. uses a stack in the string goes from the first index and pushes it
 * in the new stack. if it the character is ia '#' it will backtrack by popping the result[]
 * I like this solution better. no back tracking. no two-pointers
 *
 * In the second solution it has a while loop with two condition inside for each string to 
 * evaluate. it create an index that starts at the top of the string or the str.length - 1.
 * the outermost loop checks if either are at larger than or equal to 0. this determines the
 * length of the strings and if one of the index reaches < 0 before the other it means the
 * strings can't be the same and ends the loop because their size is different. it will also
 * end if they both end together at the same time.
 * it uses a counter that starts at 1 and runs a loop until that counter hits 0. it creates
 * subtracts that counter by one at the start of the loop. if the index is '#' it will add 
 * to the counter by one and repeat the loop until it hits a non '#'. it does this for both
 * strings getting the furthest right char that isnt a '#' then it will check the ends of 
 * both of these character are the same. if they are not identical it will break the loop
 * and return false. then it will -- on each of the indexes and start looking for the next
 * character to check again to reach the first character. if they both reach the first char
 * and are equal it returns true.
*/
