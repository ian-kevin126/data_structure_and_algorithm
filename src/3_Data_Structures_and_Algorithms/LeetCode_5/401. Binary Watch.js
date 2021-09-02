401. Binary Watch

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.


For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
Hide Company Tags Google
Hide Tags Backtracking Bit Manipulation
Hide Similar Problems (M) Letter Combinations of a Phone Number (E) Number of 1 Bits
/**
 * @param {number} num
 * @return {string[]}
 */
// Just go through the possible times and collect those with the correct number of one-bits.
// O(1)?
var readBinaryWatch = function(num) {
    let results = [];
    if (num === null) { // when num = 0, should be [0:00]
        return results;
    }
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            let times = (i * 64 + j).toString(2).split('1').length - 1; // how to count 1 in a string like'011100010'
            if (times === num) {
                let min = j >= 10 ? j : '0' + j;
                results.push(i + ':' + min); // format the time
            }
        }
    }
    return results;
};
