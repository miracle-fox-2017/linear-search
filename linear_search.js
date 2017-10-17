'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var pointer = 0;
  while(values.length > pointer){
    //cek random_numbers == target, pointer juga disimpan
    if(values[pointer] == target){
      return pointer;
    } else {
      pointer += 1;
    }
  }
  return -1;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var result = [];
  var pointerGlobal = 0;
  while(values.length > pointerGlobal){
    if(values[pointerGlobal] == target){
      result.push(pointerGlobal);
    }
    pointerGlobal = pointerGlobal + 1;

  }
  return result;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
