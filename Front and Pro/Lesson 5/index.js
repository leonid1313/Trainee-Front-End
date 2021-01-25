'use strict';

const arr = [];
let answer;

while (answer !== null) {
  answer = prompt('Type something');
  if (answer !== null ) {
    arr.push(answer);
  }
}


// (найбольшее целое число)  

let arrResult  = arr.map(function(item) {
  let number = parseInt(item);
  return isNaN(number)? item : number;
});

let maxValue = Math.max.apply(null,arrResult);
function isInteger(maxValue) {
  return (maxValue ^ 0) === maxValue;
}

// (найменьшее целое число) 

let minValue = Math.min.apply(null,arrResult);
function isInteger(minValue) {
  return (minValue ^ 0) === minValue;
}

// среднее арифметическое

let sum = arrResult.reduce((a, b) => a + b);
let result = sum / arrResult.length;

// количество четных положительных целых чисел

function isPositive(num) {
	if ((num % 2 == 0) && (num > 0)) {
		return true;
	} else {
    return false;
  }

}

let newArr = [];
for (let i = 0; i <= arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}


// количество отрицательных чисел

let negatives = []
for(let i = 0; i < arr.length; i++) {
  if(arr[i] < 0) {
    negatives.push(arr[i]);
  }
}

// сумма всех дробных чисел (так и не получилось посчитать сумму)

let massiv = arr.filter(function(number) {
 if (number % 1 != 0) {
  return number  
 } 

});


let object = {
  allValues: arr,
  elements: arr.length,
  maxInteger: maxValue,
  minInteger: minValue,
  arithmeticMean: result,
  evenPositiveIntegerElements: newArr,
  negativeElements: negatives,
  fractionSum: massiv,
};

console.log(object);
