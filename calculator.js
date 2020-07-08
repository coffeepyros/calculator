// For "quicker" access, or more readable code
var input = document.getElementById("input_display");

// Has the input already had an operation symbol
// to avoid 1 ++ 3, or 1+4-2
var opFlag = false;

// Has the input already had one decimal point
// to avoid things like 1..3
var pointFlag = false;

// To check if a result was displayed
// Used to clear display, if you press a number
// after a result was shown, so it doesnt add
// the new number to the old result
var resultFlag = false;

// Adds a number to the input field, if you press
// the corresponding button
function press(number) {
  if (resultFlag === false) {
    input.value += number;
  } else {
    input.value = number;
    resultFlag = false;
  }
}

// Deletes the last character in the input field
function clearOne() {
  input.value = input.value.substr(0, input.value.length - 1);
}

function operation(op) {
  // allow operation only, if there has not been one before
  if (opFlag === false) {
    switch (op) {
      case "add":
        input.value += "+";
        break;
      case "sub":
        input.value += "-";
        break;
      case "mult":
        input.value += "×";
        break;
      case "div":
        input.value += "÷";
        break;
      case "mod":
        input.value += "%";
        break;
      default:
        console.log("Not a valid operation!");
    }
    opFlag = true;
    pointFlag = false;
  }
}

// --- Adds a decimal point ---
// doesn't add a decimal point, if there is already one in the same number
// does add a decimal point again, if there was an operation symbol
function point() {
  // allow operation only, if there has not been one before
  if (pointFlag === false) {
    input.value += ".";
  }
  pointFlag = true;
}

// Clears Input, sets the flags for an operation symbol,
// or decimal point back to false
function reset() {
  input.value = "";
  opFlag = false;
  pointFlag = false;
}

// The calculator function itself. Looks for operation symbols, if present splits
// the input string into two parts - before and after the operation symbol
// then removes leading or trailing spaces (that come from "_+_") or user input
// and does the actual mathematical operation.
function calc() {
  let result = 0;
  if (input.value.indexOf("+") != -1) {
    let temp = input.value.split("+");
    let x = parseFloat(temp[0].trim());
    let y = parseFloat(temp[1].trim());
    result = x + y;
  } else if (input.value.indexOf("-") != -1) {
    let temp = input.value.split("-");
    let x = parseFloat(temp[0].trim());
    let y = parseFloat(temp[1].trim());
    result = x - y;
  } else if (input.value.indexOf("×") != -1) {
    let temp = input.value.split("×");
    let x = parseFloat(temp[0].trim());
    let y = parseFloat(temp[1].trim());
    result = x * y;
  } else if (input.value.indexOf("÷") != -1) {
    let temp = input.value.split("÷");
    let x = parseFloat(temp[0].trim());
    let y = parseFloat(temp[1].trim());
    result = x / y;
  } else if (input.value.indexOf("%") != -1) {
    let temp = input.value.split("%");
    let x = parseFloat(temp[0].trim());
    let y = parseFloat(temp[1].trim());
    result = x % y;
  }
  reset();
  input.value = result;
  resultFlag = true;
}
