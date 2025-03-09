'use strict'

const calcAdd = (num1, num2) => num1 + num2;
const calcSubtract = (num1, num2) => num1 - num2;
const calcMultiply = (num1, num2) => num1 * num2;
const calcDivide = (num1, num2) => num1 / num2;

let numInput1 = 0;
let numInput2 = 0;
let operator = '';

const operate = (num1, oper, num2) => {
    if (oper === '+') {
        return calcAdd(num1, num2);
    } else if (oper === '-') {
        return calcSubtract(num1, num2);
    } else if (oper === '*') {
        return calcMultiply(num1, num2);
    } else if (oper === '/') {
        return calcDivide(num1, num2);
    }
};