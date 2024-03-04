"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('#button');
const numberresult = [];
const stringresult = [];
function adding(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResults(resultobj) {
    console.log(resultobj.val);
}
console.log(adding(1, 2));
if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result = adding(+num1, +num2);
        const stringResult = adding(num1, num2);
        numberresult.push(result);
        stringresult.push(stringResult);
        printResults({ val: result, timestamp: new Date() });
        console.log(numberresult, stringresult);
    });
}
const mypromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('I woked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result);
});
