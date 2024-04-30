//https://leetcode.com/problems/merge-intervals/description/

/* 56. Merge Intervals
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

   

  Example 1:

  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
  Example 2:

  Input: intervals = [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
   

  Constraints:

  1 <= intervals.length <= 104
  intervals[i].length == 2
  0 <= starti <= endi <= 104
 */

/* solution by SumitPokhyiryal
function merge(intervals: number[][]): number[][] {
    intervals.sort((a , b) => a[0] - b[0] )
    let res = [] , n = intervals.length , i = 0;
    while( i < n ){
        let tmp = [intervals[i][0]] , max = intervals[i][1];
        i++;
        while(i < n && max >= intervals[i][0] ){
            max = Math.max( intervals[i][1] , max )
            i++;
        }
        tmp.push(max);
        res.push(tmp);
    }
    return res;
};

*/
/* Summary:
 * this solution does not use a stack.
 * it uses a nested loop, check first intervals and second intervals and uses conditionals 
 * to merge. push max to tmp. push tmp to res.
 * return res
 * can use a stack in place of a nested loop and keep the logic similar test if the indices
 * can be merged
 */

