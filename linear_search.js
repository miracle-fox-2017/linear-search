'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  let count = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i] == target) {
      count += 1;
    }
  }
  if (count === 0) {
    return -1
  }
  return count;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1
console.log(linearSearch(2, random_numbers));

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let count = 0;
  let a = [];

  for (var j = 0; j < values.length;j++) {
    if (values[j] == target) {
      a.push(j);
    }
  }
  return a;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
