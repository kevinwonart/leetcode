//https://leetcode.com/problems/valid-parentheses/description/

/* 20. Valid Parentheses
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
   

  Example 1:

  Input: s = "()"
  Output: true
  Example 2:

  Input: s = "()[]{}"
  Output: true
  Example 3:

  Input: s = "(]"
  Output: false
   

  Constraints:

  1 <= s.length <= 104
  s consists of parentheses only '()[]{}'.
 */
function isValid(s: string): boolean {
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] == '(' && s[i] == ')')
      stack.pop()
    else if (stack.length > 0 && stack[stack.length - 1] == '{' && s[i] == '}')
      stack.pop()
    else if (stack.length > 0 && stack[stack.length - 1] == '[' && s[i] == ']')
      stack.pop()
    else
      stack.push(s[i])
  }
  return stack.length === 0
}

/* Summary:
  check each char at index of s. if the current stack is greater than 1 check if the previous index is an open 
  parentheses. also check if the current index is the closed version of the open one from the previous index.
  Pop. 
  other wise push the current index.

  after the going through each index return if stack.length === 0. 
  stack should be empty if the condition is true, other wise false
 
 */

