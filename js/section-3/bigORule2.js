// bigORule2.js
// RULES BOOK
// RULE 1: Worst case
// RULE 2: Remove Constantants ✅
// RULE 3: Different terms for inputs  
// RULE 4: Drop Non Dominants 

function printFirstItemFHalfThenSayHi100Time(items) {
  console.log(items[0]); // 1

  var middleIndex = Math.floor(items.length/2); // 1
  var index = 0; //1

  while(index < middleIndex){
    console.log(items[index]);
    index++;
  }

  for (let index = 0; index < 100; index++) {
    console.log('Hi');
  }
}

// O(1 + n/2 + 100)
// O(n+1)
// convert to =>
// O(n)