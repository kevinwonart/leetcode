/***
 *
567. Permutation in String
 Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 *
***/

/* solution by eddyhdzg
 * Explanation

First genereate chars array
Fill characters array
Loop by decrementing current char and incrementing past character.
Check if chars array are all 0s.
var checkInclusion = function (s1, s2) {
  const chars = new Array(26).fill(0);

  const isPermutation = () => chars.every((char) => char === 0);

  for (const char of s1) {
    chars[char.charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < s2.length; i++) {
    chars[s2[i].charCodeAt(0) - 97]--;

    if (i >= s1.length) {
      chars[s2[i - s1.length].charCodeAt(0) - 97]++;
    }

    if (isPermutation()) return true;
  }

  return false;
};

/* Solution by hadyawayda
 * Using prime numbers
function checkInclusion(s1: string, s2: string, k = s1.length, hash1 = 0, hash2 = 0): boolean {
  const prime = [2, 6, 15, 28, 55, 78, 119, 152, 207, 290, 341, 444, 533, 602, 705, 848, 1003, 1098, 1273, 1420, 1533, 1738, 1909, 2136, 2425, 2626]
  for ( let i = 0; i < k; i++ ) {
    hash1 += prime[s1.charCodeAt(i) - 97]
    hash2 += prime[s2.charCodeAt(i) - 97]
  }
  if ( hash1 === hash2 ) {
    return true
  }
  for ( let i = 0; i < s2.length - k; i++ ) {
    hash2 += prime[s2.charCodeAt(i + k) - 97] - prime[s2.charCodeAt(i) - 97]
    if ( hash1 === hash2 ) {
      return true
    }
  }
  return false
};
*/

/*
Intuition
We use Sliding window approach with HashMap to store calculations

Approach
We declare HashMaps in one we store s1 char frequency, and second to store our window that are length of s1 string. then we iterate in while loop over s2 string and calculate frequency of character of our window, on each iteration after we reach needed length we check that we have permutation by calling helper function check, and if we have we return true, then we move our window to right, by adding one character at right pointer and subtractiong or deleting char from our window at left pointer, if we did not found any permutations we return false.

Complexity
Time complexity:
O(n * m) -> we iterate over s2 string in while loop and iterate over s1 string in check helper function
Space complexity:
O(n) -> we use two HashMap's to store character frequency and several constants for pointers and count.
Code
function checkInclusion(s1: string, s2: string): boolean {
    // check for edge case when s1 > s2
    if(s1.length > s2.length) return false;
    // declare HashMap to store s1 char frequency
    const s1map = new Map<string, number>();
    // iterate over s1 string
    for(let i = 0; i < s1.length; i++) {
        // calculate frequency
        s1map.set(s1[i], s1map.has(s1[i]) ? s1map.get(s1[i]) + 1 : 1);
    }
    // declare second HashMap to store our window char frequency
    const s2map = new Map<string, number>();
    // declare len to check if we have window of needed length
    let len = 0;
    // declare left pointer
    let l = 0;
    // declare right pointer
    let r = l;
    // iterate over s2 string:
    while(r <= s2.length) {
        // if we didn't have our window length:
        if(len < s1.length) {
            // calculate our char fequency of our window
            s2map.set(s2[r], s2map.has(s2[r]) ? s2map.get(s2[r]) + 1 : 1)
            // increment len
            len++;
        // if we have reach length of our window:
        } else {
            // we check that our window have permutation, if true we return true
            if(check(s1map, s2map)) return true;
            // else we get frequency of char at left pointer in our window
            const val = s2map.get(s2[l]);
            // if frequency more than one:
            if(val > 1) {
                // we decrement frequency of char at left pointer in our window
                s2map.set(s2[l], s2map.get(s2[l]) - 1)
            // if char is unique in our window
            } else {
                // we delete it from window
                s2map.delete(s2[l])
            }
            // increment left pointer
            l++;
            // calculate frequency of char at right pointer
            s2map.set(s2[r], s2map.has(s2[r]) ? s2map.get(s2[r]) + 1 : 1)
        }
        // increment right pointer
        r++;
    }
    // return false since we did not find any permutations
    return false;
};

// this function helps us to check for permutation in frequency map of s1 and our window in s2
function check(s1map: Map<string, number>, s2map: Map<string, number>): boolean {
    // we create counter to count each char frequency
    let count = 0;
    // iterate over s1 frequency map:
    s1map.forEach((value, key) => {
        // get window char frequency
        const check = s2map.get(key);
        // if we have frequency and it's value are equals to s1 char frequency, we count this char
        if(check && value === check) count++
    })
    // if our count match s1 frequency we return true as this means we found ur permutation, else false
    return count === s1map.size;
}
*/

/* My writeup
 *
The solution to this question is similar to the previous question. You get the length of the shorter, or one of the strings, 
use that as a window and "slide" it across the greater length string and use functional check. One solution creates an array
index for a character and then adds up each value by getting the index of the character that corresponds to the code for that
character and then creates a unique "value" for the string or substring. The charCodeAt function returns a 97+ index so that "a"
is returned with a number 97. So the programmer subtracts charCodeat a particular index. then gets the value for it and adds
it by the index of the array. I'm thinking that creating a value array for corresponding character isn't neccessary. since 
each character is already unique and gives the same value. It might be extra work. the second solution does the same thing 
ine essenece but creates a 26 size array but creates a list of unique prime. As long as the index for the corresponding char
are unique this isn't neccesssary. the last solution uses a key-value map/hash map approach. it gets the char and then counts 
its number of occurence. then checks for there being a permutation. This problem is the same as the /438.ts except this time
this only checks if one permutation exists. the problem before finds all index of a permutation
 *
*/
