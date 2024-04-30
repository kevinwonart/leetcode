//https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/

/*921. Minimum Add to Make Parentheses Valid

  A parentheses string is valid if and only if:

  It is the empty string,
  It can be written as AB (A concatenated with B), where A and B are valid strings, or
  It can be written as (A), where A is a valid string.
  You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

  For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
  Return the minimum number of moves required to make s valid.


  Example 1:

Input: s = "())"
Output: 1
  Example 2:

Input: s = "((("
Output: 3


Constraints:

1 <= s.length <= 1000
s[i] is either '(' or ')'.

*/

/*
function minAddToMakeValid(s: string): number {
const stack: string[] = [];
        const ob = "(";
        const cb = ")";
        for (let i = 0; i < s.length; i++) {
            if (stack.length !== 0 && stack[stack.length - 1] === ob && s[i] === cb) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        return stack.length;
    };
*/


/* Summary:
 * 1. Create stack to track () concatentated pairs
 * 2. iterate through string check if stack is not empty and previous item is an open bracket and current one is a closed one, then pop the stack
 * 3. push the current index of string into stack
 * 4. return stack size to get result
 * 5. Notice in the conditional of the iteration taht it checks the stack(len-1) and then string(i)
 *    this makes it so that you only need to pop once.
 */

