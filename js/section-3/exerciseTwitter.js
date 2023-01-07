// Find 1st, Find Nth..

const tweetsArr = ['hi', 'my', 'teddy'];
tweetsArr[0]; // O(1)
tweetsArr[tweetsArr.length-1]; // O(1)

// Find 1st, Find Nth..
// compare dates and get the big o operation

const tweetsObArr = [
  {
    tweet: 'hi',
    date: 2020
  }, 
  {
    tweet: 'my',
    date: 2021
  }, 
  {
    tweet: 'teddy',
    date: 2022
  }
];
// compate each one with other is a nested loops
// Big O(n^2)


// -------------------------
// the notation of that in javaScript is O(1) because
// `lenght`  on js don't need to iterate is a property no a method
// but the correct answer is depends of the language 
"12345678901234567890".length // O(1)