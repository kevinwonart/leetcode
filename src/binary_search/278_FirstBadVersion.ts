//https://leetcode.com/problems/first-bad-version/description/

/* 278. First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

Constraints:

1 <= bad <= n <= 231 - 1
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let left = 0
    let right = n
    while (left <= right) {
      let mid = Math.floor((right + left) / 2)
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        return mid
      }
      if (!isBadVersion(mid)) {
        left = mid + 1
      }
      if (isBadVersion(mid) && isBadVersion(mid - 1)) {
        right = mid - 1
      }
    }
  }
}
/* Summary:
 * This is a basic binary search solution but the conditional is to check one position before
 * the badVersion encounter so that if that the prior version is good it indicates that that 
 * is the first bad version.
 *
 * no test because the isBadVersion is defined inside the leetcode code sandbox API
 */

