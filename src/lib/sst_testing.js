// SST Test Page, first let's put it on GitHub

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = (num) => num + 1 // num goes up by one
const dbl = (num) => num * 2 // doubles the num

const arg0 = 2
const arg1 = 3
const arg2 = 4
const sstArgs = (num) => num+arg1 * num+arg2

const sstFunction = (arg0) => arg1 * arg2 * arg0;

const sstArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const odds = [filter(sstArray) => (! % 2)];
const sstList = []
// array that filtes out even numbers
function checkOdd(n2) {
    return !(n2 % 2);
  }
console.log(sstArray.filter(checkOdd));



// try to learn from this stuff -- how does this syntax work.  I think inc(2) will resolve to 3.

// console.log(carName);
// console.log(inc(333));
// console.log(inc(32));
// console.log(inc(13));
// console.log(sstFunction(3));

