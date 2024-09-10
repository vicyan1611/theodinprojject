let buttonGrid = document.querySelector(".button-grid");

let screenCurrent = document.querySelector(".screen-current");
let screenLast = document.querySelector(".screen-last");

let firstStrNumber = "0";
let secondStrNumber = "";
let mainSign = null;

const clearFunction = () => {
  firstStrNumber = "0";
  secondStrNumber = "";
  mainSign = null;
  screenCurrent.textContent = "";
  screenLast.textContent = "";
};

const deleteFunction = () => {
  let currentNumber = null;
  if (mainSign === null) currentNumber = firstStrNumber;
  else currentNumber = secondStrNumber;
  if (currentNumber.length === 0) return;
  currentNumber = currentNumber.substring(
    0,
    screenCurrent.textContent.length - 1
  );
  if (mainSign === null) firstStrNumber = currentNumber;
  else secondStrNumber = currentNumber;
};

const myEval = () => {
  screenLast.textContent = `${firstStrNumber} ${mainSign} ${secondStrNumber} = `;
  let result = 0;
  let firstNumber = Number(firstStrNumber);
  let secondNumber = Number(secondStrNumber);
  if (mainSign === "÷") result = divide(firstNumber, secondNumber);
  else if (mainSign === "×") result = multiply(firstNumber, secondNumber);
  else if (mainSign === "-") result = subtract(firstNumber, secondNumber);
  else if (mainSign === "+") result = sum(firstNumber, secondNumber);
  screenCurrent.textContent = String(result);
  firstStrNumber = String(result);
  secondStrNumber = "";
  mainSign = null;
};

buttonGrid.addEventListener("click", (e) => {
  if (e.target.id >= "0" && e.target.id <= "9") {
    if (mainSign === null) {
      if (firstStrNumber === "0") firstStrNumber = e.target.id;
      else firstStrNumber += e.target.id;
    } else {
      secondStrNumber += e.target.id;
    }
  } else if (e.target.id === "dot") {
    if (mainSign === null) {
      if (!firstStrNumber.includes(".")) firstStrNumber += ".";
    } else {
      if (!secondStrNumber.includes(".")) secondStrNumber += ".";
    }
  } else if (e.target.id === "divide") {
    mainSign = "÷";
  } else if (e.target.id === "multiply") {
    mainSign = "×";
  } else if (e.target.id === "subtract") {
    mainSign = "-";
  } else if (e.target.id === "add") {
    mainSign = "+";
  } else if (e.target.id === "equal") myEval();
  else if (e.target.id === "clear") clearFunction();
  else if (e.target.id === "delete") deleteFunction();
  if (mainSign === null) {
    screenCurrent.textContent = firstStrNumber;
  } else {
    screenCurrent.textContent = secondStrNumber;
    screenLast.textContent = `${firstStrNumber} ${mainSign}`;
  }
});

const sum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

const subtract = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    alert("Can't divide by zero");
    return;
  }
  return (firstNumber * 1.0) / secondNumber;
};
