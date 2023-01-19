// 1. When the interviewer say the question, write down the key poinst at the top. Make sure you have all the details. Show how organized you are:
// ------------------------------------------
// ------------------------------------------

// Give 2 arrays, create a function  that let's a user know (true/false) whether these two arrays contain any common items

// For Example: 
// const array1 = ['a', 'b', 'c', 'd', 'x'];
// const array1 = ['z', 'y', 'i'];
// should return false.
// --------------------
// const array1 = ['a', 'b', 'c', 'd', 'x'];
// const array2 = = ['z', 'y', 'x'];
// should return true.

// 2. Make sure you double check.
// What are the inputs? / What are the outputs?

// input 2 parameters - arrays - no size limit
// return true or false

// 3. What it the most importa value of the problem?
// Do you have time, and space and memory ... etc. What is the main goal?
// 5. Naive/ brute force. Resolve into mind. 
// My first approach explained is Big O(n^2)


// 6. Tell them why this approach is no the best O(n^2) or higer
// 7. Show your approach, comment things and see where you may be able to break things, Any repetition, bottlenecks 🍾 O(n^2), or unnecessary work?
//
let array1 = ['a', 'b', 'c', 'd', 'x'];
let array2 = ['z', 'y', 'x'];
// const array1 = ['a', 'b', 'c', 'd', 'x'];
// const array2 = ['z', 'y', 'i'];

function containsCommonItem(arr1, arr2) {
  for (let index = 0; index < arr1.length; index++) {
    for(let jindex= 0; jindex < arr2.length; jindex++){
      if(arr1[index] === arr2[jindex] ) {
        return true;
      }
    }
  }
  return false;
}

// O(n^2)
// Big O(1) Space Complexity

console.log("containsCommonItem", containsCommonItem(array1, array2) );
// ________________________________
// ________________________________
// 8. Before you start codding, walk through your code and write down the steps you are going to follow
array1 = ['a', 'b', 'c', 'd', 'x'];
array2 = ['z', 'y', 'x'];
// const obj = {
//   a: true,
//   b: true,
//   c: true,
//   x: true
// }
function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for(let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);
  // loop troug second array and check if items in second array exist on create object.
  for(let j =0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// Big O(a + b)
// Big O(n) Time Complexity
// Big O(a) Space Complexity

containsCommonItem2(array1, array2);

function containsCommonItem3(arr1, arr2){
  return arr1.some(item => arr2.includes(item) );
}

console.log("containsCommonItem3", containsCommonItem3(array1, array2));