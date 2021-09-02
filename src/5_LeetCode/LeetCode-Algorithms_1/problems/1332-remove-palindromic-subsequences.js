// 1332. Remove Palindromic Subsequences
// Easy   58%


// Given a string s consisting only of letters 'a' and 'b'. In a single step you
// can remove one palindromic subsequence from s.
// Return the minimum number of steps to make the given string empty.
// A string is a subsequence of a given string, if it is generated by deleting
// some characters of a given string without changing its order.
// A string is called palindrome if is one that reads the same backward as well
// as forward.

// Example 1:
// Input: s = "ababa"
// Output: 1
// Explanation: String is already palindrome
// Example 2:
// Input: s = "abb"
// Output: 2
// Explanation: "abb" -> "bb" -> "".
// Remove palindromic subsequence "a" then "bb".
// Example 3:
// Input: s = "baabb"
// Output: 2
// Explanation: "baabb" -> "b" -> "".
// Remove palindromic subsequence "baab" then "b".
// Example 4:
// Input: s = ""
// Output: 0

// Constraints:
//     0 <= s.length <= 1000
//     s only consists of letters 'a' and 'b'


/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
  if (s.length === 0) return 0
}

;[
  'a', // 1
  'ababa', // 1
  'aababa', // 2 a
  'baababababbbaaba', //2
  'abbaba', //2  a
  'abbabaa', //2  aba
  'abbabaaa', //2
  'abbabaaabbbb', //2
].forEach(() => {

})

let a = 'abbabaaa'
for (let i = 0; i < a.length; i++) {
  for (let j = 1; j < a.length; j++) {
    for (let k = 0; k < a.length - j; k++) {
      let b = a.split('')
      let c = b.splice(k, j)
      let br = b.concat().reverse().join('')
      let cr = c.concat().reverse().join('')
      if (b.join('') == br && c.join('') == cr) {
        console.log(b.join(''), c.join(''))
      }
    }
  }
}
console.log('end')
// Solution:
// 01101000
// TODO #1332 回文

// Submission Result: Accept