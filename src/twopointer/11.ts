//https://leetcode.com/problems/container-with-most-water/description/?envType=list&envId=xlem03mm

/*11. Container With Most Water
 *
Solution by Sameeneeti
function maxArea(height: number[]): number {

const n = height.length
// use two pointers
// height: to track the minimum height(length) of the container
// because we don't have to form slant
// so take minimum height and maximum right 
// it will form rectangle not slant
// right: for right x-axis of container 

// left : first element assuming min height
// right : max right
// ans to store max area(max amount of water in a container)
let left = 0
let right = n-1
let ans = Number.MIN_SAFE_INTEGER

// height works on value
// right works on index

while(left < right){
  // calculate min height 
  // check whether left pointer or right pointer value
  let area=0

  // if left pointer value is less than right increase value 
  // move towards right
  if(height[left] < height[right]){
    area = height[left]*(right-left)
    left++
  }

  // if right pointer value is less then decrease it's value
  // move towards left
  else{
    area = height[right]*(right-left)
    right--
  }

  // store the max area
  ans = Math.max(ans,area)
  }

  return ans
}
*/

/* Write up
This solution uses two pointers left at beginning and right at end of height array. have area tracker at
start of the while loop. if left pointer is lower than right pointer get the area by multiplying the height
of the left index value multiply by the (right-left) that is effectively the length of the container
if the right is less then you multiply right index value multiply the length(again, right-left) this time you 
move right index. you go through each of the area via this while statement(left < right) and go through the
entire area and keep track of the largest area via ans = Math.max(ans,area) at the end of the loop you return
the ans var

*/
