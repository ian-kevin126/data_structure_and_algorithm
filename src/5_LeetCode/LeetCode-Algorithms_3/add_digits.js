// https://leetcode.com/problems/add-digits/

//
// 258. Add Digits

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
//     Example:
//
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.
//     Follow up:
//     Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */

var addNumber = function(num) {
  return num
    .toString()
    .split("")
    .map(val => parseInt(val))
    .reduce((total, val) => total + val);
};

var addDigits = function(num) {
  let addnum = addNumber(num); //?
  while (addnum.toString().length > 1) {
    addnum = addNumber(addnum);
  }
  return addnum; //?
};

addDigits(199); //?
