"use strict";

const display = document.querySelector("input.display");
const equalTo = document.querySelector(".equal");
const zero = document.querySelector(".zero");
const doubleZero = document.querySelector(".double-zero");
const plus = document.querySelector(".plus");
const three = document.querySelector(".three");
const two = document.querySelector(".two");
const one = document.querySelector(".one");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const decimal = document.querySelector(".decimal");
const deleteBtn = document.querySelector(".delete");
const clearBtn = document.querySelector(".clear");

seven.addEventListener("click", function () {
  display.value += seven.value;
});
eight.addEventListener("click", function () {
  display.value += eight.value;
});
nine.addEventListener("click", function () {
  display.value += nine.value;
});
one.addEventListener("click", function () {
  display.value += one.value;
});
two.addEventListener("click", function () {
  display.value += two.value;
});
three.addEventListener("click", function () {
  display.value += three.value;
});
four.addEventListener("click", function () {
  display.value += four.value;
});
five.addEventListener("click", function () {
  display.value += five.value;
});
six.addEventListener("click", function () {
  display.value += six.value;
});
minus.addEventListener("click", function () {
  display.value += minus.value;
});
decimal.addEventListener("click", function () {
  display.value += decimal.value;
});
plus.addEventListener("click", function () {
  display.value += plus.value;
});
multiply.addEventListener("click", function () {
  display.value += multiply.value;
});
doubleZero.addEventListener("click", function () {
  display.value += doubleZero.value;
});
zero.addEventListener("click", function () {
  display.value += zero.value;
});
divide.addEventListener("click", function () {
  display.value += divide.value;
});
equalTo.addEventListener("click", function () {
  display.value = eval(display.value);
});
deleteBtn.addEventListener("click", function () {
  display.value = display.value.toString().slice(0,-1);
});
clearBtn.addEventListener("click", function () {
  display.value = " ";
});


