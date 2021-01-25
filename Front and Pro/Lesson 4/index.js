'use strict';

const MAX_LENGHT = 6;
let result;
let currentNumber;
let expression = '';

const getUserDate = function(importance, validationFn) {
  let result;

  do {
    result = prompt(importance);

    if (result === null) {
      break;
    }
  }while (!validationFn(result));

  if (typeof result === 'string') {
    return result.trim()
  }else {
    return result
  }
};


const operatorValidation = function(value)  {
  const trimmedVal = (value ||'').trim();

  const isValid = trimmedVal ;
  
  if (value === null) {
    alert('Can not leave blank line');
  }else if ((isValid != '+') && (isValid != '-') && (isValid != '*') && (isValid != '/')) {
    alert('Invalid value entered')
  }

  return isValid;
};

const numberValidation = function(value)  {
  const trimmedVal = (value ||'').trim();
  const isValidLenght = Number(trimmedVal) > 0 ? trimmedVal.length <= MAX_LENGHT : trimmedVal.length <= MAX_LENGHT + 1;

  if ( value === null && !expression){
    alert('Can not leave one number');
  } else if (! isValidLenght){
    alert('Invalid value entered')
  } 

  return isValidLenght ;
};  

const calculateExpression = function(x, y, operator) {
  const xNum = Number(x);
  const yNum = Number(y);

  switch (operator) {
    case '+':
      return xNum + yNum;
    case '*' :
      return xNum * yNum;  
    case '/':
      return xNum / yNum;
    case '-' :
      return xNum - yNum;
  }
}

const operator = getUserDate('Operator', operatorValidation);

do {
  currentNumber = getUserDate(
    'enter number', numberValidation, expression);

  if (currentNumber === null) {
    continue;
  }

  if (result > Number.MAX_SAFE_INTEGER) {
    alert('very big results')
    break;
  }
  if (result < Number.MIN_SAFE_INTEGER) {
    alert('very small results')
    break;
  }
  if (result === undefined) {
    result = +currentNumber;
    expression += currentNumber;
  }else {
    result = calculateExpression( result, currentNumber, operator);
    expression += `${operator} ${currentNumber}`
  }

}while (currentNumber !== null);

alert(`${expression} = ${result}`);


