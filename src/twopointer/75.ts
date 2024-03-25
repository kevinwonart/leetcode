//https://leetcode.com/problems/sort-colors/description/?envType=list&envId=xlem03mm
//
//75. Sort Colors
/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

/* Solution from briginas
/**
 Do not return anything, modify nums in-place instead.
function sortColors(nums: number[]): void {
    let one = 0

    let l = 0, r = nums.length - 1
    while (l <= r) {
        if (nums[l] === 0) {
            l++
            continue
        } 
        
        if (nums[r] === 0) {
            const temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp

            l++
        }

        if (nums[r] === 1) {
            one++
        }

        r--
    }

    for (let i = l; i < nums.length; i++) {
        nums[i] = one > 0 ? 1 : 2
        one--
    }
};
*/

/* Writeup:
this problem sorts the array by making a "one" variable that counts ones at the beginning and a l at 0 and r at the last index of the input Array.
It starts a while loop at the beginning. it starts with l and if it's a "0" it continues and moves the l one element to the right. then it checks the
r. if that's a 0 it swaps nums[l] to a 0. makes nums[l] to a 0. then makes l shift one value up. it checks if nums is r and then adds the one counter
by one. at the end of these if the r counter goes down one. this effectively counts all the 0 and ones because the 0s are checked at both l and r. 
the for loop starts at l which is the total amount of 0's found at this point. then it places the number of 1's into the loop based on the one's varaible
count. then fills the rest with 2's.
*/
