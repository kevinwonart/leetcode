import { arraysAreEqual } from "../util";

function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const difference = target - number;
    if(numberMap.has(difference) {
      return [numberMap.get(difference), i]
    }
    numberMap.set(number, i);
  }
}

console.log("hello");
const nums1 = [2,7,11,15];
const target1 = 9;
const nums2 = [3,2,4];
const target2 = 6;
const nums3 = [3,3];
const target3 = 6; 

console.assert(arraysAreEqual(twoSum(nums1, target1), [0,1]), `expected [0,1] | returned: ${twoSum(nums1, target1)} | nums2 = ${nums1} | target1 = ${target1}`);
console.assert(arraysAreEqual(twoSum(nums2, target2), [1,2]), `expected [1,2] | returned: ${twoSum(nums2, target2)} | nums2 = ${nums2} | target2 = ${target2}`);
console.assert(arraysAreEqual(twoSum(nums3, target3), [0,1]), `expected [0,1] | returned:  ${twoSum(nums3, target3)} | nums3 = ${nums3} | target3 = ${target3}`);

export {};

/*explanation:
The answer runs through the array with a map temp. it checks the current value of the for loop and then searches for the difference in the array. if it exists then 
it returns the array of the indexes that make the sum of the target. if it doesnt it sets the current point of the map into the map so it can check back for the difference
retrospectively.
*/

