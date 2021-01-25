'use strict';

const DEFAULT_ERROR = ('You entered a non-numeric value. Try again (Example 10)');
const DEFAULT_NUM = ('(Example 10)');
const DEFAULT_OPERATOR = ('(Example +)');
const DEFAULT_OPERATOR_ERROR = ('You entered a non-mathematical operator. Try again (Example +)');

let firstOperand
let secondOperand 
let mathematicalOperator
let result

do {
    firstOperand = +prompt('Enter the first number (Example 10)', DEFAULT_NUM); 
    if (!+firstOperand){
    alert(DEFAULT_ERROR)
    }
} while (!+firstOperand);

do {
    secondOperand = +prompt('Enter the second number (Example 10)', DEFAULT_NUM);
    if (!+secondOperand){
      alert(DEFAULT_ERROR)
      }
} while (!+secondOperand);

do {
    mathematicalOperator = prompt('Enter the mathematical operator', DEFAULT_OPERATOR).trim(mathematicalOperator);
    if ((mathematicalOperator != '+') && (mathematicalOperator != '-') && (mathematicalOperator != '*') && (mathematicalOperator != '/') && (mathematicalOperator != '**') && (mathematicalOperator != '%')){
      alert(DEFAULT_OPERATOR_ERROR)
      }
} while ((mathematicalOperator != '+') && (mathematicalOperator != '-') && (mathematicalOperator != '*') && (mathematicalOperator != '/') && (mathematicalOperator != '**') && (mathematicalOperator != '%'));


switch (mathematicalOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand !==0) {
        result = firstOperand / secondOperand;
      } else {
        result = 'You cannot divide by zero';
      }
      break;
      case '**':
      result = firstOperand ** secondOperand;
      break;
      case '%':
      result = firstOperand % secondOperand;
      break;

}

alert((firstOperand + mathematicalOperator + secondOperand + String('=') + result))