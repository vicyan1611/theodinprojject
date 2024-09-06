const sumAll = function (firstNum, secondNum) {
  if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum))
    return "ERROR";
  if (firstNum < 0 || secondNum < 0) return "ERROR";
  let sum = 0;
  let a = Math.min(firstNum, secondNum);
  let b = Math.max(firstNum, secondNum);
  for (let i = a; i <= b; ++i) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
