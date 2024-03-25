//https://leetcode.com/problems/sliding-window-maximum/description/?envType=list&envId=xlep8di5
/* 239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/
function maxSlidingWindow(nums: number[], k: number): number[] {
  let largest = nums[0];
  let largest2 = nums[0];
  let answer: number[] = [];
  let temp: number[] = []; 
  for (let i = 1; i < k; i++) {
    if(nums[i] > largest){
      largest = nums[i];
    }
    if(nums[i] > largest2 && nums[i] < largest){
      largest2 = nums[i];
    }
  }
  answer.push(largest);

  let left = 0;
  for (let i = k; i < nums.length; i++) {
    if(nums[left] === largest){
      if(nums[i] > largest2) {
        answer.push(nums[i]);
        largest = nums[i];
        left++;
      }
      if(nums[i] < largest2){
        largest = largest2;
      }
    }
    if(nums[left] === largest2){
      
    }
  }
  return answer;
};

/*solution by ameneeti
 * function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;

  // store temp max of each subArray
  const maxTemp: number[] = [];

  // store the answer
  const ans: number[] = [];

  // use two pointers
  let i = 0;
  let j = 0;

  while (j < n) {
    // **perform calculations
    // 1. check is maxTemp size is 0
    // YES - push the element nums[j]
    let maxLen = maxTemp.length;
    if (maxLen === 0) maxTemp.push(nums[j]);
    // 2. check maxTemp size > 0 , if YES
    // means max value is present,
    // so check whether maxTemp top element < nums[j]
    // then, pop all the elements present in maxTemp which is
    // less than nums[j], because all smaller elements of nums[j]
    // can't be useful as they can never become max element
    else {
      while (maxLen > 0 && maxTemp[maxLen - 1] < nums[j]) {
        maxTemp.pop();
        maxLen = maxTemp.length;
      }
      // 3. if NO, means nums[j] have a chance to be max in future
      // so, push the element nums[j]
      maxTemp.push(nums[j]);
    }

    // **calaculate windowSize
    const windowSize = j - i + 1;

    // ** windowSize < k increment j++
    if (windowSize < k) j++;
    // ** windowsSize === k
    else if (windowSize === k) {
      //**answer calculation
      // push the 0th index element of maxTemp in ans
      // because that will be the max element of the windowSize
      ans.push(maxTemp[0]);

      // **slide the window and maintain the size
      // before sliding check whether 0th index element of maxTemp
      // and i value is same or not
      // if same then only shift from front otherwise don't

      if (maxTemp[0] === nums[i]) {
        maxTemp.shift();
      }

      i++;
      j++;
    }
  }

  return ans;
};
*/

function arraysAreEqual<T>(array1: T[], array2: T[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}
 
const arr1: number[] = [1,3,-1,-3,5,3,6,7 ];
const k1 = 3;
const answer1: number[] = [3,3,5,5,6,7];
const arr2: number[] = [1];
const k2 = 1;
const answer2: number[] = [1];

console.assert(arraysAreEqual(maxSlidingWindow(arr1, k1), answer1), `Expects ${answer1} | Returned ${maxSlidingWindow(arr1,k1)} | Arr: ${arr1} | k = ${k1}`);
console.assert(arraysAreEqual(maxSlidingWindow(arr2, k2), answer2), `Expects ${answer2} | Returned ${maxSlidingWindow(arr2,k2)} | Arr: ${arr2} | k = ${k2}`);
export {};

//you need a queue to track max. then manage queue as you slide across the nums array my solution isn't working. coudlnt
//solve in 90 minutes...rip
