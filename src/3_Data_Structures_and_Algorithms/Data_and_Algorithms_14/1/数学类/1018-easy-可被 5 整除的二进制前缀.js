// 1018 easy 可被5整除的二进制前缀

// 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数
// （从最高有效位到最低有效位）。
// 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
//
// 示例 1：
// 输入：[0,1,1]
// 输出：[true,false,false]
// 解释：
// 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
// 示例 2：
// 输入：[1,1,1]
// 输出：[false,false,false]
// 示例 3：
// 输入：[0,1,1,1,1,1]
// 输出：[true,false,false,false,true,false]
// 示例 4：
// 输入：[1,1,1,0,1]
// 输出：[false,false,false,false,false]
//
// 提示：
// 1 <= A.length <= 30000
// A[i] 为 0 或 1


/**
 * 倒数第二个case过不了，无法查找元音
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let ans = []
    let index = 1
    let pointer = 0;
    while(index <= A.length){
        let number = parseInt(A.slice(pointer, index).join(''), 2)
        if(number % 5 === 0){
            ans.push(true);
            pointer = index;
        }else{
            ans.push(false);
        }
        index++
    }
    return ans;
};


var prefixesDivBy5__ = function(A) {
    let ans = []
    let index = 0
    let yushu = 0;
    while(index < A.length){
        yushu = yushu * 2 + A[index]
        if(yushu % 5 === 0){
            ans.push(true);
        }else{
            ans.push(false);
            yushu = yushu % 5;
        }
        index++
    }
    return ans;
};

console.log(prefixesDivBy5__([0,1,1,1,1,1]))
console.log(prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]))
// console.log(prefixesDivBy5__(
//     [0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,
//         1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,
//         1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,
//         1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,
//         1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,
//         1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,
//         1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,
//         1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,
//         1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,
//         0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,
//         0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,
//         0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,
//         1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,
//         1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,
//         0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,
//         0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1]
// ))

