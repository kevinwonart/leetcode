// https://leetcode.com/problems/trapping-rain-water/description/?envType=list&envId=xlem03mm
/*42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining. 
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/      
function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let area = 0;
  while(left <= right){
    if (height[left] < height[right]) {
      if (height[left] > leftMax){
        leftMax = height[left]
      } else {
        area += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right]
      } else {
        area += rightMax - height[right];
      }
      right--;
    }
  }
  return area;
}
const height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
const output1 = 6;
const height2 = [4,2,0,3,2,5];
const output2 = 9;

console.assert(trap(height1)=== output1, `expect ${output1} | returned ${trap(height1)} | height: ${height1}`);
console.assert(trap(height2)=== output2, `expect ${output2} | returned ${trap(height2)} | height: ${height2}`);

export {};

/*explanation:
the two pointer solution runs through the from the left then adds to the area if the leftest wall is larger than the current right pointer.
it adds to the area by subtracting the highest wall point on the left side and the current left pointer if the wall is at index is smaller than
the highest wall point. if it's larger set the leftest wall to the new height. keep doing this until height[r] < height[l].
apply the same logic and run from right to left. add to the area by keeping track of the highest wall from the right and add the area by subtracting
highest right wall from height of right index. it will stop at the middle when right and left pointer meet at the highest point(outer if).
*/

