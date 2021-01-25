'use strict';

let arr = [ [4], [1, 24, -23, 28, [4, 15, 2], 9, 55], 23, 5, 194, [[22, [7, [45, [[34, 4], 3]]]], [3], [40, 324]], 34, [1, 5, [[3, 2, 9], 349], [9]], 75, [83, [3, -10, 5], 23], 45, [[[[2], 1]]], 453, 123, 99,];

let sum = 0;

function summa(inputArray) {
  inputArray.forEach(value => {
    if (value.length) {
      summa(value);
    }
    else {
      sum += value;
    }
  });
}

summa(arr);

console.log(sum);

