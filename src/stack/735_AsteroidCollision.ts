import { arraysAreEqual } from "../util"
// https://leetcode.com/problems/asteroid-collision/description/

/*735. Asteroid Collision
  We are given an array asteroids of integers representing asteroids in a row.

  For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

  Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

   

  Example 1:

  Input: asteroids = [5,10,-5]
  Output: [5,10]
  Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
  Example 2:

  Input: asteroids = [8,-8]
  Output: []
  Explanation: The 8 and -8 collide exploding each other.
  Example 3:

  Input: asteroids = [10,2,-5]
  Output: [10]
  Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
   

  Constraints:

  2 <= asteroids.length <= 104
  -1000 <= asteroids[i] <= 1000
  asteroids[i] != 0
*/
//
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []

  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i]
    while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
      const topStackAsteroid = stack.pop()
      if ((asteroid + topStackAsteroid!) === 0) {
        asteroid = 0
      }
      else asteroid = topStackAsteroid! + asteroid > 0 ? topStackAsteroid! : asteroid
    }
    if (asteroid) {
      stack.push(asteroid)
    }
  }
  return stack
}
const input1 = [5, 10, -5]
const output1 = [5, 10]
const input2 = [8, -8]
const output2 = []!
const input3 = [10, 2, -5]
const output3 = [10]
console.assert(arraysAreEqual(asteroidCollision(input1), output1), `expected: ${JSON.stringify(output1)} | received: ${JSON.stringify(asteroidCollision(input1))} | input: ${JSON.stringify(input1)}`)
console.assert(arraysAreEqual(asteroidCollision(input2), output2), `expected: ${JSON.stringify(output2)} | received: ${JSON.stringify(asteroidCollision(input2))} | input: ${JSON.stringify(input2)}`)
console.assert(arraysAreEqual(asteroidCollision(input3), output3), `expected: ${JSON.stringify(output3)} | received: ${JSON.stringify(asteroidCollision(input3))} | input: ${JSON.stringify(input3)}`)


/* Summary:
 *
 *
 */

export { }