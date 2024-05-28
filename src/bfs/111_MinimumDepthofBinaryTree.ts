// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/?envType=list&envId=xlepfebm

/* 111. Minimum Depth of Binary Tree
 *
 */
/**

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  let stack = [root]
  let level = 1

  while (stack.length > 0) {
    const newStack = []
    while (stack.length > 0) {
      const node = stack.pop()
      if (!(node.left || node.right)) return level
      if (node.left) newStack.push(node.left)
      if (node.right) newStack.push(node.right)
    }

    stack = newStack
    level++
  }

  return level
};

/* Summary:
 * 1. Traverse the tree in a BFS manner.
 * 2. If both left and right nodes are null return the level
 * 3. Continue traversing until condition is met
 * 4. Return level
 */
export { }
