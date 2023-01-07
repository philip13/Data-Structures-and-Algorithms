function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(box => {
    console.log(box);
  });

  boxes2.forEach(box2 => {
    console.log(box2);
  });
}

// Big O(2n)  🚫
// Big O(n + m) ✅
compressBoxesTwice(arr1, arr2);


