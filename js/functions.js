"use strict";

// function showFirstMessage (agrs) {actions}
// function declaration
function showFirstMessage (text) {

    console.log(text);
}

// call function!
showFirstMessage("Hi there!");

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 6));
console.log(calc(5, 88));
console.log(calc(15, 16));

function ret() {
    let num = 50;
//  some code


    return num;
}

const anotherNum = ret();

console.log(anotherNum);

// function expression
const logger = function() {
    console.log("Hello");
};

logger(); 

// arrow function!
//    name     agrs     actions
const calc1 = a  => a + 1;
const calc2 = (a, b) => a + b;
const calc3 = (a, b) => {
    return a + b;
};