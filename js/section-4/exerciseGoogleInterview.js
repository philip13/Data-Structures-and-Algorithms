// *************************
// 1. whe the interviewer say the question, write down the keys points at the top ⬇️⬇️⬇️ (i.e sorted array, ints, negative)
// Make shure you have all details. Show how organized you are
// *************************
// *************************
// Collection number
// Find the mach in pair that sum the value
// For example:
// [1, 2, 3, 9 ] sum = 8; return false
// [1, 2, 4, 4 ] sum = 8; return false
// assum that they are ordered
// all integers and can be negatives


// Given one array, find two numbers that adding betwing are the result

// 2 inputs
// arrat of integers, integer num
// output: boolean

// Naive 
// If the array is sorted

function hasPairWithSumSorted(arr, sum) {
  // create two index pointers to find one by one 
  // one from left and one for right  
  let left = 0
  let right = arr.length-1
  while(left < right){
    const left_num = arr[left]
    const rigth_num = arr[right]
    // ... the sum of two num are equals to sum?
    const my_sum = (left_num + rigth_num)
    // return true if arre the sum 
    if (sum === my_sum){
      return true;
    }
    // check if my sum are less that we expected
    else if(my_sum < sum) {
      left++;
    } 
    // else decrease right index
    else {
      right--;
    }
  }
  return false;
}

// console.log("return false", hasPairWithSumSorted([1, 2, 3, 9 ], 8) );
// console.log("return true", hasPairWithSumSorted([1, 2, 4, 4 ], 8) );

// NAVI
// if is not sorted what can I do?
function hasPairWithSum(arr, sum) {
  for (let index = 0; index < arr.length; index++) {
    for(let jindex = index+1; jindex < arr.length; jindex++){
      let my_sum = arr[index] + arr[jindex];
      // console.log(" my sum ", arr[index], "+", arr[jindex], "=", my_sum, sum);
      if( sum === my_sum){
        return true;
      }
    }
  }
  return false;
}

console.log("return false", hasPairWithSum([], 8) );
console.log("return true", hasPairWithSum([1, 2, 4, 4 ], 8) );
console.log("return true [6,4,3,2,1,7] 9", hasPairWithSum([6,4,3,2,1,7], 9));

// Big O(n^2) Time complexity
// Big O(1) Space complexity

// Better
// Use set() or object if you want
function hasPairWithSum2(arr, sum){
  restNums = new Set();

  for (let index = 0; index < arr.length; index++) {
    if( restNums.has(arr[index]) ){
      return true;
    }
    rest = sum - arr[index];
    restNums.add(rest);
  }
  return false;
}

myArrUnSorted = [6, 4, 3, 2, 1, 7] // 9
console.log("hasPairWithSum2() true", hasPairWithSum2(myArrUnSorted, 9));
console.log("hasPairWithSum2() false", hasPairWithSum2([1, 2, 3, 9 ], 8));

// Big O(n) time complexity
// Big O(n) space complexity