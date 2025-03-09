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
const btnAdd = document.querySelector('#button-add');
const btnSub = document.querySelector('#button-sub');
const btnMul = document.querySelector('#button-mul');
const btnDiv = document.querySelector('#button-div');
const btnClear = document.querySelector('#button-c');

const calcAdd = (num1, num2) => num1 + num2;
const calcSubtract = (num1, num2) => num1 - num2;
const calcMultiply = (num1, num2) => num1 * num2;
const calcDivide = (num1, num2) => num1 / num2;

let numInput1 = '';
let numInput2 = '';
let operator = '';

const clickButton = (e) => {
    console.log(e.target.innerHTML);
    switch(e.target.innerHTML) {
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
            numInput1 += e.target.innerHTML;
            display.innerHTML = numInput1;
            break;
    }
};

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
btnAdd.addEventListener('click', clickButton);
btnSub.addEventListener('click', clickButton);
btnMul.addEventListener('click', clickButton);
btnDiv.addEventListener('click', clickButton);
btnClear.addEventListener('click', clickButton);