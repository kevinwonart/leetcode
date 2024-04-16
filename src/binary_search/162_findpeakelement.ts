//https://leetcode.com/problems/find-peak-element/description/

/* 162. Find Peak Element
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
nums[i] != nums[i + 1] for all valid i.
*/

/* solution by Soroko99(linear approach not correct but works if time limit is not enforced)
function findPeakElement(nums: number[]): number {
    let peak = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > peak){
            peak = nums[i]
        }
    }
    return nums.indexOf(peak)
};

*/

/*
 * Summary: 
 * Define peak as starting value of first index of num
 * use for loop from index 1 to end of nums; incr by 1
 * if the value at index is higher than the current peak set
 * the new peak at the index value
 *
 * this is a linear search however
*/

/*solution by sntghrrr
function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // The peak is in the left half
            right = mid;
        } else {
            // The peak is in the right half
            left = mid + 1;
        }
    }

    return left;
}
*/
/* Summary:
 * define left and right by start and end points of nums array
 * use while loop and (left < right)
   * inside loop set mid as (left + right) / 2
   * the condition is a bit diff from traditional binary search
   * check if the mid index is larger than one position over to the right
   * if mid index is higher set right to mid because the peak is on the left side
   * else set left to mid + 1 peak is on the right side
   *continue until exit and the peak will be found
*
* this solution is the correct answer, but in case I wanted to get the highest peak
* i would have to use the linear approach
*/
