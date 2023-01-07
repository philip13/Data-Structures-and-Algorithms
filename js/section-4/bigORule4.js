// bigORule4.js

// RULES BOOK
// RULE 1: Worst case
// RULE 2: Remove Constantants
// RULE 3: Different terms for inputs  
// RULE 4: Drop Non Dominants ✅
// remover o eliminar a los no dominantes

function printAllNumbersThenAllPairsSums(numbers){
  console.log('these are the numbers:');
  numbers.forEach(number => {
    console.log(number);
  });

  console.log('and these are their sums');
  numbers.forEach(firstNum => {
    numbers.forEach( secondNumber => {
      console.log(firstNum + secondNumber);
    })
  });
}

printAllNumbersThenAllPairsSums([1,2,3,4,5]);

// BIG O(n + n*n) = BIG O(n + n^2)
// n+ is not dominant
// BIG O(n^2) 

// OTHER Example
// O(x^2+3x+100+x/2) 
// x= 5
// O == ( (5*5)+ (3*5) + 100 + x/2 )
// O == (25) + (15) + 100 + (2.5)
// dominant term is 100 in this operations
// ❌❌❌❌ BUT!!!!!! ❌❌❌❌

// Worry about scale no the big constant
// If x= 50 ; 50^2 is greater that 100
// x^2 allways is the worry  