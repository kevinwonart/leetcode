//https://leetcode.com/problems/maximum-frequency-stack/description/

/* 895. Maximum Frequency Stack
  Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

  Implement the FreqStack class:

  FreqStack() constructs an empty frequency stack.
  void push(int val) pushes an integer val onto the top of the stack.
  int pop() removes and returns the most frequent element in the stack.
  If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
   

  Example 1:

  Input
  ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
  [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
  Output
  [null, null, null, null, null, null, null, 5, 7, 5, 4]

  Explanation
  FreqStack freqStack = new FreqStack();
  freqStack.push(5); // The stack is [5]
  freqStack.push(7); // The stack is [5,7]
  freqStack.push(5); // The stack is [5,7,5]
  freqStack.push(7); // The stack is [5,7,5,7]
  freqStack.push(4); // The stack is [5,7,5,7,4]
  freqStack.push(5); // The stack is [5,7,5,7,4,5]
  freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
  freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
  freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
  freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 */

class FreqStack {
  freq: Record<number, number>;
  stacks: number[][];

  constructor() {
    this.freq = {};
    this.stacks = [[]];
  }

  push(x: number): void {
    this.freq[x] ||= 0;
    this.freq[x]++;

    const f = this.freq[x];
    this.stacks[f] ||= [];
    this.stacks[f].push(x);
    console.log(this)
  }

  pop(): number {
    console.log("works")
    const x = this.stacks.at(-1)!.pop();

    this.freq[x!]--;

    //this conditional cleansup the matrix in case there is a [] array at the end
    if (this.stacks.at(-1)!.length === 0) {
      this.stacks.pop();
    }

    console.log(this)
    return x!;
  }
}
let testStack = new FreqStack();
testStack.push(5) // FreqStack { freq: { '5': 1 }, stacks: [ [], [ 5 ] ]
testStack.push(7) // FreqStack { freq: { '5': 1, '7': 1 }, stacks: [ [], [ 5, 7 ] ] }
testStack.push(5) // FreqStack { freq: { '5': 2, '7': 1 }, stacks: [ [], [ 5, 7 ], [ 5 ] ] }
testStack.push(7) // FreqStack { freq: { '5': 2, '7': 2 }, stacks: [ [], [ 5, 7 ], [ 5, 7 ] ]
testStack.push(4) // FreqStack { freq: { '4': 1, '5': 2, '7': 2 }, stacks: [ [], [ 5, 7, 4 ], [ 5, 7 ] ] }
testStack.push(5) // FreqStack { freq: { '4': 1, '5': 3, '7': 2 }, stacks: [ [], [ 5, 7, 4 ], [ 5, 7 ], [ 5 ] ] }
testStack.pop() // FreqStack { freq: { '4': 1, '5': 2, '7': 2 }, stacks: [ [], [ 5, 7, 4 ], [ 5, 7 ] ] }
testStack.pop() // FreqStack { freq: { '4': 1, '5': 2, '7': 1 }, stacks: [[], [5, 7, 4], [5]] }
testStack.pop() // FreqStack { freq: { '4': 1, '5': 1, '7': 1 }, stacks: [ [], [ 5, 7, 4 ] ] }
testStack.pop() // FreqStack { freq: { '4': 0, '5': 1, '7': 1 }, stacks: [ [], [ 5, 7 ] ] }

/* Summary:
 * 1. use a frequency map
 * 2. use a 2d array - stack
 * 3. push based on the frequency map value. so if a number occurs twice push that number at index 2
 * 4. problem is kept clean so just pop at the end
 */

