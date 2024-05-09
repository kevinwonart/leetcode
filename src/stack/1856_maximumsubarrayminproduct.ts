//https://leetcode.com/problems/maximum-subarray-min-product/description/

/* 1856. Maximum Subarray Min-Product
  The min-product of an array is equal to the minimum value in the array multiplied by the array's sum.

  For example, the array [3,2,5] (minimum value is 2) has a min-product of 2 * (3+2+5) = 2 * 10 = 20.
  Given an array of integers nums, return the maximum min-product of any non-empty subarray of nums. Since the answer may be large, return it modulo 109 + 7.

  Note that the min-product should be maximized before performing the modulo operation. Testcases are generated such that the maximum min-product without modulo will fit in a 64-bit signed integer.

  A subarray is a contiguous part of an array.

   

  Example 1:

  Input: nums = [1,2,3,2]
  Output: 14
  Explanation: The maximum min-product is achieved with the subarray [2,3,2] (minimum value is 2).
  2 * (2+3+2) = 2 * 7 = 14.
  Example 2:

  Input: nums = [2,3,3,1,2]
  Output: 18
  Explanation: The maximum min-product is achieved with the subarray [3,3] (minimum value is 3).
  3 * (3+3) = 3 * 6 = 18.
  Example 3:

  Input: nums = [3,1,5,6,4,2]
  Output: 60
  Explanation: The maximum min-product is achieved with the subarray [5,6,4] (minimum value is 4).
  4 * (5+6+4) = 4 * 15 = 60.
   

  Constraints:

  1 <= nums.length <= 105
  1 <= nums[i] <= 107

 */
/*
function maxSumMinProduct(nums: number[]): number {
    const prefixSum = Array(nums.length + 1)
    prefixSum[0] = 0
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = nums[i - 1] + prefixSum[i - 1]
    }
    const peek = (stack: number[]) => {
        return stack[stack.length - 1]
    }

    nums.push(0)
    let res = 0n
    const stack = [] // non-decreasing stack 
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[peek(stack)] > nums[i]) {
            const topIndex = stack.pop()
            // The stack stores the index instead of actual number,
            // because we can always use index to access the number

            // Since the stack stores number (that the index refers to) 
            // in a non-decreasing manner, when 'topIndex' is poped out, 
            // all the remaining number in the stack are smaller than
            // nums[topIndex], and the stack's peak is the FIRST
            // number that is smaller than nums[topIndex]
            // from right to left. 

            // Assuming stack's peak is 'j', nums[topIndex] would be 
            // the smallest number among nums[j+1...i-1].
            // To calculate the min-product, use prefixSum array to 
            // get the prefix sum of nums[j+1...i-1]

            // Note that if stack is empty, it means there're no 
            // numbers smaller than nums[topIndex], and so 
            // nums[j+1...i-1] becomes nums[...i-1]

            const subSum = prefixSum[i] - prefixSum[stack.length ? peek(stack) + 1 : 0]
            const bi = BigInt(subSum) * BigInt(nums[topIndex])
            if (bi > res) {
                res = bi
            }
        }
        stack.push(i)
    }
    return Number(res % (1000000007n))
*/
/* Solution from chatGPT: does not work for edge case, didnt' figure it out but logic
 * is more reeadable
function maxSumMinProduct(nums: number[]): number {
    const MOD = 1e9 + 7;
    const n = nums.length;
    let prefixSum = new Array(n + 1).fill(0);

    // Compute prefix sums
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let maxProduct = 0;
    let stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
            let h = nums[stack.pop()!];
            let start = stack.length > 0 ? stack[stack.length - 1] + 1 : 0;
            let sum = prefixSum[i] - prefixSum[start];
            maxProduct = Math.max(maxProduct, h * sum);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        let h = nums[stack.pop()!];
        let start = stack.length > 0 ? stack[stack.length - 1] + 1 : 0;
        let sum = prefixSum[n] - prefixSum[start];
        maxProduct = Math.max(maxProduct, h * sum);
    }

    return maxProduct % MOD;
}

// Example usage:
console.log(maxSumMinProduct([1, 2, 3, 2])); // Output: 14
console.log(maxSumMinProduct([2, 3, 3, 1, 2])); // Output: 18
console.log(maxSumMinProduct([3, 1, 5, 6, 4, 2])); // Output: 60
*/

/* Summary:
 * 1. create prefixSum array to find sum of working subarray.
 * 2. iterate through size of array length and use a stack to find min in subarray
 * 3. get max of the value
 * 4. get module answer because the result is is very large
 */


export { }