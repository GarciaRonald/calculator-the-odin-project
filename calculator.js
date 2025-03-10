'use strict'

const display = document.querySelector('#display');
const btn1 = document.querySelector('#button-1');
const btn2 = document.querySelector('#button-2');
const btn3 = document.querySelector('#button-3');
const btn4 = document.querySelector('#button-4');
const btn5 = document.querySelector('#button-5');
const btn6 = document.querySelector('#button-6');
const btn7 = document.querySelector('#button-7');
const btn8 = document.querySelector('#button-8');
const btn9 = document.querySelector('#button-9');
const btn0 = document.querySelector('#button-0');
const btnDot = document.querySelector('#button-dot');
const btnAdd = document.querySelector('#button-add');
const btnSub = document.querySelector('#button-sub');
const btnMul = document.querySelector('#button-mul');
const btnDiv = document.querySelector('#button-div');
const btnEqual = document.querySelector('#button-equal');
const btnClear = document.querySelector('#button-c');

const calcAdd = (num1, num2) => num1 + num2;
const calcSubtract = (num1, num2) => num1 - num2;
const calcMultiply = (num1, num2) => num1 * num2;
const calcDivide = (num1, num2) => num1 / num2;

display.textContent = '0';

let numInput1 = '';
let numInput2 = '';
let operator = '';
let result = '';

const clickButton = (e) => {
    if (display.textContent === 'Error') {
        numInput1 = '';
        numInput2 = '';
        operator = '';
        result = '';
    }
    switch(e.target.textContent) {
        case 'c':
            numInput1 = '';
            numInput2 = '';
            operator = '';
            display.textContent = '0';
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            if (result) {
                numInput1 = '';
                numInput2 = '';
                operator = '';
                numInput1 += e.target.textContent;
                display.textContent = numInput1;
                break
            }
            if (!operator) {
                numInput1 += e.target.textContent;
                display.textContent = numInput1;
            } else {
                numInput2 += e.target.textContent;
                display.textContent = numInput2;
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            if (!numInput1 && !numInput2) {
                display.textContent = 'Error';
                numInput1 = '';
                numInput2 = '';
                operator = '';
                break;
            }
            if (result || (numInput1 && numInput2 && operator)) {
                result = operate(numInput1 * 1, operator, numInput2 * 1);
                display.textContent = result;
                numInput1 = result;
                numInput2 = '';
            }
            operator = e.target.textContent;
            break;
        case '=':
            if (!numInput1 || !numInput2 || !operator) {
                display.textContent = 'Error';
                break;
            }
            result = operate(numInput1 * 1, operator, numInput2 * 1);
            display.textContent = result;
            break;
    }
};

const operate = (num1, oper, num2) => {
    if (oper === '+') {
        return calcAdd(num1, num2);
    }
    if (oper === '-') {
        return calcSubtract(num1, num2);
    }
    if (oper === 'x') {
        return calcMultiply(num1, num2);
    }
    if (oper === '÷') {
        let divResult = calcDivide(num1, num2);
        return divResult === Infinity ? 'Error: Div by 0' : divResult;
    }
};

btn1.addEventListener('click', clickButton);
btn2.addEventListener('click', clickButton);
btn3.addEventListener('click', clickButton);
btn4.addEventListener('click', clickButton);
btn5.addEventListener('click', clickButton);
btn6.addEventListener('click', clickButton);
btn7.addEventListener('click', clickButton);
btn8.addEventListener('click', clickButton);
btn9.addEventListener('click', clickButton);
btn0.addEventListener('click', clickButton);
btnDot.addEventListener('click', clickButton);
btnAdd.addEventListener('click', clickButton);
btnSub.addEventListener('click', clickButton);
btnMul.addEventListener('click', clickButton);
btnDiv.addEventListener('click', clickButton);
btnEqual.addEventListener('click', clickButton);
btnClear.addEventListener('click', clickButton);