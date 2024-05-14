//https://leetcode.com/problems/remove-duplicate-letters/description/

/* 316. Remove Duplicate Letters
  Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
  the smallest in lexicographical order among all possible results.

  Example 1:

  Input: s = "bcabc"
  Output: "abc"
  Example 2:

  Input: s = "cbacdcbc"
  Output: "acdb"
   

  Constraints:

  1 <= s.length <= 104
  s consists of lowercase English letters.
 */

/* https://leetcode.com/problems/remove-duplicate-letters/solutions/4173111/typescript-monotonic-stack-simple-solution/
function removeDuplicateLetters(s: string): string {
    const stack = [];
    stack.push(s[0]);

    for(let i = 1; i < s.length; i++){
        if(stack.includes(s[i])) continue;

        if(stack[stack.length - 1] < s[i]) {
            stack.push(s[i]);
        } else {
            while(stack.length && s[i] < stack[stack.length - 1] && s.lastIndexOf(stack[stack.length - 1]) > i) {
                stack.pop()
            }
            stack.push(s[i]);
        }
    }

    return stack.join("");
};
*/

/* Summary:
  1. use stack
  2. continue if s[i] is included
  3. push when last stack element is less than current s[i]
  4. if stack is not empty and current s[i] of iteration is less than last element of the stack and if there isn't another recurrence
  5. s.lastIndexOf(stack[stack.length - 1] > i) checks if there is another occurence of last stack element in s. this lets it so you pop
     the stack before moving on but also ensuring it exists later in the string. specifically the last occurence
  6. then push s[i]
  7. return stack.join("") after the algo is run
 */
export { }
