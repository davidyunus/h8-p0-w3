// function mengelompokkanAngka(arr) {
//   // you can only write your code here!
// }

function mengelompokkanAngka(arr) {
  var input = arr;
  var indexGenap = [];
  var indexGanjil = [];
  var kelipatan3 = [];

  for(var i = 0; i < input.length; i++) {
    if(input[i] % 2 == 0) {
      indexGenap.push(input[i]);
    }

    if(input[i] % 2 != 0) {
      indexGanjil.push(input[i]);
    }

    if(input[i] % 3 == 0) {
      kelipatan3.push(input[i]);
    }
  }
  return [ indexGenap, indexGanjil , kelipatan3 ];
}


// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
