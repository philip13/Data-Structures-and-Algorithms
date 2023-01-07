function booo(n) {
  for (let index = 0; index < n.length; index++) {
    console.log('booo!');
  }
}

booo([1, 2, 3, 4, 5]); 
// space complexity: have aditional space?
// NO, O(1)


function arrayOfHiNTimes(n){
  let hiArray = []; // New Data Structure

  for (let index = 0; index < n; index++) {
    hiArray[i] = 'hi';
  }

  return hiArray;
}

arrayOfHiNTimes(6);
// space complexity
// O(n)
