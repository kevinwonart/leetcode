//https://leetcode.com/problems/maximum-average-subarray-i/description/
/*--643

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

*/
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for(let i = 0; i < k; i++) {
    sum + nums[i];
  }
  let answer = sum;
  let newSum: number = sum;
  for(let j = k; j < nums.length; j++) {
    newSum += nums[j];
    newSum -= nums[j-k];
    console.log(newSum);
    if(newSum > answer) {
      answer = newSum;
    }
  }
  return answer/k;
}


function topSolution(nums: number[], k: number): number {
    let l = 0;
    let r = l + k - 1;
    let sum = 0;

    for(let j=0; j < k; j++) {
        sum += nums[j];
    }

    let max = sum / k;

    while (r < nums.length - 1) {
        // Remove the leftmost element from the sum
        sum -= nums[l];
        // Add the next element (rightmost) to the sum
        sum += nums[r + 1];
        
        const result = (sum / k)
        if(result > max) max = result;

        l++;
        r++;
    }
    
    return max;
};
//sliding window approach. performance should be similar O(n) and difference is negligble. sliding window is supposedly easier to read as it maintains l and r pointers


function findMaxAverage(nums: number[], k: number, sum = 0, max = 0): number {
  for ( let i = 0; i < k; i++ ) {
    sum += nums[i]
  }
  max = sum / k
  for ( let i = k; i < nums.length; i++ ) {
    sum += nums[i] - nums[i - k]
    max = Math.max(max, sum / k)
  }
  return max
};
//top solution
