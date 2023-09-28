function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.querySelector('input[name="operation"]:checked');

  if (!operation) {
    alert("Please select an operation.");
    return;
  }

  let result;
  switch (operation.value) {
    case "addition":
      result = add(num1, num2);
      break;
    case "subtraction":
      result = subtract(num1, num2);
      break;
    case "multiplication":
      result = multiply(num1, num2);
      break;
    case "division":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("output").textContent = result;
}

function resetCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.querySelector('input[name="operation"]').checked = false;
  document.getElementById("output").textContent = "--";
}

