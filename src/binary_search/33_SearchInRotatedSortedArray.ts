//https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=list&envId=xleplgq3

/* 33. Search in Rotated Sorted Array
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
/* solution by user 8413A
function search(nums: number[], target: number): number {
 let low = 0, high = nums.length - 1;

 while(low <= high) {
   const mid = Math.floor((low + high) / 2);
   const num = nums[mid];

   if(num === target) return mid;

   // left side is sorted 
   if(nums[low] <= num) {
     // check if the target is within the range
     if(nums[low] <= target && target <= num) {
        high = mid - 1; 
     }else {
         low = mid + 1;
     } 
   } else {
     // right side is sorted

     // check if the target is within the range
     if(num <= target && target <= nums[high]) {
         low = mid + 1;
     }else {
         high = mid - 1;
     }
   }  
 } 

 return -1;
};
*/
/*solution by user8413A
 *
 * function search(nums: number[], target: number): number {
 let low = 0, high = nums.length - 1;

 while(low <= high) {
   const mid = Math.floor((low + high) / 2);
   const num = nums[mid];

   if(num === target) return mid;

   // left side is sorted 
   if(nums[low] <= num) {
     // check if the target is within the range
     if(nums[low] <= target && target <= num) {
        high = mid - 1; 
     }else {
         low = mid + 1;
     } 
   } else {
     // right side is sorted

     // check if the target is within the range
     if(num <= target && target <= nums[high]) {
         low = mid + 1;
     }else {
         high = mid - 1;
     }
   }  
 } 

 return -1;
};
 *
*/


/* summary:
 * set low(0) and high(nums.length-1)
 * start while loop
 *   -set mid = (low + high)/2
 *   -if mid value = target return it
 *   -beginning of nested if(check left subarray) ie nums[low] <= num[mid]
 *     -if this is true need to check to do binary search on left or right of mid
 *       -target >= nums[low] and target <= nums[mid] then -> high = mid - 1
 *       -else low = mid + 1
 *   -else of the outer if
 *     -check if(target >= nums[mid] && target <= nums[high])
 *       -if true low = mid + 1
 *       -else high = mid - 1
 * return -1 if the while goes to the end without a single return
*/
