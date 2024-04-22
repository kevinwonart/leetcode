import { arrays2DAreEqualPermutation } from "../util";

// https://leetcode.com/problems/search-a-2d-matrix/description/?envType=list&envId=xleplgq3

/* 74. Search a 2D Matrix
You are given an m x n integer matrix matrix with the following two properties:
 
Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
 
You must write a solution in O(log(m * n)) time complexity.
Example 1:
 
 
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:
 
 
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 
 
Constraints:
 
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target)
      return binarySearch(matrix[i], target)
  }
  return false
}

function binarySearch(arr: number[], target: number): boolean {
  let start: number = 0
  let end: number = arr.length

  while (start <= end) {
    const mid: number = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return true
    } else if (arr[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return false
}

/* Summary:
 *
 * first find which array within the matrix the target might be in O(m)
 * then apply binary search to that array O(log n)
 * O(m + log n)
 */

const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target1 = 3
const res1 = true
const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target2 = 13
const res2 = false

console.assert(searchMatrix(matrix1, target1) === res1, `expected ${res1} |input matrix ${JSON.stringify(matrix1)} |  target: ${target1}`);
console.assert(searchMatrix(matrix2, target2) === res2, `expected ${res2} |input matrix ${JSON.stringify(matrix2)} |  target: ${target2}`);

export { }
