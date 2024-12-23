// var has functional scope and hosted to the top of the scope
//example
console.log(varVariable); // no error
var varVariable = 10;
// const and let has block scope and only be use after declaration
//example
console.log(constVariable, letVariable); // reference error
let letVariable = 80;
const constVariable = 90;
