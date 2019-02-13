// SST Test Page, first let's put it on GitHub
// const add = (a, b) => a + b
// const addThree = (a, b, c) => a + b + c
<<<<<<< HEAD
=======
// INLINE FUNCTIONS
>>>>>>> master
// const inc = (num) => num + 1 // num goes up by one
// const dbl = (num) => num * 2 // doubles the num
// const arg0 = 2
// const arg1 = 3
// const arg2 = 4
// const sstArgs = (num) => num+arg1 * num+arg2
// const sstFunction = (arg0) => arg1 * arg2 * arg0;
// const nums = [1, 2, 3, 4, 5, 6, 4, 8, 9];
// const sstList = []
// Below code is from HackerRank
const negarr = [];
const arr = [];
arr.push([0, -4, -6, 0, -7, -6], [-1, -2, -6, -8, -3, -1], [-8, -4, -2, -8, -8, -6], [-3, -1, -2, -5, -7, -4], [-3, -5, -3, -6, -6, -6], [-3, -6, 0, -8, -6, -7]); // arr.push([1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 9, 2, -4, -4, 0], [0, 0, 0, -2, 0, 0], [0, 0, -1, -2, -4, 0]); arr.push([1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]); arr.push([1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 9, 2, -4, -4, 0], [0, 0, 0, -2, 0, 0], [0, 0, -1, -2, -4, 0]);
let lc = 0; let i = 0; let tot = 0; let lstTots = []; let maxSum = 0; let minSum = 0; let partialSum = 0;
    for(let x = 0; x < 4; x++)
    {
        while(lc < 4)
        {
            tot += Math.max(arr[i][lc] + arr[i][lc + 1]) + Math.max(arr[i][lc + 2]) + Math.max(arr[i + 1][lc + 1]) + Math.max(arr[i + 2][lc]) + Math.max(arr[i + 2][lc + 1]) + Math.max(arr[i + 2][lc + 2]);             
            if(tot < 0) { 
                if(negarr.length < 1 && maxSum == 0){
                    maxSum = tot;
                }else{                       
                maxSum = Math.max(tot, maxSum);              
                }
                negarr.push(tot); 
            }else{
                lstTots.push(Math.max(maxSum, tot));
                maxSum = Math.max(maxSum, tot);                 
            }
            lc++;
            tot = 0;
        }
    lc = 0;  
    i++;
    }
console.log(maxSum);

//============================================================================================
/* IRA's CODE:
================================
    def hourglassSum(arr):
    answer = None 
    for i in xrange(1,5):
    for j in xrange(1,5):
    sub_answer = arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1];
    if(answer == None or answer <= sub_answer):
    answer = sub_answer
    return answer
================================
*/


// IRA's CODE for Euler # 18/67
//==============================================
// triangle.reverse();
// answers = triangle[0];
// for (var i = 1; i < triangle.length; i++)
// {
//     n_answers = [];
//     for (var j = 0; j < triangle[i].length; j++)
//     {
//         n_answers[j] = triangle[i][j] + (answers[j] > answers[j + 1] ? answers[j] : answers[j + 1])
//     }
//     answers = n_answers;
// }
// console.log(answers[0]);
// ============================================= 


// array that filtes out even numbers
// function checkOdd(nums) {
//   var swap = function(i, j) {
//     var tmp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = tmp;
// };

// for (let i = 0; i < nums.length; i++) {
//     while (0 < nums[i] && nums[i] - 1 < nums.length
//             && nums[i] != i + 1
//             && nums[i] != nums[nums[i] - 1]) {
//         swap(i, nums[i] - 1);
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != i + 1) {
//         return i + 1;
//     }
// }
// return nums.length + 1;
// }
// console.log(nums.length + 1);
// checkOdd(nums);

