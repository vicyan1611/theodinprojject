const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (array) {
  let res = 0;
  array.forEach((num) => {
    res += num;
  });
  return res;
};

const multiply = function (array) {
  let res = 1;
  array.forEach((num) => {
    res *= num;
  });
  return res;
};

const power = function (number, power) {
  let res = 1;
  return Math.pow(number, power);
};

const factorial = function (number) {
  let res = 1;
  for (let i = 1; i <= number; ++i) res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
